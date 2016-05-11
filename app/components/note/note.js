'use strict';

angular.module('myApp.note', [])

.controller("NotesCtrl",['$scope', function($scope) {
  $scope.title="please Work";
  $scope.byline="did it work";
  $scope.description="it worked";
  $scope.notes=[
  {
    "title": 494562,
    "byline": "Maxine",
    "description": "Amet proident Lorem ipsum anim id duis eu elit aliquip minim. Ullamco fugiat exercitation laborum duis eiusmod aliqua magna fugiat exercitation mollit sunt. Id velit officia commodo reprehenderit sunt ut enim. Exercitation minim eiusmod non deserunt sunt ut ut sunt adipisicing. Magna tempor non exercitation reprehenderit laboris culpa enim deserunt cupidatat id fugiat eu est laboris.",
    "created": "Saturday, August 23, 2014 12:57 PM"
  },
  {
    "title": 494593,
    "byline": "Booth",
    "description": "Magna culpa id dolor reprehenderit cupidatat ea aliqua. Deserunt et adipisicing nisi ipsum excepteur ut et. Id id deserunt nostrud pariatur. Ut incididunt cupidatat do laborum pariatur ullamco laboris minim laboris excepteur. Eiusmod occaecat est non ullamco dolor sint labore. Id eu elit dolor consectetur ea ex.",
    "created": "Saturday, May 2, 2015 3:53 AM"
  },
  {
    "title": 494586,
    "byline": "Freda",
    "description": "Eiusmod sunt adipisicing dolor et aliqua irure sunt mollit mollit magna enim ullamco. Exercitation velit ipsum culpa duis et sint ex ad esse ad incididunt culpa et excepteur. Proident enim duis commodo magna.",
    "created": "Wednesday, April 6, 2016 6:02 AM"
  },
  {
    "title": 494565,
    "byline": "Madden",
    "description": "Dolor quis et ut ipsum aliqua id fugiat velit voluptate. Cupidatat in officia qui cupidatat eu adipisicing consectetur et. Amet eu cillum do dolore Lorem ipsum laborum do amet dolor eiusmod qui. Ex consectetur velit incididunt labore qui aliqua et commodo labore duis.",
    "created": "Friday, September 25, 2015 11:03 AM"
  },
  {
    "title": 494512,
    "byline": "Francis",
    "description": "Deserunt officia in consectetur do occaecat veniam mollit duis laborum. Sint elit dolore cupidatat ut laborum dolore consectetur reprehenderit Lorem. Eiusmod proident velit voluptate qui pariatur voluptate duis nulla est non aliqua. Labore cupidatat voluptate consectetur do adipisicing et.",
    "created": "Thursday, April 17, 2014 12:23 AM"
  }
];

}])
.directive('noteDir', function(){
  return {
    restrict: 'E',
    replace: true,
    bindToController: true,
    scope:{
      id:"@fuckYou",
      content:"="
    },
    templateUrl:'components/note/note.html',
    controller: "NotesCtrl",
    controllerAs: "noteCtrl"
  };
});
//title="Please Work" byline="i hope this works" description="did it work?"
