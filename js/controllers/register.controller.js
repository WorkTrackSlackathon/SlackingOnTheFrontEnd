let RegisterController = function($scope, UserService, $state) {
  
  $scope.addEmployee = (newUser) => {
    UserService.addEmployee(newUser).then( (res) => {
      $scope.newEmployee = {};
    }).then ($state.go('root.list'));
  };

};

RegisterController.$inject = ['$scope', 'UserService', '$state'];

export default RegisterController;