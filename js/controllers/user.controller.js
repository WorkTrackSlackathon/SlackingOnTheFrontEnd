let UserController = function($scope, UserService, DataService) {
  
  UserService.checkAuth();

  // Fetch the employee Data
  $scope.getEmployee = (userid) => UserService.getEmployee(userid).then((res) => {
    console.log('wat');
    $scope.employee = {};
    console.log(employee);
  });
  $scope.checkins = {};
  $scope.locations = {};
  $scope.user = function(){};

};

UserController.$inject = ['$scope', 'UserService', 'DataService'];

export default UserController;