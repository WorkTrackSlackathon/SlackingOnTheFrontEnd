let UserListController = function($scope, UserService) {

  
  // Something about this is incorrect:
  // UserService.getEmployees().then( (res) => {
  //   $scope.employees = res.data.results;
  // });
  // console.log(UserService);

  $scope.employess = {};

  UserService.checkAuth();
  UserService.getEmployees().then( (res) => {
    $scope.employees = res.data.results;
  });
};

UserListController.$inject = ['$scope', 'UserService'];

export default UserListController;