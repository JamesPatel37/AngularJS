angular.module('search.controller', [])
	.directive('characterPreview', function() { //remove "/" if needed
		return{
			restrict: 'EA',
			scope: {
				character: '='
			},
			templateUrl: '../views/character.preview.html' //  /views/character.
		}
	})
	.controller('SearchController', function ($scope, SearchService) {
			$scope.search = function() {
				//   ".query" is used to get multiple content while ".get" is used to get single object.
				SearchService.query({ name: $scope.name }, function(response) {
					if (response.length)
						$scope.characters = { main: response[0], alternatives: response };//response;
					else
						$scope.characters = response;
				});
			};
});
