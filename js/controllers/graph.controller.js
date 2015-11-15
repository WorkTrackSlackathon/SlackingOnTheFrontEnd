let GraphController = function($scope, DataService) {
  
  DataService.getLocations().then( (res) => {
    $scope.labels = ["Bathroom", "Break Room", "Office"];
    
    $scope.data = [2, 1, 3];

  });
};

GraphController.$inject = ['$scope', 'DataService'];

export default GraphController;