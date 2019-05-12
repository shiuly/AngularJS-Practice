
var myApp = angular.module("myApp", []);
myApp.controller("myController", function ($scope) {
    console.log("Hello");
    $scope.newUsers = {};
    $scope.clikedUser = {};
    $scope.users = [
        {username: "shiuly",  email: "shiuly@gmail.com",price:"999"},
        {username: "ruhul",  email: "ruhul@gmail.com",price:"1900"},
        {username: "joy",  email: "joy@gmail.com",price:"1700"},
           {username: "reza",  email: "reza@gmail.com",price:"899"},
             {username: "sumi",  email: "sumi@gmail.com",price:"7777"}
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

