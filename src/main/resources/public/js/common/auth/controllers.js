(function (angular) {
  'use strict';

  angular
      .module('common.auth')
      .controller('AuthCtrl', AuthCtrl);

  function AuthCtrl($scope, AuthService, UIConfigService) {
    $scope.username = UIConfigService.getConfig().service.users.username;
    $scope.password = UIConfigService.getConfig().service.users.password;

    $scope.$watch('username', setCredentials);
    $scope.$watch('password', setCredentials);

    function setCredentials() {
      AuthService.setCredentials($scope.username, $scope.password);
    }
  }

})(angular);
