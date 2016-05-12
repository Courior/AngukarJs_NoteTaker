'use strict';

angular.module('myApp.noteFactory', [])

.factory("noteFactoryData",['$http', function($http) {
    var url='data/notes.json';
    return {
      getData: getData,
      addData: addData,
      removeData: removeData
    };
    function getData(){
      return $http.get(url);
    }
    function addData(noteToAdd){
      return $http.post(url,noteToAdd);
    }
    function removeData(item){
      return $http.delete(url + "/" + item.id)
    }
}])
;
