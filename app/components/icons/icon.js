'use strict';

angular.module('myApp.icon', [])
.directive('iconDir', function(){
  return {
    restrict: 'E',
    replace: false,
    templateUrl:'components/icons/icon.html'
  };
}).directive('chevronIcon', function(){
  return {
    restrict: 'E',
    replace: false,
    templateUrl:'components/icons/chevron.html'
  };
});
//title="Please Work" byline="i hope this works" description="did it work?"
