angular.module('apiApp')
  .service('apiService', function($q, $http) {

    this.getData = function() {
      var defer = $q.defer();

      $http.get('http://swapi.co/api/people/')
        .then(function(response) {
          defer.resolve(response.data.results);
        });

      return defer.promise;
    };

  });
