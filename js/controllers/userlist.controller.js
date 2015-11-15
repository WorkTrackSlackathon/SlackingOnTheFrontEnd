
let UserListController = function($scope, UserService, DataService, $state, $stateParams) {

  $scope.users = {};
  $scope.data = {};

  UserService.checkAuth();
  UserService.getEmployees().then( (res) => {
    console.log(res.data);
    $scope.users = res.data;
  });

  // HERE'S THE FUNCTION THAT THE BUTTON CALLS TO GO TO USER VIEW AND LOAD USERDATA
  $scope.viewUser = function(id) {
    console.log(id);
    UserService.getEmployee(id).then(() => { 
      $state.go('root.user', { id: id });
    });
  };
};

UserListController.$inject = ['$scope', 'UserService','DataService','$state','$stateParams'];

export default UserListController;