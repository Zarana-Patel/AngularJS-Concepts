/*
Creating service

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
   $scope.person ={
       name : 'Zarana Patel',
       address:'1234 Main st, Cupertino, CA- 94086'
       
   }
   $scope.personfun = function(person){
            return 'My name is :' +' ' + person.name; 
   };
}]);

myApp.controller('secondController', ['$scope', '$log', '$routeParams', function($scope, $log, $routeParams) {
    
}]);
myApp.directive("searchResult",function(){
    return{
        restrict:'AEC',
        templateUrl:'directives/searchResults.html ',
         replace: true,
        scope:{
            personName:'@',
            personAddress:'@',
            personObject:"=",
            personFun:"&"
    }
       
        
    }
});