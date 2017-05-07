/* 
What is the Logic behind the Two way data binding . There is something in between the model and view which is doing updates on model or view side. Angular JS offers an incredibly awesome feature 

 Watch - It is keeping track of the varibles or functions. Angular js automatically adds the watchers. 

Digest Loop - It asked the watch for every single variable or function about the changes - And It compares the new value to the old value and updates the value everywhere where it is connect to it  - either its DOM , interpolation or binding. 

Limitation : - As we said watch/digest loop works within AngularJS contexts . What happens if we dnt build code into the AngularJS contexts?

setTimeout(function(){
        $scope.handle = 'newhandle';
        console.log('scope changed!'); // in this case scope changed but DOM didn't update bcoz its outside angularJS context.
}, 3000);

Solution1 : Manually tells the angularjs context by using $apply inside the setTimeout.
Solution2:  AngularJS supports some services like timeout which is done similar thing as $apply and it is easy to use like below.
*/


var myApp = angular.module('myApp', []);
myApp.controller('myController', ['$scope','$filter', '$timeout', function($scope,$filter, $timeout){
    $scope.handle=' ';
    $scope.lowercasehandle = function(){
        return $filter('lowercase')($scope.handle);
    }
    $scope.$watch('handle' , function(newvalue ,oldvalue ){
            console.log("Changed");
            console.log('Old Value:'+oldvalue);
            console.log('New Value:'+newvalue);
        
        
    });
    $timeout(function(){
            $scope.handle='newhandles';
            console.log('scope changed!!');
        
    },3000);
}]);
