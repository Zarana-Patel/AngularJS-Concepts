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
   $scope.people =[
       {
            name : 'Zarana Ubhadia',
            address:'1234 Main st, Milpitas, CA- 94086'
       },
        {
            name : 'Abhishek Ubhadia',
            address:'1234 Main st, Saratoga, CA- 11111'
        },
        { 
            name : 'ABCD',
            address:'1234 Main st, NY, CA- 22222'
            }]
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
    },
        compile: function(elem, attrs){
            console.log('Compiling...');
            console.log(elem.html());
            return{
               
                post:function(scope,element, attrs){
                     console.log("post-linking");
                    console.log(elem);
                    
                }
            }
        }
       
        
    }
});