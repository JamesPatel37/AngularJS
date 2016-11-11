angular.module('character.service', [])
	.factory('CharacterService', function ($resource) {
		return $resource('/api/character/:id');
	});
