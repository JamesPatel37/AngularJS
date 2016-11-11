angular.module('app',
['ngRoute',
 'ngResource',
 'search.controller',
 'search.service',
 'character.controller',
 'character.service'])
 .filter('trustHTML', function ($sce) {
   return function(text) {
     return $sce.trustAsHtml(text);
   }
 })
  .config(['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {

      $routeProvider
        .when('/', {
          templateUrl: 'views/search.html',
          controller: 'SearchController'
        })
        // handle here
        .when('/character/:id', {
          templateUrl: 'views/character.html',
          controller: 'CharacterController',
          resolve: {
             character: function($route, CharacterService) {
               return CharacterService.get({ id: $route.current.params.id })
             }
          }
        })
        .otherwise({
          redirectTo: '/'
        });

      $locationProvider.html5Mode(true);
  }]);
