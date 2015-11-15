let UserController = function($scope, UserService, DataService, $state, $stateParams, $cookies) {

  //Cookie Auth
  UserService.checkAuth();
  
  $scope.checkins = {};
  $scope.employee = {};

  // Fetch Employee Data 
  UserService.getEmployee($stateParams.id).then((res) => {
    // console.log(res);
    $scope.employee = res.data;
  });
  
  // Fetch Checkin Data
  DataService.getUserCheckins($stateParams.id).then((res) => {
    console.log(res.data);
    $scope.checkins = res.data;

  });
};

UserController.$inject = ['$scope', 'UserService', 'DataService', '$state', '$stateParams', '$cookies'];

export default UserController;