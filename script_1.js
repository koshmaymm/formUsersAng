angular.module("exampleApp", [])
    .controller("defaultCtrl", function($scope, $filter) {

        $scope.users = [{
            name: "Table",
            price: 44.10
        }];

        $scope.noName = true;

        $scope.test1 = "$scope.inputUserAccount"; // ???

        $scope.newUser = {
            name: $scope.inputUserAccount,
            test11: "some test"
        };


        $scope.showName = function(a) {
            if ($scope.noName == true) {
                $scope.noName = false;
            } else {
                $scope.noName = true;
            }
            $scope.tryAddNewUser();
        }

        $scope.tryAddNewUser = function() {
            console.log($scope.users[0].name);
            console.log($scope.newUser.name);
            console.log($scope.newUser.test11);
        }


    });