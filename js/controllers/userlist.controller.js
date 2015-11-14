let UserListController = function($scope, UserService) {
  
  // UserService.getEmployees().then( (res) => {
  //   $scope.employees = res.data.results;
  // });
  console.log(UserService);

};

UserListController.$inject = ['$scope', 'UserService'];

export default UserListController;