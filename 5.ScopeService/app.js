//The Scope Service - It binds model to view. Its an object and it involve dependency Injection. 
//All angular js services starts with $. scope is an angular js object. And it inject with function. It pass to the function. Here we passed the scope object to the function (Which is called dependency Injection.). Like $scope there are many other service modules are available.
var myApp = angular.module('myApp',[]);

myApp.controller('mainController', function($scope){
    $scope.name='Zarana Patel';
    $scope.occupation ='Web Developer';
    
      console.log($scope.name);
      console.log($scope.occupation);
    $scope.getname = function(){
            return 'Zarana Ubhadia';
       
    }
   
    console.log($scope);
});