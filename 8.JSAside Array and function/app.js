
var myApp = angular.module('myApp',['ngMessages','ngResource']);   //[] - list of modules  - ngmessages module - 

myApp.controller('mainController', function($scope, $log, $filter, $resource){
    console.log($resource);
});
