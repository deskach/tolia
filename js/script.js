/// <reference path="C:\Users\Dzianis\documents\visual studio 2015\Projects\tolia\tolia\lib/jquery-2.1.4.js" />

$(document).ready(function () {
  var Handlebars = require('handlebars');
  var templates = require('./templates')(Handlebars);

  var divs = {
    'tetris.html': templates.tetris(),
    'stars.html': templates.stars(),
    'index.html': templates.index()
  }

  $('#menu>ul>li>a').click(function (e) {
    var $parent = $(e.target).parent();

    e.preventDefault();
    $('#menu>ul>li').removeClass('active');
    $parent.addClass('active');

    var s = divs[$(e.target).attr('href')];

    $('#content').html(s);
  });
});