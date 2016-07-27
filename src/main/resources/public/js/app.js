angular.module('users.ui', [
  'ngRoute',
  'ngAnimate',
  'ui.bootstrap',
  'users.ui.users'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/users/list'});
}]);