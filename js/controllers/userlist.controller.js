let UserListController = function($scope, UserService) {
  $scope.employess = {};

  UserService.checkAuth();
  UserService.getEmployees().then( (res) => {
    $scope.employees = res.data.results;
  });
};

UserListController.$inject = ['$scope', 'UserService'];

export default UserListController;