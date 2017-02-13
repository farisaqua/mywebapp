"use strict";

angular.
    module('myApp').
    factory('personService', ['$window',  '$log', '$http', 
        function ($window,  $log, $http) {
            var apiUrl = 'http://localhost:9000/api/';
            return {
                getPersons: function () {
                   return $http.get(apiUrl + 'persons');
                },
                updatePerson: function (person) {
                   return $http.put(apiUrl + 'persons/' + person.id, person);
                }
            }
        }]);