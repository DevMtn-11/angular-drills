angular.module( 'routingApp' )
	.service( 'service', function ( $q, $http ) {

		this.getStarWarsData = function () {

			var defer = $q.defer();

			$http( {
					method: 'GET',
					url: 'http://swapi.co/api/people'
				} )
				.then( function ( response ) {

					defer.resolve( response.data.results );

				} );

			return defer.promise;

		};

	} );
