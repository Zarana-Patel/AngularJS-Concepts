//minification meaning - remove all extra spaces ,whitespace and compress the javascript file


var myApp = angular.module('myApp',['ngMessages','ngResource']);   //[] - list of modules  - ngmessages module - 

myApp.controller('mainController', ['$scope', '$log', function(a,b) {  // make sure the sequence of the array should match with function which is define in the array
    b.info(a);
}]);
