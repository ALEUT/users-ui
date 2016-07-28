angular.module('users.ui', [
  'ngRoute',
  'ngAnimate',
  'ui.bootstrap',
  'common',
  'users.ui.users'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/users/list'});
}]);