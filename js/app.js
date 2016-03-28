'use strict';

(function () {
  var toliaApp = angular.module('toliaApp', ['ngRoute']);

  toliaApp.config(['$routeProvider',
    function ($routeProvider) {
      var urls = constants.urls;

      for (var i in urls) {
        $routeProvider.when(urls[i].url, {
          templateUrl: urls[i].templateUrl,
          controller: urls[i].controller
        });
      }

      $routeProvider.otherwise({redirectTo: '/about'});
    }]);
})();
