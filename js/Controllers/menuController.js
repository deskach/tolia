'use strict';

(function () {
  var toliaApp = angular.module('toliaApp');

  toliaApp.controller('MenuController', ['$scope',
    function ($scope) {
      $scope.templates = constants.urls;
    }]);
})();
