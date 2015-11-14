let config = function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');
  
  $stateProvider
    .state('root', {
      abstract: true,
      templateUrl: 'templates/layout.tpl.html'
    })
    .state('root.home', {
      url: '/',
      controller: 'LoginController',
      templateUrl: 'templates/login.tpl.html'
    })
    .state('root.logout', {
      url: '/logout',
      controller: 'LogoutController'
    })
    .state('root.registration', {
      url: '/register',
      controller: 'RegisterController',
      templateUrl: 'templates/register.tpl.html'
    })
    .state('root.list', {
      url: '/userlist',
      controller: 'UserListController',
      templateUrl: 'templates/userList.tpl.html'
    })
    .state('root.user', {
      url: '/user/:userId',
      controller: 'UserController',
      templateUrl: 'templates/user.tpl.html'
    })
    .state('root.add', {
      url: '/user/add',
      controller: 'AddUserController',
      templateUrl: 'templates/add.tpl.html'
    });
};

config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default config;