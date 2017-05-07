/* Directives and Two way data binding....

 In html ng-model is the view of the input .. When We enter the value in to the textbox - it changed the value of the model(in this case its $scope.handle).. So it called view changes the model. 

In app.js lowercasehandle is the function which is changing the value of the model($scope.handle ) and it passes to the view (by call the lowercasehandle) .. So it called model changes the view.

Model  - $scope.handle & $scope.lowercase = function{ ... }
View - <input type ="text" ng-model="handle" />  & <h1> http://www.linkedin.com/{{lowercasehandle()}}</h1>

The summmery is Angular JS is supporting the Two Way Data Binding (Model can change the view and view can change the model)
*/

var myApp = angular.module('myApp', []);
myApp.controller('myController', ['$scope','$filter', function($scope,$filter){
    $scope.handle=' ';
    $scope.lowercasehandle = function(){
        return $filter('lowercase')($scope.handle);
    }
}]);
