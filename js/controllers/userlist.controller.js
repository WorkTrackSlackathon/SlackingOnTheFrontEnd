let UserListController = function($scope, UserService, DataService, $state, $stateParams) {
  $scope.users = {};
  $scope.data = {};

  UserService.checkAuth();
  UserService.getEmployees().then( (res) => {
    $scope.users = res.data;
  });

  // DataService.getUserCheckins()


  // HERE'S THE FUNCTION THAT THE BUTTON CALLS TO GO TO USER VIEW AND LOAD USERDATA
  $scope.viewUser = function(id) {
    console.log(id);
    UserService.getEmployee(id).then(() => {$state.go('root.user');
    });
  };
};

UserListController.$inject = ['$scope', 'UserService','DataService','$state','$stateParams'];

export default UserListController;