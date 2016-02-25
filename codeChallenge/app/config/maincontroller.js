app.controller('MainController', function($scope){
    $scope.test = "you made it!!"
$scope.listItem = [];
   
 $scope.addItem = function () {
    $scope.listItem.push($scope.newItem)
    $scope.newItem= ""
 };
    
});