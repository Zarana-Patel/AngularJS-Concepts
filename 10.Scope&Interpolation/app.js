//Interpolation : Scope is the glue between controller and view.


var myApp = angular.module('myApp',[]);   //[] - list of modules  
myApp.controller('mainController', ['$scope', '$interval','$timeout', function($scope, $interval, $timeout) {  
   $scope.name = 'Zarana';   
    var tick = function(){
        $scope.clock = Date.now();
    }
    tick();
    $interval(tick,1000);
    
    $timeout(function(){
        $scope.name="Abhishek";
       
    },3000);
    
}]);
