(function (angular) {
  'use strict';

  angular
      .module('users.ui.users')
      .config(configureApplication);

  function configureApplication($routeProvider) {
    $routeProvider
        .when('/users/list', {
          title: 'Users list',
          templateUrl: '/js/users/partials/list.html',
          controller: 'UsersListCtrl'
        })

        .when('/users/show/:userId', {
          title: 'Show user',
          templateUrl: '/js/users/partials/show.html',
          controller: 'UsersShowCtrl'
        })

        .when('/users/create', {
          title: 'Create user',
          templateUrl: '/js/users/partials/edit.html',
          controller: 'UsersCreateCtrl'
        })

        .when('/users/update/:userId', {
          title: 'Update user',
          templateUrl: '/js/users/partials/edit.html',
          controller: 'UsersUpdateCtrl'
        });
  }

})(angular);
