(function (angular) {
  'use strict';

  angular
      .module('users.ui.users')
      .controller('UsersListCtrl', UsersListCtrl)
      .controller('UsersShowCtrl', UsersShowCtrl)
      .controller('UsersCreateCtrl', UsersCreateCtrl)
      .controller('UsersUpdateCtrl', UsersUpdateCtrl);

  function UsersListCtrl($scope, $uibModal, UsersService) {
    UsersService.list()
        .then(function (response) {
          $scope.users = response.data;
        })
        .catch(function () {
          alertify.error('Unable to load users');
        });

    $scope.showUser = function (userId) {
      UsersService.show(userId)
          .then(function (response) {
            $uibModal.open({
              templateUrl: '/js/users/partials/showModal.html',
              controller: 'UsersShowCtrl',
              resolve: {
                user: function () {
                  return response.data;
                }
              }
            });
          })
          .catch(function () {
            alertify.error('Unable to load user');
          });
    }
  }

  function UsersShowCtrl($scope, $uibModalInstance, user) {
    $scope.user = user;

    $scope.close = function () {
      $uibModalInstance.close();
    };
  }

  function UsersCreateCtrl($scope) {

  }

  function UsersUpdateCtrl($scope) {

  }

})(angular);
