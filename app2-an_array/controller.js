angular.module('arrayApp')
  .controller('arrayController', function($scope, dataService) {

    $scope.items = dataService.myData;

  });
