angular.module('search.controller', [])
	.directive('characterPreview', function() {
		return {
			restrict: 'EA',
			scope: {
				character: '='
			},
			templateUrl: '../views/character.preview.html'
		}
	})
	.controller('SearchController', function ($scope, SearchService) {
		$scope.search = function(){
//use query for multipal result
//get for single result
			SearchService.query({name: $scope.name }, function(response) {
				// $scope.characters = {response};
				if(response.length)
					$scope.characters = {main: response[0], alternatives: response };
				else
					$scope.characters = response;

			})
		}

});
