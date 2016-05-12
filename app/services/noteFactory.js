'use strict';

angular.module('myApp.noteFactory', [])

.factory("noteFactoryData",['$http', function($http) {
    var url='data/notes.json';
    return {
      getData: getData,
      
    };
    function getData(){
      return $http.get(url);
    }
}])
;
