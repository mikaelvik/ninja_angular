'use strict';

var ninjaAngularApp = angular.module('ninjaAngularApp', [])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/fight', {
        templateUrl: 'views/fight.html',
        controller: 'FightCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
