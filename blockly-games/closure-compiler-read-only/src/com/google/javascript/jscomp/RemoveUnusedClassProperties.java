/*
 * Copyright 2011 The Closure Compiler Authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.google.javascript.jscomp;

import com.google.common.base.Preconditions;
import com.google.common.collect.Lists;
import com.google.common.collect.Sets;
import com.google.javascript.rhino.IR;
import com.google.javascript.rhino.Node;
import com.google.javascript.rhino.Token;
import com.google.javascript.rhino.jstype.JSType;

import java.util.List;
import java.util.Set;

/**
 * This pass looks for properties that are never read and removes them.
 * These can be properties created using "this", or static properties of
 * constructors or interfaces. Explicitly ignored is the possibility that 
 * these properties may be indirectly referenced using "for-in" or 
 * "Object.keys".  This is the same assumption used with 
 * RemoveUnusedPrototypeProperties but is slightly wider in scope.
 *
 * @author johnlenz@google.com (John Lenz)
 */
class RemoveUnusedClassProperties
    implements CompilerPass, NodeTraversal.Callback {
  private final AbstractCompiler compiler;
  private Set<String> used = Sets.newHashSet();
  private List<Node> candidates = Lists.newArrayList();

  private final boolean removeUnusedConstructorProperties;

  RemoveUnusedClassProperties(
      AbstractCompiler compiler, boolean removeUnusedConstructorProperties) {
    this.compiler = compiler;
    used.addAll(compiler.getExternProperties());
    this.removeUnusedConstructorProperties = removeUnusedConstructorProperties;
  }

  @Override
  public void process(Node externs, Node root) {
    NodeTraversal.traverse(compiler, root, this);
    removeUnused();
  }

  private void removeUnused() {
    for (Node n : candidates) {
      Preconditions.checkState(n.isGetProp());
      if (!used.contains(n.getLastChild().getString())) {
        Node parent = n.getParent();
        if (NodeUtil.isAssignmentOp(parent)) {
          Node assign = parent;
          Preconditions.checkState(assign != null
              && NodeUtil.isAssignmentOp(assign)
              && assign.getFirstChild() == n);
          compiler.reportChangeToEnclosingScope(assign);
          // 'this.x = y' to 'y'
          assign.getParent().replaceChild(assign,
              assign.getLastChild().detachFromParent());
        } else if (parent.isInc() || parent.isDec()) {
          compiler.reportChangeToEnclosingScope(parent);
          parent.getParent().replaceChild(parent, IR.number(0));
        } else {
          throw new IllegalStateException("unexpected: " + parent);
        }
      }
    }
  }

  @Override
  public boolean shouldTraverse(NodeTraversal t, Node n, Node parent) {
    return true;
  }

  @Override
  public void visit(NodeTraversal t, Node n, Node parent) {
     switch (n.getType()) {
       case Token.GETPROP: {
         String propName = n.getLastChild().getString();
         if (compiler.getCodingConvention().isExported(propName)
             || isPinningPropertyUse(n)
             || !isRemovablePropertyDefinition(n)) {
           used.add(propName);
         } else {
           // This is a definition of a property but it is only removable
           // if it is defined on "this".
           candidates.add(n);
         }
         break;
       }

       case Token.OBJECTLIT: {
         // Assume any object literal definition might be a reflection on the
         // class property.
         for (Node c : n.children()) {
           used.add(c.getString());
         }
         break;
       }

       case Token.CALL:
         // Look for properties referenced through "JSCompiler_propertyRename".
         Node target = n.getFirstChild();
         if (n.hasMoreThanOneChild()
             && target.isName()
             && target.getString().equals(NodeUtil.JSC_PROPERTY_NAME_FN)) {
           Node propName = target.getNext();
           if (propName.isString()) {
             used.add(propName.getString());
           }
         }
         break;
     }
  }

  private boolean isRemovablePropertyDefinition(Node n) {
    Preconditions.checkState(n.isGetProp());
    Node target = n.getFirstChild();
    return target.isThis()
        || (this.removeUnusedConstructorProperties && isConstructor(target))
        || (target.isGetProp()
            && target.getLastChild().getString().equals("prototype"));
  }

  private boolean isConstructor(Node n) {
    JSType type = n.getJSType();
    return type != null && (type.isConstructor() || type.isInterface());
  }

  /**
   * @return Whether the property is used in a way that prevents its removal.
   */
  private static boolean isPinningPropertyUse(Node n) {
    // Rather than looking for cases that are uses, we assume all references are
    // pinning uses unless they are:
    //  - a simple assignment (x.a = 1)
    //  - a compound assignment or increment (x++, x += 1) whose result is
    //    otherwise unused

    Node parent = n.getParent();
    if (n == parent.getFirstChild()) {
      if (parent.isAssign()) {
        // A simple assignment doesn't pin the property.
        return false;
      } else if (NodeUtil.isAssignmentOp(parent)
            || parent.isInc() || parent.isDec()) {
        // In general, compound assignments are both reads and writes, but
        // if the property is never otherwise read we can consider it simply
        // a write.
        // However if the assign expression is used as part of a larger
        // expression, we much consider it a read. For example:
        //    x = (y.a += 1);
        return NodeUtil.isExpressionResultUsed(parent);
      }
    }
    return true;
  }
}
