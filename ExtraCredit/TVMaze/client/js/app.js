angular.module('app',
['ngRoute',
 'ngResource',
 'search.controller',
 'search.service',
 'show.controller',
 'show.service',
 'firebase'])
 .filter('trustHTML', function($sce) {
    return function(text){
      return $sce.trustAsHtml(text);
    };
  })
  .config(['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {

      $routeProvider
        .when('/', {
          templateUrl: 'views/search.html',
          controller: 'SearchController'
        })
        .when('/show/:id', {
          templateUrl: 'views/show.html',
          controller:'ShowController',
          resolve: {
            show: function($route, ShowService){
              return ShowService.get({ id: $route.current.params.id})
            }
          }
        })
        .otherwise({
          redirectTo: '/'
        });

      $locationProvider.html5Mode(true);
  }])
  .controller('MainCtrl', ['$scope', '$firebaseArray', function($scope, $firebaseArray){

    var ref = new Firebase('https://sizzling-inferno-7954.firebaseio.com/');

    $scope.queue = $firebaseArray(ref);

    $scope.addToQueue = function(name, value){
      ref.child(name).set(value);
      $scope.name = '';
    };

  }]);
