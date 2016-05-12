'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.noteFactory',
  'myApp.view1',
  'myApp.view2',
  'myApp.version',
  'myApp.note',
  'myApp.noteColumnNew'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
