// Register `personList` component, along with its associated controller and template
"use strict";

angular.
    module('myApp').
    component('personList', {
        templateUrl: 'person/personList.html',
        transclude: true,
        bindings: {},
        controller: ['$scope', 'personService', 
            function PersonListController($scope, personService) {
                var self = this;
                self.selectedPerson = undefined;
                self.persons = undefined;
                self.successMessage = undefined;
                self.errorMessage = undefined;

                self.loadPersons = function () {
                    personService.getPersons()
                        .then(function (result) {
                            console.log(result);
                            self.persons = result.data;
                        });
                };

                self.loadPersons();

                self.editPerson = function(person) {
                    self.selectedPerson = person;
                    self.successMessage = undefined;
                    self.errorMessage = undefined;
                }
                
                self.updatePerson = function(person) {
                    personService.updatePerson(person)
                                .then(function(){
                                    self.successMessage = "Update Successful!";            
                                }, function() {
                                    self.errorMessage = "Oops! sorry, there was an error updating. Please try again.";
                                });
                    self.selectedPerson = undefined;
                }
            }]
    });