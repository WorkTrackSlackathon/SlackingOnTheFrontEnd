let UserController = function($scope, UserService, DataService, $stateParams) {
  
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

  UserService.getEmployee($stateParams.userId).then((res) => {
    console.log(res.data);
    $scope.employee = res.data;
  });

};

UserController.$inject = ['$scope', 'UserService', 'DataService', '$stateParams'];

export default UserController;