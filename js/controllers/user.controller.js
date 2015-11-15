let UserController = function($scope, UserService, DataService, $state, $stateParams) {
  
  UserService.checkAuth();
  $scope.employee = {};
  $scope.checkin = {};

  // Fetch the employee Data 
  UserService.getEmployee($stateParams.userId).then((res) => {
    // console.log(res.data);
    $scope.employee = res.data;
    console.log($scope.employee.id);
  });

  // Doesn't work - private variable;
  let id = $scope.employee.id;
  
  DataService.getUserCheckins(id).then((res) => {
    // console.log(res);
    $scope.checkin = res.data;
  });
  
};

UserController.$inject = ['$scope', 'UserService', 'DataService', '$state', '$stateParams'];

export default UserController;