'use strict';

angular.module('myApp.icon', [])
.directive('iconDir', function(){
  return {
    restrict: 'E',
    replace: false,
    templateUrl:'components/icons/icon.html'
  };
});
//title="Please Work" byline="i hope this works" description="did it work?"
