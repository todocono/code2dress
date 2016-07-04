// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

goog.provide('Maze.soy');

goog.require('soy');
goog.require('soydata');
goog.require('BlocklyGames.soy');


Maze.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Maze_moveForward">まっすぐ進む</span><span id="Maze_turnLeft">左を向く</span><span id="Maze_turnRight">右を向く</span><span id="Maze_doCode">実行</span><span id="Maze_elseCode">それ以外</span><span id="Maze_helpIfElse">「if-else」(もし-それ以外) ブロックでは、一方ともう一方の 2 つのことができます。</span><span id="Maze_pathAhead">もしまっすぐ進めるなら</span><span id="Maze_pathLeft">もし左に進めるなら</span><span id="Maze_pathRight">もし右に進めるなら</span><span id="Maze_repeatUntil">「まで繰り返す」</span><span id="Maze_moveForwardTooltip">プレーヤーがまっすぐ 1 マス進みます。</span><span id="Maze_turnTooltip">プレーヤーが左または右に 90 度向きを変えます。</span><span id="Maze_ifTooltip">選んだ方向に進める場合は、何か動作をします。</span><span id="Maze_ifelseTooltip">選んだ方向に進める場合は最初のブロックの動作を、進めない場合は 2 番めのブロックの動作をします。.</span><span id="Maze_whileTooltip">内側の動作を、ゴールに着くまで繰り返します。</span><span id="Maze_capacity0">残り %0 ブロックです。</span><span id="Maze_capacity1">残り %1 ブロックです。</span><span id="Maze_capacity2">残り %2 ブロックです。</span></div>';
};


Maze.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return Maze.soy.messages(null, null, opt_ijData) + '<table width="100%"><tr><td><h1>' + BlocklyGames.soy.titleSpan({appName: '迷路'}, null, opt_ijData) + BlocklyGames.soy.levelLinks({level: opt_ijData.level, maxLevel: opt_ijData.maxLevel, lang: opt_ijData.lang, suffix: '&skin=' + soy.$$escapeHtml(opt_ijData.skin)}, null, opt_ijData) + '</h1></td><td class="farSide"><select id="languageMenu"></select>&nbsp;<button id="linkButton" title="ブロックの状態を保存してリンクを取得します。"><img src="media/1x1.gif" class="link icon21"></button>&nbsp;<button id="pegmanButton"><img src="media/1x1.gif"><span id="pegmanButtonArrow"></span></button></td></tr></table><div id="visualization"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="svgMaze" width="400px" height="400px"><g id="look"><path d="M 0,-15 a 15 15 0 0 1 15 15" /><path d="M 0,-35 a 35 35 0 0 1 35 35" /><path d="M 0,-55 a 55 55 0 0 1 55 55" /></g></svg><div id="capacityBubble"><div id="capacity"></div></div></div><table width="400"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><td><button id="runButton" class="primary" title="並べたブロックの動作をプレーヤーに実行させます。"><img src="media/1x1.gif" class="run icon21"> プログラムを実行</button><button id="resetButton" class="primary" style="display: none" title="プレーヤーを迷路の最初の場所に戻します。"><img src="media/1x1.gif" class="stop icon21"> リセット</button></td></tr></table>' + Maze.soy.toolbox(null, null, opt_ijData) + '<div id="blockly"></div><div id="pegmanMenu"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + BlocklyGames.soy.doneDialog(null, null, opt_ijData) + BlocklyGames.soy.abortDialog(null, null, opt_ijData) + BlocklyGames.soy.storageDialog(null, null, opt_ijData) + ((opt_ijData.level == 1) ? '<div id="dialogHelpStack" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>「まっすぐ進む」のブロックをいくつか縦につないで、ゴールに連れて行ってください。</td><td valign="top"><img src="maze/help_stack.png" class="mirrorImg" height=63 width=136></td></tr></table></div><div id="dialogHelpOneTopBlock" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>この面では、何もないワークスペースに、すべてのブロックを配置する必要があります。<iframe id="iframeOneTopBlock" style="height: 80px; width: 100%; border: none;" src=""></iframe></td></tr></table></div><div id="dialogHelpRun" class="dialogHiddenContent"><table><tr><td>動作を見るには、プログラムを実行してください。</td><td rowspan=2><img src="common/help.png"></td></tr><tr><td><div><img src="maze/help_run.png" class="mirrorImg" height=27 width=141></div></td></tr></table></div>' : (opt_ijData.level == 2) ? '<div id="dialogHelpReset" class="dialogHiddenContent"><table><tr><td>あなたのプログラムでは迷路を解けませんでした。「リセット」を押してやり直してください。</td><td rowspan=2><img src="common/help.png"></td></tr><tr><td><div><img src="maze/help_run.png" class="mirrorImg" height=27 width=141></div></td></tr></table></div>' : (opt_ijData.level == 3) ? '<div id="dialogHelpRepeat" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td>2 個のブロックだけでゴールしてください。ブロックを繰り返し実行する「繰り返し」を使ってください。</td><td><img src="common/help.png"></td></tr></table></div>' : (opt_ijData.level == 4) ? '<div id="dialogHelpCapacity" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>このレベルで使えるブロックをすべて使いました。ブロックを新しく作成するには、今あるブロックを消さなければなりません。</td></tr></table></div><div id="dialogHelpRepeatMany" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td>「繰り返し」ブロックの中で、1 個以上のブロックを使えます。</td><td><img src="common/help.png"></td></tr></table></div>' : (opt_ijData.level == 5) ? '<div id="dialogHelpSkins" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>このメニューから好きなプレーヤーを選んでください。</td><td><img src="maze/help_up.png"></td></tr></table></div>' : (opt_ijData.level == 6) ? '<div id="dialogHelpIf" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td>「if」(もし) ブロックは条件が正しいときだけ何か動作をします。左に進めるときは左を向くようにしてみてください。</td><td><img src="common/help.png"></td></tr></table></div>' : (opt_ijData.level == 7) ? '<div id="dialogHelpMenu" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td id="helpMenuText">「if」(もし)ブロックの条件を変えるには %1 をクリックしてください。</td><td><img src="common/help.png"></td></tr></table></div>' : (opt_ijData.level == 9) ? '<div id="dialogHelpIfElse" class="dialogHiddenContent"><table><tr><td><img src="maze/help_down.png"></td><td>「if-else」(もし-それ以外) ブロックでは、一方ともう一方の 2 つのことができます。</td><td><img src="common/help.png"></td></tr></table></div>' : (opt_ijData.level == 10) ? '<div id="dialogHelpWallFollow" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>この難しい迷路を解けますか? 左側の壁をたどってみてください。上級のプログラマー向けの迷路です!' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</td></tr></table></div>' : '');
};


Maze.soy.toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return '<xml id="toolbox" style="display: none;"><block type="maze_moveForward"></block><block type="maze_turn"><field name="DIR">turnLeft</field></block><block type="maze_turn"><field name="DIR">turnRight</field></block>' + ((opt_ijData.level > 2) ? '<block type="maze_forever"></block>' + ((opt_ijData.level == 6) ? '<block type="maze_if"><field name="DIR">isPathLeft</field></block>' : (opt_ijData.level > 6) ? '<block type="maze_if"></block>' + ((opt_ijData.level > 8) ? '<block type="maze_ifElse"></block>' : '') : '') : '') + '</xml>';
};


Maze.soy.readonly = function(opt_data, opt_ignored, opt_ijData) {
  return Maze.soy.messages(null, null, opt_ijData) + '<div id="blockly"></div>';
};
