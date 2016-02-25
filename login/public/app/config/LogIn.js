app.controller('LogIn', function($scope, $http){
   $scope.test = "Login controller working" 
    
$scope.login = function(){
    $http.post('login', $scope.user)
    .success(function(res){
        console.log($scope.user)
        debugger;
    })
    .error(function(res){
        debugger;
    })
}

















})