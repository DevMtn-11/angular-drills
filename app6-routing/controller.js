angular.module('routingApp')
  .controller('controller', function($scope, service) {

      service.getStarWarsData()
        .then(function(response) {
          $scope.characters = response;
        });

  });
