app.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home',{
            url: '/home',
            templateUrl: '/components/html/home.html',
        })
        .state('login', {
            url: '/login',
            templateUrl: '/components/html/login.html',
            controller: 'LogIn',
        })
        .state('registration', {
            url: '/registration',
            templateUrl: '/components/html/registration.html',
            controller: 'Registration',
        })
})