app.controller('Registration', function ($scope) {
    $scope.test = 'Registration controller working'
    
    $scope.registration = function(){
    $http.post('registration', $scope.user)
    
    .success(function(res){
        debugger;
    })
    .error(function(res){
        debugger;
    })
}
})