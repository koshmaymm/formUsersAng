angular.module("exampleApp", [])
    .controller("defaultCtrl", function($scope, $filter) {

        $scope.users = [{
            name: "Table",
            price: 44.10
        }];

        $scope.noName = true;

        $scope.newUser = function() {
            $scope.name = $scope.inputUserAccount,
                $scope.type = $scope.inputName,
                $scope.inputProfile,
                $scope.inputLevel,
                $scope.firstName,
                $scope.lastName,
                $scope.inputPassword,
                $scope.inputEmail,
                $scope.landPhone,
                $scope.mobilePhone,
                $scope.inputMap,
                $scope.latitude,
                $scope.longitude;
        };

        $scope.showName = function() {

            if ($scope.noName == true) {
                $scope.noName = false;
            } else {
                $scope.noName = true;
            }
            console.log($scope.noName);
            $scope.tryAddNewUser();
        }

        $scope.tryAddNewUser = function() {
            console.log("<<<=====>>>");
        }
    });