let UserController = function($scope, UserService, $state, $stateParams, $cookies) {
  
  UserService.checkAuth();
  UserService.getEmpCheckins($stateParams.userId).then((res) => {
    console.log(res.data);
  });
  UserService.getEmployee($stateParams.userId).then((empRes) => {
    console.log(empRes.data);
  });


  // let cookies = $cookies.get();

  // UserService.checkAuth();
  // $scope.employee = {};
  // $scope.checkin = {};

  // // Fetch the employee Data 
  // UserService.getEmployee($stateParams.userId).then((res) => {
  //   // console.log(res.data);
  //   $scope.employee = res.data;
  //   console.log($scope.employee.id);
  // });

  // // Doesn't work - private variable;
  // let id = $scope.employee.id;
  
  // DataService.getUserCheckins(id).then((res) => {
  //   // console.log(res);
  //   $scope.checkin = res.data;
  // });
  
};

UserController.$inject = ['$scope', 'UserService', '$state', '$stateParams', '$cookies'];

export default UserController;