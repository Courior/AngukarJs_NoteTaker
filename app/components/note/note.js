'use strict';

angular.module('myApp.note', [])

.controller("NotesCtrl",['$scope', function($scope) {
  $scope.expandClass= "minified";
  $scope.toggleCustom = function() {
    $scope.expandClass = $scope.expandClass === 'minified' ? 'expanded': 'minified';
    console.log($scope.expandClass);
  };
}])
.directive('noteDir', function(){
  return {
    restrict: 'E',
    replace: true,
    bindToController: true,
    scope:{
      content:"="
    },
    templateUrl:'components/note/note.html',
    controller: "NotesCtrl",
    controllerAs: "noteCtrl"
  };
});
//title="Please Work" byline="i hope this works" description="did it work?"
