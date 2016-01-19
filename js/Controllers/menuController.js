'use strict';

(function () {
  var toliaApp = angular.module('toliaApp');

  toliaApp.controller('MenuController',
    function MenuController($scope) {
      $scope.templates = constants.urls;
    });
})();
