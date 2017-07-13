angular.module("exampleApp", [])
    .constant("ACCOUNTS", [{
            id: 1,
            value: 12,
            text: "Add New"
        },
        {
            id: 2,
            value: 23,
            text: "Admin"
        }
    ])
    .service("navigatorService", function($window) {
        var latitude;
        var longitude;
        $window.navigator.geolocation.getCurrentPosition(function(position) {
            latitude = position.coords.latitude;
            longitude = position.coords.longitude;
        })
        this.getLatitude = function() {
            return latitude;
        }
        this.getLongitude = function() {
            return longitude;
        }
    })
    .directive("hightlight", function() {
        return {
            restrict: 'A',
            link: function(scope, element) {
                console.log(scope);
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
    .controller("defaultCtrl", ["$scope", "$filter", "ACCOUNTS", "navigatorService", "$timeout", function($scope, $filter, ACCOUNTS, navigatorService, $timeout) {

        $scope.newUser = {};
        $timeout(function() {
            $scope.newUser.latitude = navigatorService.getLatitude();
        }, 500)
        $scope.accounts = ACCOUNTS;
        $scope.newUser.account = $scope.accounts[0].value;

        $scope.noName = true;

        $scope.showName = function(a) {
            $scope.noName = !$scope.noName;

            $scope.tryAddNewUser();
        }

        $scope.tryAddNewUser = function() {
            console.log($scope.newUser);
        }

    }]);