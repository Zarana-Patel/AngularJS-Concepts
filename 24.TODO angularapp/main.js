//simple todo app 

var myApp = angular.module('myApp',[]);

myApp.controller('myController',function($scope){
    $scope.tasks = [{text:'task1', done:false},{text:'task2',done:false},{text:'task3',done:false}];
    $scope.getTotalTasks = function () {
    return $scope.tasks.length;
  };
    $scope.addTask = function(){
       $scope.tasks.push( {text:$scope.newTask, done:false} );
        $scope.newTask = "";//Reset the text field.
    };
/*
 $scope.clearCompleted = function(){
     var oldTasks =
    $scope.tasks = _.filter($scope.tasks,function(task){
            return !task.done;
    }) ;
 };
  */


 $scope.archive = function() {
      var oldTasks = $scope.tasks;
      $scope.tasks = [];
      angular.forEach(oldTasks, function(task) {
        if (!task.done) $scope.tasks.push(task);
      });
    };
                    });
