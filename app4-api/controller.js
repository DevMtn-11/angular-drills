angular.module('apiApp')
  .controller('mainController', function($scope, apiService) {
    apiService.getData()
      .then(function(results) {
        $scope.items = results;
      });
  });
