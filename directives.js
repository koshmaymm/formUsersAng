angular.module("exampleApp")
    .directive("hightlight", function() {
        return {
            restrict: 'A',
            link: function(scope, element) {

                element.on("mouseover", function(event) {
                    angular.element(element).css({ color: scope.color })

                })
                element.on("mouseout", function(event) {
                    angular.element(element).css({ color: "black" })
                })
            },
            scope: { color: "@" }
        };
    })
    .directive("strongfont", function() {
        return {
            restrict: 'A',
            link: function(scope, element) {

                element.on("mouseover", function(event) {
                    angular.element(element).css({ fontWeight: "bold" })

                })
                element.on("mouseout", function(event) {
                    angular.element(element).css({ fontWeight: "normal" })
                })
            },
            scope: { fontWeight: "@" }
        };
    })
    .directive("strongborder", function() {
        return {
            restrict: 'A',
            link: function(scope, element) {

                element.on("mouseenter", function(event) {
                    angular.element(element).css({ border: "3px outset gold" })

                })
                element.on("mouseout", function(event) {
                    angular.element(element).css({ border: scope.border })
                })
            },
            scope: { border: "@" }
        };
    })
    .directive("myCustomer", function() {
        return {
            restrict: 'E',
            templateUrl: 'customer.html'
        };
    })