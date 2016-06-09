/* 
 * 
 * module.js - AngularJS
 * Modulo para gerencia das informações do JSON para listagem 
 * @Author: Tobias de S. Cavichioli
 * 
 */

/* global angular */

angular.module('cinq', [])
        .controller('list', function($scope, $http)
        {
            $http.get('/rest/people').success(function(data)
            {
               $scope.people = data; 
            });
        });

