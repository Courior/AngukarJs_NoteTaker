'use strict';

angular.module('myApp.noteColumnNew', [])

.controller("NotesColCtrl",['$scope', function($scope) {

  $scope.notes=[
  {
    "title": 494588,
    "byline": "Valarie",
    "description": "Fugiat veniam laborum velit laboris sit. Proident consequat non id laborum deserunt officia veniam magna magna veniam do amet do. Eiusmod officia aute enim exercitation laboris nostrud proident ipsum culpa officia exercitation dolor minim nostrud. Irure et laborum sit reprehenderit. Voluptate excepteur amet Lorem dolor esse do excepteur. Cupidatat est tempor anim do reprehenderit in cillum Lorem et pariatur commodo officia nulla.",
    "created": "Friday, May 1, 2015 12:45 AM"
  },
  {
    "title": 494569,
    "byline": "Battle",
    "description": "Ipsum consectetur do occaecat do consequat dolore. Et aute minim Lorem culpa commodo. Nostrud qui pariatur cupidatat adipisicing fugiat anim in dolore nisi eu qui proident.",
    "created": "Sunday, January 17, 2016 7:34 PM"
  },
  {
    "title": 494520,
    "byline": "Barrett",
    "description": "Culpa minim et exercitation voluptate eu fugiat dolor. Exercitation laborum cupidatat dolor mollit eu. Fugiat reprehenderit ex Lorem anim ut officia labore non deserunt commodo minim id reprehenderit. Dolore deserunt ipsum tempor commodo non tempor cillum sint fugiat ut aliqua. Minim ad non laborum consequat aliqua voluptate anim eiusmod elit et tempor pariatur.",
    "created": "Wednesday, July 22, 2015 9:17 PM"
  },
  {
    "title": 494513,
    "byline": "Alyce",
    "description": "Consectetur ad pariatur incididunt est. Magna dolore culpa incididunt deserunt consectetur occaecat consectetur tempor ut adipisicing aliquip ex. Excepteur fugiat mollit dolor sit esse adipisicing occaecat. Labore ea aliquip aliqua mollit aute velit eiusmod laboris deserunt irure aliqua minim reprehenderit duis. Enim culpa anim deserunt culpa duis aliqua reprehenderit eu.",
    "created": "Wednesday, September 2, 2015 5:11 AM"
  },
  {
    "title": 494564,
    "byline": "Deleon",
    "description": "Laboris nisi proident nostrud laborum veniam ullamco id culpa dolore minim pariatur. Magna nostrud adipisicing consectetur amet id esse qui sunt pariatur sint aliquip ea nostrud et. Minim aliquip quis velit pariatur amet magna do est labore minim nisi.",
    "created": "Wednesday, January 1, 2014 2:39 AM"
  },
  {
    "title": 494542,
    "byline": "Patricia",
    "description": "Excepteur exercitation quis cillum consequat nulla reprehenderit fugiat culpa pariatur nostrud. Anim amet ex mollit irure id. Nostrud quis in exercitation nostrud. Labore nulla incididunt minim anim excepteur nostrud exercitation non laboris.",
    "created": "Sunday, March 16, 2014 1:29 PM"
  },
  {
    "title": 494565,
    "byline": "Danielle",
    "description": "Minim pariatur exercitation deserunt aliqua Lorem commodo dolor. Dolore excepteur veniam amet excepteur et aute commodo elit enim fugiat reprehenderit et. Pariatur occaecat id consectetur sunt aute. Aute proident ea tempor dolor ullamco ea.",
    "created": "Thursday, November 26, 2015 6:38 AM"
  },
  {
    "title": 494588,
    "byline": "Carney",
    "description": "Lorem deserunt officia aute aliquip elit proident quis amet. Laborum eu laborum Lorem sint velit. Ad occaecat velit et consectetur eiusmod minim laboris magna. Qui duis irure cupidatat non mollit in dolore. Aliqua proident sint mollit sunt eiusmod id sit laborum. Dolor sit ex velit labore est. Exercitation excepteur commodo Lorem consectetur amet eiusmod nulla minim in veniam ad nostrud nisi excepteur.",
    "created": "Monday, July 21, 2014 10:05 PM"
  },
  {
    "title": 494585,
    "byline": "Hood",
    "description": "Ipsum irure dolor labore nulla officia anim nulla consequat adipisicing consequat sint. Aliqua fugiat nisi in et. Consequat nisi et non consequat ea anim occaecat amet. Ex ea qui occaecat dolore irure proident minim ipsum veniam.",
    "created": "Tuesday, March 8, 2016 7:17 PM"
  },
  {
    "title": 494581,
    "byline": "Allison",
    "description": "Exercitation tempor pariatur consectetur aliquip adipisicing dolore ipsum magna in nisi. Quis irure pariatur occaecat adipisicing. Dolore culpa laborum enim proident aliqua ipsum ad laboris duis sint. Exercitation magna officia ex velit enim officia aliqua ad do. Adipisicing occaecat fugiat consequat Lorem sit consectetur culpa velit dolor ipsum commodo ex nostrud.",
    "created": "Saturday, December 27, 2014 4:30 AM"
  },
  {
    "title": 494551,
    "byline": "Aurora",
    "description": "Cupidatat commodo ipsum nostrud ut laborum est Lorem aute. Aliqua occaecat sit ullamco ea reprehenderit nulla minim irure. Officia mollit est eiusmod occaecat fugiat. Aute irure ipsum eiusmod elit magna minim id et proident in tempor nostrud. Exercitation laboris aliquip aute non cillum ipsum ipsum laboris esse occaecat non consectetur sit ea. Officia mollit deserunt culpa sit eu laboris officia sunt cupidatat eu. Velit culpa sint officia magna id.",
    "created": "Monday, August 18, 2014 1:23 AM"
  },
  {
    "title": 494536,
    "byline": "Inez",
    "description": "Non nisi excepteur ullamco mollit mollit est magna aliqua reprehenderit ex. Esse dolor adipisicing amet sit ex do dolore elit ex elit enim nostrud qui. Consectetur cillum qui veniam elit esse cupidatat. Commodo quis est sunt officia dolore anim. Mollit sit laborum sunt eiusmod non elit non ullamco laborum minim irure sint est sunt. Qui ullamco mollit elit do nostrud ullamco ullamco.",
    "created": "Thursday, July 2, 2015 3:50 AM"
  },
  {
    "title": 494546,
    "byline": "Riggs",
    "description": "Cupidatat dolor velit non Lorem laboris Lorem laboris tempor nostrud eiusmod exercitation esse sit eiusmod. Tempor aliqua amet laboris incididunt quis nostrud et amet aliquip nostrud. Elit nisi mollit non tempor adipisicing nulla occaecat dolor anim culpa. Ex non pariatur commodo esse sint pariatur officia in sint. Officia sunt cillum consectetur elit. Sunt magna deserunt cupidatat aliquip aliqua mollit Lorem Lorem. Qui et nostrud id sint proident dolore laborum commodo ullamco in laboris qui cupidatat.",
    "created": "Monday, April 20, 2015 6:33 AM"
  }
];

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
