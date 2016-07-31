(function (angular) {
  'use strict';

  angular
      .module('users.ui.users')
      .controller('UsersListCtrl', UsersListCtrl)
      .controller('UsersShowCtrl', UsersShowCtrl)
      .controller('UsersDeleteCtrl', UsersDeleteCtrl)
      .controller('UsersEditCtrl', UsersEditCtrl)
      .controller('UsersCreateCtrl', UsersCreateCtrl)
      .controller('UsersUpdateCtrl', UsersUpdateCtrl);

  function UsersListCtrl($scope, $uibModal, UsersService) {
    loadUsers();

    $scope.showUser = function (userId) {
      UsersService.get(userId)
          .then(function (response) {
            $uibModal.open({
              templateUrl: '/js/users/partials/modals/show.html',
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

    $scope.deleteUser = function (userId) {
      UsersService.get(userId)
          .then(function (response) {
            var modalInstance = $uibModal.open({
              templateUrl: '/js/users/partials/modals/delete.html',
              controller: 'UsersDeleteCtrl',
              resolve: {
                user: function () {
                  return response.data;
                }
              }
            });

            modalInstance.result
                .then(function (userId) {
                  UsersService.delete(userId)
                      .then(function () {
                        loadUsers();
                        alertify.success('User deleted successfully');
                      })
                      .catch(function () {
                        alertify.error('Unable to delete user');
                      });
                });
          })
          .catch(function () {
            alertify.error('Unable to delete user');
          });
    };

    function loadUsers() {
      UsersService.list()
          .then(function (response) {
            $scope.users = response.data;
          })
          .catch(function () {
            alertify.error('Unable to load users');
          });
    }
  }

  function UsersShowCtrl($scope, $uibModalInstance, user) {
    $scope.user = user;

    $scope.close = function () {
      $uibModalInstance.close();
    };
  }

  function UsersDeleteCtrl($scope, $uibModalInstance, user) {
    $scope.user = user;

    $scope.ok = function () {
      $uibModalInstance.close(user.id);
    };

    $scope.cancel = function () {
      $uibModalInstance.dismiss('cancel');
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

  function UsersUpdateCtrl($scope, $controller, $routeParams, $location, UsersService) {
    $controller(UsersEditCtrl, {$scope: $scope});

    $scope.action = 'Update';

    UsersService.get($routeParams.userId)
        .then(function (response) {
          $scope.user = response.data;
        })
        .catch(function () {
          $location.path('/#/users/list');
          alertify.error('Unable to load user');
        });

    $scope.save = function () {
      UsersService.update($scope.user)
          .then(function () {
            $location.path('/#/users/list');
            alertify.success('Updated successfully');
          })
          .catch(function () {
            alertify.error('Unable to update user');
          });
    }
  }

})(angular);
