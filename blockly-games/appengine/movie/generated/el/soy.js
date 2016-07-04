// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

goog.provide('Movie.soy');

goog.require('soy');
goog.require('soydata');
goog.require('BlocklyGames.soy');


Movie.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Movie_x">x</span><span id="Movie_y">y</span><span id="Movie_x1">start x</span><span id="Movie_y1">start y</span><span id="Movie_x2">end x</span><span id="Movie_y2">end y</span><span id="Movie_radius">radius</span><span id="Movie_width">width</span><span id="Movie_height">height</span><span id="Movie_circleTooltip">Draws a circle at the specified location and with the specified radius.</span><span id="Movie_circleDraw">circle</span><span id="Movie_rectTooltip">Draws a rectangle at the specified location and with the specified width and height.</span><span id="Movie_rectDraw">rectangle</span><span id="Movie_lineTooltip">Draws a line from one point to another with the specified width.</span><span id="Movie_lineDraw">line</span><span id="Movie_timeTooltip">Returns the current time in the animation (0-100).</span><span id="Movie_colourTooltip">Changes the colour of the pen.</span><span id="Movie_setColour">set colour to</span><span id="Movie_submitDisabled">Your movie doesn\'t move.  Use blocks to make something interesting.  Then you may submit your movie to the gallery.</span></div>';
};


Movie.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return Movie.soy.messages(null, null, opt_ijData) + '<table width="100%"><tr><td><h1>' + BlocklyGames.soy.titleSpan({appName: 'Movie'}, null, opt_ijData) + BlocklyGames.soy.levelLinks({level: opt_ijData.level, maxLevel: opt_ijData.maxLevel, lang: opt_ijData.lang, suffix: ''}, null, opt_ijData) + '</h1></td><td class="farSide"><select id="languageMenu"></select>&nbsp;<button id="linkButton" title="Αποθηκεύει και συνδέει σε μπλοκ."><img src="media/1x1.gif" class="link icon21"></button>&nbsp;<button id="helpButton">Βοήθεια</button></td></tr></table><div id="visualization"><canvas id="scratch" width="400" height="400" style="display: none"></canvas><canvas id="hatching" width="400" height="400" style="display: none"></canvas><canvas id="axies" width="400" height="400" style="display: none"></canvas><canvas id="display" width="400" height="400" style="vertical-align: bottom"></canvas></div><svg id="scrubber" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="402" height="24"><image xlink:href="movie/youtube-bg.png" height=25 width=402 x=0 y=-1 /></svg>' + ((opt_ijData.level == 10 && ! opt_ijData.html) ? '<table style="padding-top: 1em; width: 400px;"><tr><td style="text-align: center;"><form action="https://www.reddit.com/r/BlocklyGames/" target="gallery"><button type="submit" title="Open the gallery of movies on Reddit."><img src="media/1x1.gif" class="reddit icon21"> See Gallery</button></form></td><td style="text-align: center;"><button id="submitButton" title="Submit your movie to Reddit."><img src="media/1x1.gif" class="camera icon21"> Submit to Gallery</button><canvas id="thumbnail" width="100" height="100" style="display: none"></canvas><form id="t2r_form" action="movie-reddit" method="POST" target="_blank" style="display: none"><input id="t2r_thumb" type="hidden" name="thumb"><input id="t2r_xml" type="hidden" name="xml"></form></td></tr>' : '') + Movie.soy.toolbox(null, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + BlocklyGames.soy.doneDialog(null, null, opt_ijData) + BlocklyGames.soy.abortDialog(null, null, opt_ijData) + BlocklyGames.soy.storageDialog(null, null, opt_ijData) + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">' + ((opt_ijData.level == 1) ? 'Use simple shapes to draw this person.' : (opt_ijData.level == 2) ? 'This level is a movie.  You want a red ball to roll across the screen.  Press the play button to see a preview.<iframe style="height: 50px; width: 100%; border: none;" src="readonly.html?app=movie&lang=' + soy.$$escapeHtml(opt_ijData.lang) + '&xml=%3Cblock+type%3D%22movie_time%22+x%3D%2215%22+y%3D%2210%22%3E%3C%2Fblock%3E"></iframe>As the movie plays, the value of the \'time\' block counts from 0 to 100.  Since you want the horizontal position of the red ball to start at 0 and go to 100 this should be easy.' : (opt_ijData.level == 3) ? 'The \'time\' block counts from 0 to 100.  But this time you want the horizontal position of the red ball to start at 100 and go to 0.  Can you figure out a simple mathematical formula that flips the direction?' : (opt_ijData.level == 4) ? 'Use what you learned in the previous level to make four green balls that move in all four directions.' : (opt_ijData.level == 5) ? 'Making the mouse\'s head move is easy.  Can you work out the math to make the ears move too?' : (opt_ijData.level == 6) ? 'Two simple lines.  Just figure out what the line ends are doing.' : (opt_ijData.level == 7) ? 'The mathematical formula for this falling ball is complicated.  Here\'s the answer:<br><br><code style="font-size: 150%; margin: 0 1em;">y = 100 - (((time - 50) &divide; 5) ^ 2)</code>' : (opt_ijData.level == 8) ? 'Use the \'if\' block to draw red and blue balls for the first half of the movie.  Then draw a green ball for the second half of the movie.' : (opt_ijData.level == 9) ? 'Can you make a ball that follows the wire?  The wire has already been drawn for you.  Once you can do this, you can do anything.' : (opt_ijData.level == 10) ? 'Make a movie of anything you want.  You\'ve got a huge number of new blocks you can explore.  Have fun!' + ((! opt_ijData.html) ? '<br><br>Use the "See Gallery" button to see movies that other people have made.  If you make an interesting movie, use the "Submit to Gallery" button to publish it.' : '') : '') + '</div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};


Movie.soy.toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return '<xml id="toolbox" style="display: none"><category name="Movie"><block type="movie_circle">' + ((opt_ijData.level != 2) ? '<value name="X"><block type="math_number"><field name="NUM">50</field></block></value>' : '') + '<value name="Y"><block type="math_number"><field name="NUM">50</field></block></value><value name="RADIUS"><block type="math_number"><field name="NUM">10</field></block></value></block><block type="movie_rect"><value name="X"><block type="math_number"><field name="NUM">50</field></block></value><value name="Y"><block type="math_number"><field name="NUM">50</field></block></value><value name="WIDTH"><block type="math_number"><field name="NUM">10</field></block></value><value name="HEIGHT"><block type="math_number"><field name="NUM">10</field></block></value></block><block type="movie_line"><value name="X1"><block type="math_number"><field name="NUM">40</field></block></value><value name="Y1"><block type="math_number"><field name="NUM">40</field></block></value><value name="X2"><block type="math_number"><field name="NUM">60</field></block></value><value name="Y2"><block type="math_number"><field name="NUM">60</field></block></value><value name="WIDTH"><block type="math_number"><field name="NUM">1</field></block></value></block>' + ((opt_ijData.level > 1) ? '<block type="movie_time"></block>' : '') + '</category><category name="Χρώμα"><block type="movie_colour"><value name="COLOUR"><block type="colour_picker"></block></value></block><block type="colour_picker"></block>' + ((opt_ijData.level == 10) ? '<block type="colour_rgb"><value name="RED"><block type="math_number"><field name="NUM">100</field></block></value><value name="GREEN"><block type="math_number"><field name="NUM">50</field></block></value><value name="BLUE"><block type="math_number"><field name="NUM">0</field></block></value></block><block type="colour_blend"><value name="COLOUR1"><block type="colour_picker"><field name="COLOUR">#ff0000</field></block></value><value name="COLOUR2"><block type="colour_picker"><field name="COLOUR">#3333ff</field></block></value><value name="RATIO"><block type="math_number"><field name="NUM">0.5</field></block></value></block>' : '') + '</category>' + ((opt_ijData.level > 7) ? '<category name="Λογική"><block type="controls_if">' + ((opt_ijData.level < 10) ? '<mutation else="1"></mutation>' : '') + '</block><block type="logic_compare"></block>' + ((opt_ijData.level == 10) ? '<block type="logic_operation"></block><block type="logic_negate"></block><block type="logic_boolean"></block><block type="logic_ternary"></block>' : '') + '</category>' : '') + ((opt_ijData.level == 10) ? '<category name="Επαναλήψεις"><block type="controls_whileUntil"></block><block type="controls_for"><value name="FROM"><block type="math_number"><field name="NUM">1</field></block></value><value name="TO"><block type="math_number"><field name="NUM">10</field></block></value><value name="BY"><block type="math_number"><field name="NUM">1</field></block></value></block><block type="controls_flow_statements"></block></category>' : '') + '<category name="Μαθηματικά"><block type="math_number"></block><block type="math_arithmetic"></block>' + ((opt_ijData.level == 10) ? '<block type="math_single"></block><block type="math_trig"></block><block type="math_constant"></block><block type="math_number_property"></block><block type="math_change"><value name="DELTA"><block type="math_number"><field name="NUM">1</field></block></value></block><block type="math_round"></block><block type="math_modulo"></block><block type="math_constrain"><value name="LOW"><block type="math_number"><field name="NUM">1</field></block></value><value name="HIGH"><block type="math_number"><field name="NUM">100</field></block></value></block>' : '') + '</category>' + ((opt_ijData.level == 10) ? '<category name="Μεταβλητές" custom="VARIABLE"></category><category name="Συναρτήσεις" custom="PROCEDURE"></category>' : '') + '</xml>';
};


Movie.soy.readonly = function(opt_data, opt_ignored, opt_ijData) {
  return Movie.soy.messages(null, null, opt_ijData) + '<div id="blockly"></div>';
};
