﻿(function () {
    var awaitingRibbon = angular.module("myApp").directive("awaitingRibbon", function () {
        return {
            restrict: "E",
            replace: false,
            templateUrl:"ng/templates/awaiting-ribbon.html"

        }
    })
})();