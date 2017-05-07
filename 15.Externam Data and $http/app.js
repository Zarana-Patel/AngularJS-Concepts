/*Angular JS -Externam Data and $http


*/
var myApp = angular.module('myApp', []);
myApp.controller('myController', ['$scope','$filter','$http', function($scope,$filter,$http){
    $scope.handle=' ';
    $scope.lowercasehandle = function(){
        return $filter('lowercase')($scope.handle);
    };
    $scope.characters = 5;
    var url =  'http://localhost:8000/rules/?callback=JSON_CALLBACK';
    $http.get(url).success(function(result,status) {
        $scope.rules = result;
           $scope.statuscode = status;
            console.log($scope.rules );
            console.log($scope.statuscode );
 }).error(function(data, status) {
    console.log(data);
 });
     $scope.newRule =' ';
    $scope.addRule = function(){
       $http.post('http://localhost:8000/rules/?callback=JSON_CALLBACK', {Rulename: $scope.newRule})
                .success(function(result){
                    $scope.rules = results;
           $scope.newRule = '';
           
       })
        .error(function(data, status){
            console.log(data);
       });
    };
}]);
 
 
 