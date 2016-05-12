'use strict';

angular.module('myApp.noteFactory', ['$http'])

.factory(['$http', function($http) {
    return {
      getData: getData,
      addData: addData,
      removeData: removeData
    };
    function getData(){
      return $http.get(url);
    }
    function getData(noteToAdd){
      return $http.post(url,noteToAdd);
    }
    function removeData(item){
      return $http.delet(url + "/" + item.id)
    }
}])
;
