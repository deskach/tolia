module.exports = function(Handlebars) {

var glob = ('undefined' === typeof window) ? global : window,

Handlebars = glob.Handlebars || require('handlebars');

this["JST"] = this["JST"] || {};

this["JST"]["about"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<header class=\"container lead well\">\r\n    About the project\r\n</header>\r\n<section class=\"container\">\r\n    <img src=\"media/IMG_20141227_193206.jpg\" class=\"img-thumbnail pull-right\" style=\"width:300px; margin: 1em;\" />\r\n    <img src=\"media/teagardens.jpg\" class=\"img-thumbnail pull-left\" style=\"width:400px; margin: 1em;\" />\r\n    <section>\r\n        The site contains a few games which I created to play with front-end frameworks.\r\n        All games support responsive design, this means that it should be possible to play them\r\n        on any device type.\r\n    </section>\r\n    <br />\r\n    <section>\r\n        I'd like to devote this 'playground' to dear little Tolia - my son who is always happy having autism.\r\n        And to my beloved wife Daryna.\r\n    </section>\r\n    <br />\r\n    <section class=\"pull-right\">\r\n        Cheers, Dzianis.\r\n    </section>\r\n</section>\r\n<footer></footer>\r\n";
},"useData":true});

this["JST"]["stars"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<header class=\"container lead well\">\r\n    <a href=\"http://deskach.github.io/nine_stars/\" class=\"btn btn-primary\">Play 9 Stars</a>\r\n</header>\r\n<section class=\"container\">\r\n    <img src=\"media/stars.png\" class=\"img-thumbnail pull-right\" style=\"width:300px; margin-left: 1em;\" />\r\n    <section>\r\n        The game is aimed to help kids learn math.\r\n        The rules are as following:\r\n        A random number of stars (from 1 to 9) appears on the screen.\r\n        One needs to pick up numbers by clicking their pictures.\r\n        The picked up numbers should sum up to match the number of stars.\r\n        Each number can be used only once.\r\n        To win the game all numbers should be used.\r\n        If it is not possible to create a sum to match the stars one can hit the redraw button, which will\r\n        regenerate the stars. The redraw button can be used 5 times.\r\n    </section>\r\n    <section>\r\n        I borrowed this game from a pluralsight course about React.js.\r\n    </section>\r\n</section>\r\n<footer></footer>\r\n";
},"useData":true});

this["JST"]["tetris"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<header class=\"container lead well\">\r\n    <a href=\"http://deskach.github.io/tetris/\" class=\"btn btn-primary\">Play Tetris</a>\r\n</header>\r\n<section class=\"container\">\r\n    <img src=\"media/tetris.png\" class=\"img-thumbnail pull-right\" style=\"width:300px; margin-left: 1em;\" />\r\n    <section>\r\n        A classic tetris implemented as a client-side application.\r\n        Rules are simple - create a whole row of bricks to make it disappear.\r\n        Use keyboard to play on a desktop PC. If you are using a mobile device - a set of additional\r\n        buttons will appear.\r\n    </section>\r\n</section>\r\n<footer></footer>\r\n";
},"useData":true});

if (typeof exports === 'object' && exports) {module.exports = this["JST"];}

return this["JST"];

};