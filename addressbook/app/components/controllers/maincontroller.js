app.controller('MainController', function ($scope) {
   $scope.zoo = [{
       name: "Simba",
        maine: "yellow",       
   },];
    $scope.book = [{
      firstName: "tim",
      lastName: "tadpole",
      phoneNumber:777-7745,       
    },];

    $scope.addUser = function () {
        $scope.book.push($scope.newUser);
        console.log($scope.book);
        $scope.newUser= null; 
    };
     $scope.addProperty = function (prop) {
       $scope.book.push(prop);
        console.log($scope.book);
        $scope.newUser.prop = null; 
    };

$scope.addProp = function(){
    
  $scope.zoo.push(size)  
  console.log($scope.zoo)
};


});