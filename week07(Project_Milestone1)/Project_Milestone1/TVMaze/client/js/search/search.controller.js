angular.module('search.controller', ['ngSanitize'])
.directive('showPreview', function() {
		return{
			restrict: 'EA',
			scope: false,
			templateUrl: '../views/show.preview.html'
		}
	})
	.controller('SearchController', function ($scope, SearchService) {
		
			$scope.search = function() {
				SearchService.query({ q: $scope.name }, function(response) {
						$scope.shows = response;
						console.log(response)
				});
			};

});
