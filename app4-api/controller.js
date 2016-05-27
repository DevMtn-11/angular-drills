angular.module('apiApp')
  .controller('ApiController', function($scope, ApiService) {

    ApiService.getStarWarsCharacters()
      .then(function(results) {
        $scope.items = results;
      });
  });
