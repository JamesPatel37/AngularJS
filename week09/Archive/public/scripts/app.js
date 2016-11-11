angular.module('myApp', [])

	.controller('MainCtrl', ['$scope', function($scope){

		$scope.messages = [];

		$scope.newMessage = '';

		$scope.socket = io();

		//$scope.others = {};

$scope.mouseMoved = function(event) {
	console.log(event.x, event.y)
}


		$scope.sendMessage = function(message){
			$scope.socket.emit('chat message', message);
			$scope.newMessage = '';
		}

		$scope.socket.on('chat message', function(msg){
			$scope.messages.push(msg);
			$scope.$apply();
		});



	}]);
