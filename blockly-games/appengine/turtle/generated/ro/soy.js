// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

goog.provide('Turtle.soy');

goog.require('soy');
goog.require('soydata');
goog.require('BlocklyGames.soy');


Turtle.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Turtle_moveTooltip">Deplasează țestoasa înainte sau înapoi cu \\nvaloarea specificată. </span><span id="Turtle_moveForward">deplasează înainte cu</span><span id="Turtle_moveBackward">deplasează înapoi cu</span><span id="Turtle_turnTooltip">Întoarce țestoasa la stânga sau la dreapta cu \\nnumărul de grade specificat. </span><span id="Turtle_turnRight">întoarce la dreapta cu</span><span id="Turtle_turnLeft">întoarce la stânga cu</span><span id="Turtle_widthTooltip">Modifică lățimea stiloului.</span><span id="Turtle_setWidth">setează lățimea la</span><span id="Turtle_colourTooltip">Schimbă culoarea stiloului.</span><span id="Turtle_setColour">setează culoarea la</span><span id="Turtle_penTooltip">Ridică sau coboară stiloul pentru a opri sau \\nîncepe desenarea. </span><span id="Turtle_penUp">ridică stiloul</span><span id="Turtle_penDown">coboară stiloul</span><span id="Turtle_turtleVisibilityTooltip">Face țestoasa (cercul și săgeata) vizibilă sau \\ninvizibilă. </span><span id="Turtle_hideTurtle">ascunde țestoasa</span><span id="Turtle_showTurtle">arată țestoasa</span><span id="Turtle_printHelpUrl">http://en.wikipedia.org/wiki/Printing</span><span id="Turtle_printTooltip">Desenează textul pe direcția țestoasei și în \\npoziția acesteia. </span><span id="Turtle_print">afișează</span><span id="Turtle_fontHelpUrl">http://en.wikipedia.org/wiki/Font</span><span id="Turtle_fontTooltip">Setează fontul utilizat de blocul de afișare.</span><span id="Turtle_font">font</span><span id="Turtle_fontSize">dimensiunea fontului</span><span id="Turtle_fontNormal">normală</span><span id="Turtle_fontBold">aldin</span><span id="Turtle_fontItalic">cursiv</span><span id="Turtle_submitDisabled">Run your program until it stops.  Then you may submit your drawing to the gallery.</span></div>';
};


Turtle.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return Turtle.soy.messages(null, null, opt_ijData) + '<table width="100%"><tr><td><h1>' + BlocklyGames.soy.titleSpan({appName: 'Țestoasă'}, null, opt_ijData) + BlocklyGames.soy.levelLinks({level: opt_ijData.level, maxLevel: opt_ijData.maxLevel, lang: opt_ijData.lang, suffix: ''}, null, opt_ijData) + '</h1></td><td class="farSide"><select id="languageMenu"></select>&nbsp;<button id="linkButton" title="Salvează și adaugă la blocuri. "><img src="media/1x1.gif" class="link icon21"></button>&nbsp;<button id="helpButton">Ajutor</button></td></tr></table><div id="visualization"><canvas id="scratch" width="400" height="400" style="display: none"></canvas><canvas id="answer" width="400" height="400" style="display: none"></canvas><canvas id="display" width="400" height="400"></canvas></div><table style="padding-top: 1em;"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><svg id="slider" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="150" height="50"><!-- Slow icon. --><clipPath id="slowClipPath"><rect width=26 height=12 x=5 y=14 /></clipPath><image xlink:href="turtle/icons.png" height=42 width=84 x=-21 y=-10 clip-path="url(#slowClipPath)" /><!-- Fast icon. --><clipPath id="fastClipPath"><rect width=26 height=16 x=120 y=10 /></clipPath><image xlink:href="turtle/icons.png" height=42 width=84 x=120 y=-11 clip-path="url(#fastClipPath)" /></svg></td><td style="width: 15px;"><img id="spinner" style="visibility: hidden;" src="turtle/loading.gif" height=15 width=15></td><td style="width: 190px; text-align: center"><button id="runButton" class="primary" title="Run the program you wrote."><img src="media/1x1.gif" class="run icon21"> Rulează programul</button><button id="resetButton" class="primary" style="display: none" title="Stop the program and reset the level."><img src="media/1x1.gif" class="stop icon21"> Resetează</button></td></tr></table>' + ((opt_ijData.level == 10 && ! opt_ijData.html) ? '<table style="padding-top: 1em; width: 400px;"><tr><td style="text-align: center;"><form action="https://www.reddit.com/r/BlocklyGames/" target="gallery"><button type="submit" title="Open the gallery of drawings on Reddit."><img src="media/1x1.gif" class="reddit icon21"> See Gallery</button></form></td><td style="text-align: center;"><button id="submitButton" title="Submit your drawing to Reddit."><img src="media/1x1.gif" class="camera icon21"> Submit to Gallery</button><canvas id="thumbnail" width="100" height="100" style="display: none"></canvas><form id="t2r_form" action="turtle-reddit" method="POST" target="_blank" style="display: none"><input id="t2r_thumb" type="hidden" name="thumb"><input id="t2r_xml" type="hidden" name="xml"></form></td></tr>' : '') + Turtle.soy.toolbox(null, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + BlocklyGames.soy.doneDialog(null, null, opt_ijData) + BlocklyGames.soy.abortDialog(null, null, opt_ijData) + BlocklyGames.soy.storageDialog(null, null, opt_ijData) + ((opt_ijData.level < 4) ? '<div id="helpUseLoop" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">Your solution works, but you can do better. ' + ((opt_ijData.level < 3) ? 'Draw the shape with just three blocks.' : 'Draw the star with just four blocks.') + '</div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>' : '') + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">' + ((opt_ijData.level == 1) ? 'Create a program that draws a square.<br><img src="turtle/square.gif" height=146 width=146 style="margin-bottom: -50px">' : (opt_ijData.level == 2) ? 'Change your program to draw a pentagon instead of a square.' : (opt_ijData.level == 3) ? 'There\'s a new block that allows you to change the colour:<iframe style="height: 50px; width: 100%; border: none;" src="readonly.html?app=turtle&lang=' + soy.$$escapeHtml(opt_ijData.lang) + '&xml=%3Cblock+type%3D%22turtle_colour_internal%22+x%3D%225%22+y%3D%2210%22%3E%3Cfield+name%3D%22COLOUR%22%3E%23ffff00%3C%2Ffield%3E%3C%2Fblock%3E"></iframe>Draw a yellow star.' : (opt_ijData.level == 4) ? 'There\'s a new block that allows you to lift your pen off the paper when you move:<iframe style="height: 50px; width: 100%; border: none;" src="readonly.html?app=turtle&lang=' + soy.$$escapeHtml(opt_ijData.lang) + '&xml=%3Cblock+type%3D%22turtle_pen%22+x%3D%225%22+y%3D%2210%22%3E%3C%2Fblock%3E"></iframe>Draw a small yellow star, then draw a line above it.' : (opt_ijData.level == 5) ? 'Instead of one star, can you draw four stars arranged in a square?' : (opt_ijData.level == 6) ? 'Draw three yellow stars, and one white line.' : (opt_ijData.level == 7) ? 'Draw the stars, then draw four white lines.' : (opt_ijData.level == 8) ? 'Drawing 360 white lines will look like the full moon.' : (opt_ijData.level == 9) ? 'Can you add a black circle so that the moon becomes a crescent?' : (opt_ijData.level == 10) ? 'Draw anything you want.  You\'ve got a huge number of new blocks you can explore.  Have fun!' + ((! opt_ijData.html) ? '<br><br>Use the "See Gallery" button to see what other people have drawn.  If you draw something interesting, use the "Submit to Gallery" button to publish it.' : '') : '') + '</div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>' + ((opt_ijData.level == 1) ? '<div id="helpToolbox" class="dialogHiddenContent"><div><img src="turtle/help_left.png" class="mirrorImg" height=23 width=64></div>Choose a category to see the blocks.</div>' : '');
};


Turtle.soy.toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return '<xml id="toolbox" style="display: none">' + ((opt_ijData.level == 10) ? '<category name="Țestoasă"><block type="turtle_move"><value name="VALUE"><block type="math_number"><field name="NUM">10</field></block></value></block><block type="turtle_turn"><value name="VALUE"><block type="math_number"><field name="NUM">90</field></block></value></block><block type="turtle_width"><value name="WIDTH"><block type="math_number"><field name="NUM">1</field></block></value></block><block type="turtle_pen"></block><block type="turtle_visibility"></block><block type="turtle_print"><value name="TEXT"><block type="text"></block></value></block><block type="turtle_font"></block></category><category name="Culoare"><block type="turtle_colour"><value name="COLOUR"><block type="colour_picker"></block></value></block><block type="colour_picker"></block><block type="colour_random"></block><block type="colour_rgb"><value name="RED"><block type="math_number"><field name="NUM">100</field></block></value><value name="GREEN"><block type="math_number"><field name="NUM">50</field></block></value><value name="BLUE"><block type="math_number"><field name="NUM">0</field></block></value></block><block type="colour_blend"><value name="COLOUR1"><block type="colour_picker"><field name="COLOUR">#ff0000</field></block></value><value name="COLOUR2"><block type="colour_picker"><field name="COLOUR">#3333ff</field></block></value><value name="RATIO"><block type="math_number"><field name="NUM">0.5</field></block></value></block></category><category name="Logic"><block type="controls_if"></block><block type="logic_compare"></block><block type="logic_operation"></block><block type="logic_negate"></block><block type="logic_boolean"></block><block type="logic_ternary"></block></category><category name="Bucle"><block type="controls_repeat_ext"><value name="TIMES"><block type="math_number"><field name="NUM">10</field></block></value></block><block type="controls_whileUntil"></block><block type="controls_for"><value name="FROM"><block type="math_number"><field name="NUM">1</field></block></value><value name="TO"><block type="math_number"><field name="NUM">10</field></block></value><value name="BY"><block type="math_number"><field name="NUM">1</field></block></value></block><block type="controls_flow_statements"></block></category><category name="Matematică"><block type="math_number"></block><block type="math_arithmetic"></block><block type="math_single"></block><block type="math_trig"></block><block type="math_constant"></block><block type="math_number_property"></block><block type="math_change"><value name="DELTA"><block type="math_number"><field name="NUM">1</field></block></value></block><block type="math_round"></block><block type="math_modulo"></block><block type="math_constrain"><value name="LOW"><block type="math_number"><field name="NUM">1</field></block></value><value name="HIGH"><block type="math_number"><field name="NUM">100</field></block></value></block><block type="math_random_int"><value name="FROM"><block type="math_number"><field name="NUM">1</field></block></value><value name="TO"><block type="math_number"><field name="NUM">100</field></block></value></block><block type="math_random_float"></block></category><category name="Variabile" custom="VARIABLE"></category><category name="Funcții" custom="PROCEDURE"></category>' : '<category name="Turtle"><block type="turtle_move_internal"><field name="VALUE">100</field></block><block type="turtle_turn_internal"><field name="VALUE">90</field></block>' + ((opt_ijData.level > 3) ? '<block type="turtle_pen"></block>' : '') + '</category>' + ((opt_ijData.level > 2) ? '<category name="Culoare"><block type="turtle_colour_internal"></category>' : '') + '<category name="Bucle"><block type="turtle_repeat_internal"><field name="TIMES">4</field></block></category>') + '</xml>';
};


Turtle.soy.readonly = function(opt_data, opt_ignored, opt_ijData) {
  return Turtle.soy.messages(null, null, opt_ijData) + '<div id="blockly"></div>';
};
