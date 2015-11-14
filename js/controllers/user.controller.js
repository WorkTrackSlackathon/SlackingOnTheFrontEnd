let UserController = function($scope, UserService, DataService) {
  
  // Fetch the employee Data
  $scope.getEmployee = (userid) => UserService.getEmployee(userid).then((res) => {
    $scope.employee = {};
    console.log(employee);
  });
  $scope.checkins = {};
  $scope.locations = {};
  // $scope.user = function() {};

};

UserController.$inject = ['$scope', 'UserService', 'DataService'];

export default UserController;