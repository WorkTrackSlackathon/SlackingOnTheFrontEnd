let UserController = function($scope, UserService, DataService) {
  
  $scope.checkins = {};
  $scope.locations = {};
  // $scope.user = function() {};

};

UserController.$inject = ['$scope', 'UserService', 'DataService'];

export default UserController;