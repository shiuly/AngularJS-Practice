
var myApp = angular.module("myApp", []);
myApp.controller("myController", function ($scope) {
    console.log("Hello");
    $scope.newUsers = {};
    $scope.clikedUser = {};
    $scope.users = [
        {username: "shiuly", fullname: "shiuly parvin", email: "shiuly@gmail.com"},
        {username: "ruhul", fullname: "ruhul amin", email: "ruhul@gmail.com"},
        {username: "joy", fullname: "joy amin", email: "joy@gmail.com"}
    ];

    $scope.saveUser = function () {

        $scope.users.push($scope.newUsers);
        $scope.newUsers = {};
    };
    $scope.selectUser = function (x) {
        console.log(x);
        $scope.clikedUser = x;
    };
    $scope.Updateuser = function () {

    };
    $scope.deleteUser = function () {
        $scope.users.splice($scope.users.indexOf($scope.clikedUser),1);

    };

});

