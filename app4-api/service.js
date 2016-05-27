angular.module('apiApp')
  .service('ApiService', function($q, $http) {


    this.getStarWarsCharacters = function() {
      var defer = $q.defer();

      $http.get('http://swapi.co/api/people/')
        .then(function(response) {
          defer.resolve(response.data.results);
        });

      return defer.promise;
    };

  });
