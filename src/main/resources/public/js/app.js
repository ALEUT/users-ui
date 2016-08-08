angular.module('users.ui', [
  'ngRoute',
  'ngAnimate',
  'ngAlertify',
  'ui.bootstrap',
  'common',
  'users.ui.users'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/users/list'});
}]);