let NavController = function($scope, UserService, $cookies, $state) {
  
  
  $scope.logmeout = function() {
    UserService.logout();
  };

};

NavController.$inject = ['$scope', 'UserService', '$cookies', '$state'];

export default NavController;