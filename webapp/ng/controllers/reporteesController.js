﻿(function () {
    var reporteesController = angular.module("myApp").controller("reporteesController", function ($scope, $routeParams, svcEmployee) {
        $scope.reportees = [];
        $scope.location = "";
        $scope.locationChoices = [];

        $scope.onLocationSelect = function (l) {
            $scope.location = l;
        }

        svcEmployee.getReporteesOf($routeParams.empno).then(function (data) {
            $scope.reportees = data;
            $scope.locationChoices = jQuery.unique($scope.reportees.map(function (el) {
                return el.location;
            }));
           
        }, function (data) {
            console.error("we had problems getting the reportees from the server , try again");
        });
      
    })
})();