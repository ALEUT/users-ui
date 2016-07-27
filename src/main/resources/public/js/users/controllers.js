(function (angular) {
  'use strict';

  angular
      .module('users.ui.users')
      .controller('UsersListCtrl', UsersListCtrl)
      .controller('UsersShowCtrl', UsersShowCtrl)
      .controller('UsersCreateCtrl', UsersCreateCtrl)
      .controller('UsersUpdateCtrl', UsersUpdateCtrl);

  function UsersListCtrl($scope, UsersService) {
    UsersService.list()
        .then(function (response) {
          $scope.users = response.data;
        })
        .catch(function () {
          alertify.error('Unable to load users');
        });
  }

  function UsersShowCtrl($scope) {

  }

  function UsersCreateCtrl($scope) {

  }

  function UsersUpdateCtrl($scope) {

  }

})(angular);
