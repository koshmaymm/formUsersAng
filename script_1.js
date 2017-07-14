angular.module("exampleApp", [])
    .constant("ACCOUNTS", [{
            id: 1,
            value: "New User",
            text: "Add New"
        },
        {
            id: 2,
            value: "Admin",
            text: "Admin"
        },
        {
            id: 3,
            value: "project manager",
            text: "Project Manager"
        },
        {
            id: 4,
            value: "product manager",
            text: "Product Manager"
        },
        {
            id: 5,
            value: "team leader",
            text: "Team Leader"
        }
    ])
    .constant("TYPES", [{
            id: 11,
            value: "administrator",
            text: "ADMINISTRATOR"
        },
        {
            id: 22,
            value: "devops",
            text: "DEVOPS"
        },
        {
            id: 33,
            value: "support specialist",
            text: "SUPPORT SPECIALIST"
        },
        {
            id: 44,
            value: "ui/ux designer",
            text: "UI/UX DESIGNER"
        }
    ])
    .constant("PROFILES", [{
            id: 111,
            value: "junior",
            text: "JUNOIR"
        },
        {
            id: 222,
            value: "middle",
            text: "MIDDLE"
        },
        {
            id: 333,
            value: "senior",
            text: "SENIOR"
        }
    ])
    .constant("LEVELS", [{
            id: 1111,
            value: "first",
            text: "FIRST"
        },
        {
            id: 2222,
            value: "second",
            text: "SECOND"
        },
        {
            id: 3333,
            value: "third",
            text: "THIRD"
        },
        {
            id: 4444,
            value: "fourth",
            text: "FOURTH"
        },
        {
            id: 4444,
            value: "fifth",
            text: "FIFTH"
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
    .controller("defaultCtrl", ["$scope", "$filter", "ACCOUNTS", "TYPES", "PROFILES", "LEVELS", "navigatorService", "$timeout", function($scope, $filter, ACCOUNTS, TYPES, PROFILES, LEVELS, navigatorService, $timeout) {

        $scope.newUser = {};
        $timeout(function() {
            $scope.newUser.latitude = navigatorService.getLatitude();
            $scope.newUser.longitude = navigatorService.getLongitude();
        }, 500)

        $scope.accounts = ACCOUNTS;
        $scope.types = TYPES;
        $scope.profiles = PROFILES;
        $scope.levels = LEVELS;

        $scope.newUser.account = $scope.accounts[0].value;
        $scope.newUser.type = $scope.types[0].value;
        $scope.newUser.profile = $scope.profiles[0].value;
        $scope.newUser.level = $scope.levels[0].value;

        $scope.noName = true;
        $scope.presentUser = true;

        $scope.showName = function(a) {
            $scope.noName = !$scope.noName;
            $scope.presentUser = !$scope.presentUser;
            $scope.tryAddNewUser();
        }

        $scope.tryAddNewUser = function() {
            if ($scope.newUser.account == "New User") {
                console.log($scope.accounts[0].text);
            }
        }
        $scope.checkUserType = function() {
            $scope.newUser.account !== "New User" ? ($scope.presentUser = false) : ($scope.presentUser = true);
        }

    }]);