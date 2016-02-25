var app = angular.module('toDo', []);

app.controller('MainController', function($scope){
this.test="you made it here!!";  
$scope.todo = [];


$scope.addItem = function(){
    if($scope.listItem){
    this.todo.push($scope.listItem)
    $scope.listItem = ""
    }
    
$scope.removeItem = function(){
    $scope.todo.splice(1,1)
}
}
});