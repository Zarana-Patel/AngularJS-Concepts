/*
Singleton - The one and only copy of an object , Its pattern in OOPs. Example: Person is object - it has lets say laura object, steve object. But if it is singleton - it means it has only one copy of an object. Angular js service supports singletion. If you run this - and click on second , you can see 2 properties  , one from main and 2nd from second. Reason is - It is only and only one copy of $log object. It is called Singleton. It used for huge memory saving.

*/
var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
    
    $routeProvider
    
    .when('/', {
        templateUrl: 'pages/main.html',
        controller: 'mainController'
    })
    
    .when('/second', {
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })
    
    .when('/second/:num', {
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })
    
});

myApp.controller('mainController', ['$scope', '$log', function($scope, $log) {
    
    $scope.name = 'Main';
    $log.main = 'Property from main';
    $log.log($log);
}]);

myApp.controller('secondController', ['$scope', '$log', '$routeParams', function($scope, $log, $routeParams) {
    
    $scope.num = $routeParams.num || 1;
    $log.second = 'Property from second';
    $log.log($log);
    
}]);
