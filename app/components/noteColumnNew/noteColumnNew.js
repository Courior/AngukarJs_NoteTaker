'use strict';

angular.module('myApp.noteColumnNew', ['myApp.noteFactory'])

.controller("NotesColCtrl",['noteFactoryData','$scope', function(noteFactoryData , $scope) {
  noteFactoryData.getData().then(display,displayError);
  function display(response){
    $scope.notes=response.data;
    console.log(response.data);
  }
  function displayError(response){
    $scope.notes=[
      {
        title: response.data,
        byline: "",
        description:   "",
        created: "null",
        status: ""
      }
    ]
    console.log($scope.notes);
  }

}])
.directive('noteColDir', function(){
  return {
    restrict: 'E',
    replace: true,
    templateUrl:'components/noteColumnNew/noteColumn.html',
    controller: "NotesColCtrl",
    controllerAs: "noteColCtrl"
  };
});
//title="Please Work" byline="i hope this works" description="did it work?"
