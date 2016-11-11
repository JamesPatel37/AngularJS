angular.module('fact.controller', [])
	.controller('FactController', function ($scope, factResource) {

		$scope.getMathFact = function () {
			factResource.get({
				type: 'math',
				number: $scope.number,
				save: $scope.save
			}, function (response) {
				$scope.fact = response;
			});
		};

		// TODO Implement getTrivia and getDate

});
