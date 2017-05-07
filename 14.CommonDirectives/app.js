/*Common Directives
 The ng-if directive  - Completely removes the element from the DOM.
 The ng-hide Directive - Complety hides the elements from the DOM.
 The ng-class directive - Allows you to dynamically set CSS classes on an HTML element by databinding an expression that represents all classes to be added.
ng-class operates in three different ways, depending on which of three types the expression evaluates to:

1) If the expression evaluates to a string, the string should be one or more space-delimited class names.

2) If the expression evaluates to an object, then for each key-value pair of the object with a truthy value the corresponding key is used as a class name.

3) If the expression evaluates to an array, each element of the array should either be a string as in type 1 or an object as in type 2. This means that you can mix strings and objects together in an array to give you more control over what CSS classes appear. See the code below for an example of this.
=============================
The ng-repeat - is the For in loop. Here $scope.rules is the array of objects. To interates this array - we use ng-repeat directives in hhtml page.

*/


var myApp = angular.module('myApp', []);
myApp.controller('myController', ['$scope','$filter', function($scope,$filter){
    $scope.handle=' ';
    $scope.lowercasehandle = function(){
        return $filter('lowercase')($scope.handle);
    };
    $scope.characters = 5;
    $scope.rules = [
        {rulename: "You must enter 5 characters!! "},
        {rulename:"Its a cool rule!!"},
        {rulename:"Enjoy!!"}
        
    ];
}]);
