(function (angular) {
  'use strict';

  angular
      .module('users.ui.users')
      .controller('UsersListCtrl', UsersListCtrl)
      .controller('UsersShowCtrl', UsersShowCtrl)
      .controller('UsersEditCtrl', UsersEditCtrl)
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
    };
  }

  function UsersShowCtrl($scope, $uibModalInstance, user) {
    $scope.user = user;

    $scope.close = function () {
      $uibModalInstance.close();
    };
  }

  function UsersEditCtrl($scope) {
    $scope.dateOfBirthPopup = {opened: false};

    $scope.dateOfBirthPopupOptions = {
      maxDate: new Date(),
      startingDay: 1,
      ngModelOptions: {timezone: 'UTC'},
      showWeeks: false
    };
    
    $scope.openDateOfBirthPopup = function () {
      $scope.dateOfBirthPopup.opened = true;
    };
  }

  function UsersCreateCtrl($scope, $controller, $location, UsersService) {
    $controller(UsersEditCtrl, {$scope: $scope});

    $scope.action = 'Create';
    $scope.user = {};

    $scope.save = function () {
      UsersService.create($scope.user)
          .then(function () {
            $location.path('/#/users/list');
            alertify.success('Created successfully');
          })
          .catch(function () {
            alertify.error('Unable to create user');
          });
    }
  }

  function UsersUpdateCtrl($scope, $controller, $location, UsersService) {
    $controller(UsersEditCtrl, {$scope: $scope});

    $scope.action = 'Update';
  }

})(angular);
