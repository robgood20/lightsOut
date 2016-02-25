app.config(function($stateProvider, $urlRouterProvider){
   
    // this is for the default route //
    
    $urlRouterProvider.otherwise('/');
    
    $stateProvider
    .state('home', {
        url:'/home',
        templateUrl: '/home.html'
    })
    .state('view2', {
        url:'/view2',
        templateUrl:'/templateUrl',
    })
    
    
    
});