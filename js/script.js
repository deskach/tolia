/// <reference path="C:\Users\Dzianis\documents\visual studio 2015\Projects\tolia\tolia\lib/jquery-2.1.4.js" />

$(document).ready(function () {
  var Handlebars = require('handlebars');
  var templates = require('./templates')(Handlebars);

  function setActiveContent() {
    var $active = $('#menu>ul>li.active').first().children().first();

    $('#content').html(templates[$active.attr('href')]());
  }

  setActiveContent();

  $('#menu>ul>li>a').click(function (e) {
    var $parent = $(e.target).parent();

    e.preventDefault();
    $('#menu>ul>li').removeClass('active');
    $parent.addClass('active');

    setActiveContent();
  });
});