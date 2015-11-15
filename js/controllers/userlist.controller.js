import _ from 'underscore';

let UserListController = function($scope, UserService, DataService, $state) {
  $scope.employess = {};
  $scope.data = {};

  UserService.checkAuth();
  UserService.getEmployees().then( (res) => {
    $scope.employees = res.data;
  });


  // DataService.getUserCheckins()


  // HERE'S THE FUNCTION THAT THE BUTTON CALLS TO GO TO USER VIEW AND LOAD USERDATA
  $scope.viewUser = function(id) {
    $state.go('root.user');
  };
};

UserListController.$inject = ['$scope', 'UserService','DataService', '$state'];

export default UserListController;

// _.findWhere(id, employee.id)