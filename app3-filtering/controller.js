angular.module('filterApp')
  .controller('filterController', function($scope, filterService) {
    $scope.items = filterService.myData;
  });
