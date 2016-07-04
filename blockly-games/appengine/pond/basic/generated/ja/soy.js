// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

goog.provide('Pond.Basic.soy');

goog.require('soy');
goog.require('soydata');
goog.require('BlocklyGames.soy');
goog.require('Pond.soy');


Pond.Basic.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return Pond.soy.messages(null, null, opt_ijData) + '<div style="display: none"></div>';
};


Pond.Basic.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return Pond.Basic.soy.messages(null, null, opt_ijData) + '<table width="100%"><tr><td><h1>' + BlocklyGames.soy.titleSpan({appName: 'Pond'}, null, opt_ijData) + BlocklyGames.soy.levelLinks({level: opt_ijData.level, maxLevel: opt_ijData.maxLevel, lang: opt_ijData.lang, suffix: ''}, null, opt_ijData) + '</h1></td><td class="farSide"><select id="languageMenu"></select>&nbsp;<button id="linkButton" title="ブロックの状態を保存してリンクを取得します。"><img src="media/1x1.gif" class="link icon21"></button>&nbsp;<button id="helpButton">ヘルプ</button></td></tr></table>' + Pond.soy.visualization(null, null, opt_ijData) + Pond.Basic.soy.toolbox(null, null, opt_ijData) + '<div id="blockly"></div>' + Pond.soy.playerTarget(null, null, opt_ijData) + Pond.soy.playerRabbit(null, null, opt_ijData) + Pond.soy.playerCounter(null, null, opt_ijData) + Pond.soy.playerRook(null, null, opt_ijData) + Pond.soy.playerSniper(null, null, opt_ijData) + Pond.soy.playerPendulum(null, null, opt_ijData) + Pond.soy.playerScared(null, null, opt_ijData) + BlocklyGames.soy.dialog(null, null, opt_ijData) + BlocklyGames.soy.doneDialog(null, null, opt_ijData) + BlocklyGames.soy.storageDialog(null, null, opt_ijData) + ((opt_ijData.level == 3) ? Pond.soy.helpUseScan(null, null, opt_ijData) : '') + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">' + ((opt_ijData.level == 1) ? 'Use the \'cannon\' command to hit the target.  The first parameter is the angle, the second parameter is the range.  Find the right combination.<br><br><img src="pond/docs/cannon.png" height=41 width=213>' : (opt_ijData.level == 2) ? 'This target needs to be hit many times.  Use a \'while (true)\' loop to do something indefinitely.<br><br><img src="pond/docs/whiletrue.png" height=90 width=164>' : (opt_ijData.level == 3) ? 'This opponent moves back and forth, making it hard to hit. The \'scan\' expression returns the exact range to the opponent in the specified direction.<br><br><img src="pond/docs/scan.png" height=36 width=134><br><br>This range is exactly what the \'cannon\' command needs to fire accurately.' : (opt_ijData.level == 4) ? 'This opponent is too far away to use the cannon (which has a limit of 70 meters).  Instead, use the \'swim\' command to start swimming towards the opponent and crash into it.<br><br><img src="pond/docs/swim.png" height=41 width=131>' : (opt_ijData.level == 5) ? 'This opponent is also too far away to use the cannon.  But you are too weak to survive a collision.  Swim towards the opponent while your horizontal location is less than than 50.  Then \'stop\' and use the cannon.<br><br><img src="pond/docs/loc_x_50.png" height=37 width=191>' : (opt_ijData.level == 6) ? 'This opponent will move away when it is hit.  Swim towards it if it is out of range (70 meters).' : (opt_ijData.level == 7) ? 'Rabbit runs around randomly.  Can you hit it?' : (opt_ijData.level == 8) ? 'Rook fights back!  But it only looks north, south, east and west.' : (opt_ijData.level == 9) ? 'Counter looks in all directions. Can you handle two opponents at once?' : (opt_ijData.level == 10) ? 'Sniper hides in a corner looking for targets.  Good luck.  Seriously.' : '') + '</div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};


Pond.Basic.soy.toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return '<xml id="toolbox" style="display: none;"><category name="Pond"><block type="pond_cannon"><value name="DEGREE"><block type="pond_math_number"><field name="NUM">0</field></block></value><value name="RANGE"><block type="pond_math_number"><field name="NUM">70</field></block></value></block>' + ((opt_ijData.level >= 3) ? '<block type="pond_scan"><value name="DEGREE"><block type="pond_math_number"><field name="NUM">0</field></block></value></block>' : '') + ((opt_ijData.level >= 4) ? '<block type="pond_swim"><value name="DEGREE"><block type="pond_math_number"><field name="NUM">0</field></block></value></block>' : '') + ((opt_ijData.level >= 5) ? '<block type="pond_stop"></block>' : '') + ((opt_ijData.level >= 5) ? '<block type="pond_loc_x"></block><block type="pond_loc_y"></block>' : '') + ((opt_ijData.level >= 8) ? '<block type="pond_speed"></block><block type="pond_health"></block>' : '') + '</category>' + ((opt_ijData.level >= 2) ? '<category name="論理">' + ((opt_ijData.level >= 5) ? '<block type="pond_controls_if"></block><block type="logic_compare"></block>' : '') + ((opt_ijData.level >= 7) ? '<block type="logic_operation"></block>' : '') + '<block type="logic_boolean"></block></category><category name="繰り返し"><block type="pond_loops_while"></block></category>' : '') + '<category name="数学"><block type="pond_math_number"></block>' + ((opt_ijData.level >= 7) ? '<block type="pond_math_arithmetic"></block><block type="pond_math_single"></block><block type="pond_math_change"><value name="DELTA"><block type="pond_math_number"><field name="NUM">1</field></block></value></block><block type="math_random_float"></block>' : '') + '</category>' + ((opt_ijData.level >= 7) ? '<category name="変数" custom="VARIABLE"></category>' + ((opt_ijData.level >= 8) ? '<category name="関数" custom="PROCEDURE"></category>' : '') : '') + '</xml>';
};
