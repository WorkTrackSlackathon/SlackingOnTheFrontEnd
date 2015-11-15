let config = function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');
  
  $stateProvider
    .state('root', {
      abstract: true,
      templateUrl: 'templates/layout.tpl.html'
    })
    .state('root.login', {
      url: '/',
      controller: 'LoginController',
      templateUrl: 'templates/login.tpl.html'
    })
    .state('root.logout', {
      url: '/logout',
      controller: 'NavController'
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
      url: '/users/:userId',
      controller: 'UserController',
      templateUrl: 'templates/user.tpl.html'
    })
    .state('root.add', {
      url: '/users/add',
      controller: 'AddUserController',
      templateUrl: 'templates/add.tpl.html'
    });
};

config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default config;
