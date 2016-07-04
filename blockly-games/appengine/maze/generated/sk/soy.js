// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

goog.provide('Maze.soy');

goog.require('soy');
goog.require('soydata');
goog.require('BlocklyGames.soy');


Maze.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Maze_moveForward">choď dopredu</span><span id="Maze_turnLeft">otoč sa vľavo</span><span id="Maze_turnRight">otoč sa vpravo</span><span id="Maze_doCode">urob</span><span id="Maze_elseCode">inak</span><span id="Maze_helpIfElse">Príkaz ak-tak urobí buď jedno, alebo druhé.</span><span id="Maze_pathAhead">ak je cesta pred</span><span id="Maze_pathLeft">ak je cesta vľavo</span><span id="Maze_pathRight">ak je cesta vpravo</span><span id="Maze_repeatUntil">opakuj až do</span><span id="Maze_moveForwardTooltip">Posun hráča o jednu dĺžku dopredu.</span><span id="Maze_turnTooltip">Otočiť hráča o 90 stupňov vľavo či vpravo.</span><span id="Maze_ifTooltip">Ak je tým smerom cesta, vykonaj príkazy.</span><span id="Maze_ifelseTooltip">Ak je tým smerom cesta, vykonaj prvý blok príkazov.\\nInak vykonaj druhý blok príkazov.</span><span id="Maze_whileTooltip">Opakuj príkazy vo vnútri až kým neprídeš do cieľa.</span><span id="Maze_capacity0">Zostalo ti %0 dielcov.</span><span id="Maze_capacity1">Máš už iba %1 diel.</span><span id="Maze_capacity2">Zostalo ti ešte %2 dielcov.</span></div>';
};


Maze.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return Maze.soy.messages(null, null, opt_ijData) + '<table width="100%"><tr><td><h1>' + BlocklyGames.soy.titleSpan({appName: 'Bludisko'}, null, opt_ijData) + BlocklyGames.soy.levelLinks({level: opt_ijData.level, maxLevel: opt_ijData.maxLevel, lang: opt_ijData.lang, suffix: '&skin=' + soy.$$escapeHtml(opt_ijData.skin)}, null, opt_ijData) + '</h1></td><td class="farSide"><select id="languageMenu"></select>&nbsp;<button id="linkButton" title="Uložiť a zdieľať odkaz na tento program."><img src="media/1x1.gif" class="link icon21"></button>&nbsp;<button id="pegmanButton"><img src="media/1x1.gif"><span id="pegmanButtonArrow"></span></button></td></tr></table><div id="visualization"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="svgMaze" width="400px" height="400px"><g id="look"><path d="M 0,-15 a 15 15 0 0 1 15 15" /><path d="M 0,-35 a 35 35 0 0 1 35 35" /><path d="M 0,-55 a 55 55 0 0 1 55 55" /></g></svg><div id="capacityBubble"><div id="capacity"></div></div></div><table width="400"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><td><button id="runButton" class="primary" title="Postavička urobí to, čo je napísané na dielci."><img src="media/1x1.gif" class="run icon21"> Spustiť program</button><button id="resetButton" class="primary" style="display: none" title="Presunúť postavičku späť na začiatok bludiska."><img src="media/1x1.gif" class="stop icon21"> Odznova</button></td></tr></table>' + Maze.soy.toolbox(null, null, opt_ijData) + '<div id="blockly"></div><div id="pegmanMenu"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + BlocklyGames.soy.doneDialog(null, null, opt_ijData) + BlocklyGames.soy.abortDialog(null, null, opt_ijData) + BlocklyGames.soy.storageDialog(null, null, opt_ijData) + ((opt_ijData.level == 1) ? '<div id="dialogHelpStack" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>Program je postupnosť dielcov. Spoj dokopy niekoľko dielcov \'pohyb vpred\' a pomôž mi prísť do cieľa.</td><td valign="top"><img src="maze/help_stack.png" class="mirrorImg" height=63 width=136></td></tr></table></div><div id="dialogHelpOneTopBlock" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>Na tejto úrovni musíš na bielej ploche poskladať všetky diely skladačky.<iframe id="iframeOneTopBlock" style="height: 80px; width: 100%; border: none;" src=""></iframe></td></tr></table></div><div id="dialogHelpRun" class="dialogHiddenContent"><table><tr><td>Spusti svoj program, aby si videl čo sa stane.</td><td rowspan=2><img src="common/help.png"></td></tr><tr><td><div><img src="maze/help_run.png" class="mirrorImg" height=27 width=141></div></td></tr></table></div>' : (opt_ijData.level == 2) ? '<div id="dialogHelpReset" class="dialogHiddenContent"><table><tr><td>Váš program neprešiel cez bludisko. Stlačte tlačidlo "Obnoviť" a skúste to znova.</td><td rowspan=2><img src="common/help.png"></td></tr><tr><td><div><img src="maze/help_run.png" class="mirrorImg" height=27 width=141></div></td></tr></table></div>' : (opt_ijData.level == 3) ? '<div id="dialogHelpRepeat" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td>Pamäte v počítačoch nikdy nie je dosť. Dosiahni cieľ len použítím dvoch blokov. Na zopakovanie príkazu použi príkaz \'opakuj\'.</td><td><img src="common/help.png"></td></tr></table></div>' : (opt_ijData.level == 4) ? '<div id="dialogHelpCapacity" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>Použili ste všetky bloky dostupné pre túto úroveň. Ak chcete vytvoriť nový blok, musíte najprv odstrániť existujúci.</td></tr></table></div><div id="dialogHelpRepeatMany" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td>Možte upraviť viac ako jeden blok v rámci \'repeat\' bloku.</td><td><img src="common/help.png"></td></tr></table></div>' : (opt_ijData.level == 5) ? '<div id="dialogHelpSkins" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>Choose your favourite player from this menu.</td><td><img src="maze/help_up.png"></td></tr></table></div>' : (opt_ijData.level == 6) ? '<div id="dialogHelpIf" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td>Dielec \'ak\' urobí niečo len vtedy, ak je splnená podmienka. Skús otočenie vľavo, ak je cesta naľavo.</td><td><img src="common/help.png"></td></tr></table></div>' : (opt_ijData.level == 7) ? '<div id="dialogHelpMenu" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td id="helpMenuText">Klikni na %1 v \'ak\' bloku pre zmenu jeho stavu.</td><td><img src="common/help.png"></td></tr></table></div>' : (opt_ijData.level == 9) ? '<div id="dialogHelpIfElse" class="dialogHiddenContent"><table><tr><td><img src="maze/help_down.png"></td><td>Príkaz ak-tak urobí buď jedno, alebo druhé.</td><td><img src="common/help.png"></td></tr></table></div>' : (opt_ijData.level == 10) ? '<div id="dialogHelpWallFollow" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>A zvládneš aj toto komplikované bludisko? Skús ísť popri ľavej stene. Len pre pokročilých programátorov!' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</td></tr></table></div>' : '');
};


Maze.soy.toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return '<xml id="toolbox" style="display: none;"><block type="maze_moveForward"></block><block type="maze_turn"><field name="DIR">turnLeft</field></block><block type="maze_turn"><field name="DIR">turnRight</field></block>' + ((opt_ijData.level > 2) ? '<block type="maze_forever"></block>' + ((opt_ijData.level == 6) ? '<block type="maze_if"><field name="DIR">isPathLeft</field></block>' : (opt_ijData.level > 6) ? '<block type="maze_if"></block>' + ((opt_ijData.level > 8) ? '<block type="maze_ifElse"></block>' : '') : '') : '') + '</xml>';
};


Maze.soy.readonly = function(opt_data, opt_ignored, opt_ijData) {
  return Maze.soy.messages(null, null, opt_ijData) + '<div id="blockly"></div>';
};
