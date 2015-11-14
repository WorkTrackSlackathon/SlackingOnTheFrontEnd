
let LoginController = function($scope, UserService, $cookies, $state) {
  
  $scope.login = function (user) {
    UserService.sendLogin(user)
    .then( (res) => {
      UserService.loginSuccess(res);
    });
  };

};

LoginController.$inject = ['$scope', 'UserService', '$cookies', '$state'];

let LoginController = function($scope, UserService) {
  
  

};

LoginController.$inject = ['$scope', 'UserService'];

export default LoginController;