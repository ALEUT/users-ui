(function (angular) {
  'use strict';

  angular
      .module('common.auth')
      .controller('AuthCtrl', AuthCtrl);

  function AuthCtrl($scope, AuthService) {
    $scope.username = 'user';
    $scope.password = 'password';

    $scope.$watch('username', setCredentials);
    $scope.$watch('password', setCredentials);

    function setCredentials() {
      AuthService.setCredentials($scope.username, $scope.password);
    }
  }

})(angular);
