angular.module("exampleApp", [])
    .controller("defaultCtrl", function($scope, $filter) {

        $scope.users = [{
            name: "Table",
            price: 44.10
        }];

        $scope.noName = true;
        let test = $scope.inputUserAccount;

        $scope.newUser = {

            firstParam: $scope.test,
            secondParam: document.getElementById("inputUserAccount").value
                /*name
                type: document.getElementById("inputUserAccount").value,
                inputProfile,
                inputLevel,
                firstName,
                lastName,
                inputPassword,
                inputEmail,
                landPhone,
                mobilePhone,
                inputMap,
                latitude,
                longitude*/
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
            console.log($scope.newUser);
            console.log(test);
        }


    });