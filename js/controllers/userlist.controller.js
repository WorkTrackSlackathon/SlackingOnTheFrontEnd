let UserListController = function($scope, UserService) {
  
  // Something about this is incorrect:
  UserService.getEmployees().then( (res) => {
    $scope.employees = res.data.results;
  });
  console.log(UserService);

};

UserListController.$inject = ['$scope', 'UserService'];

export default UserListController;