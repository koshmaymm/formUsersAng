angular.module("exampleApp", [])
    .controller("defaultCtrl", ["$scope", "$filter", "ACCOUNTS", "TYPES", "PROFILES", "LEVELS", "MAPS", "navigatorService", "$timeout", function($scope, $filter, ACCOUNTS, TYPES, PROFILES, LEVELS, MAPS, navigatorService, $timeout) {

        $scope.newUser = {};
        $timeout(function() {
            $scope.newUser.latitude = navigatorService.getLatitude();
            $scope.newUser.longitude = navigatorService.getLongitude();
        }, 1500)

        $scope.accounts = ACCOUNTS;
        $scope.types = TYPES;
        $scope.profiles = PROFILES;
        $scope.levels = LEVELS;
        $scope.maps = MAPS;

        $scope.newUser.account = $scope.accounts[0].value;
        $scope.newUser.type = $scope.types[0].value;
        $scope.newUser.profile = $scope.profiles[0].value;
        $scope.newUser.level = $scope.levels[0].value;
        $scope.newUser.map = $scope.maps[0].value;

        $scope.noName = true;
        $scope.presentUser = true;

        $scope.showName = function(a) {
            $scope.noName = !$scope.noName;

            $scope.tryAddNewUser();
        }

        $scope.tryAddNewUser = function() {
            if ($scope.newUser.account == "New User") {
                console.log($scope.accounts[0].text);
            } else {
                console.log($scope.newUser.account);
            }
            console.log($scope.newUser.longitude);
        }

        $scope.checkUserType = function() {
            $scope.newUser.account !== "New User" ? ($scope.presentUser = false) : ($scope.presentUser = true);
        }

    }]);