let LoginController = function($scope, UserService, $cookies, $state) {
  UserService.checkAuth();
  $scope.login = function (user) {
    UserService.sendLogin(user)
    .then( (res) => {
      console.log(res);
      UserService.loginSuccess(res);
    });
  };

};

LoginController.$inject = ['$scope', 'UserService', '$cookies', '$state'];

export default LoginController;