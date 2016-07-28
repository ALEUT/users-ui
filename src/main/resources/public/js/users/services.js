(function (angular) {
  'use strict';

  angular
      .module('users.ui.users')
      .factory('UsersService', UsersService);

  function UsersService($http) {

    var USERS_SERVICE_URL = "http://localhost:8080/users";

    return {
      list: function () {
        return $http({
          url: USERS_SERVICE_URL,
          method: 'GET'
        });
      },

      get: function (userId) {
        return $http({
          url: USERS_SERVICE_URL + '/' + userId,
          method: 'GET'
        });
      },
      
      create: function (user) {
        return $http({
          url: USERS_SERVICE_URL,
          method: 'POST',
          data: user
        });
      },

      update: function (user) {
        return $http({
          url: USERS_SERVICE_URL,
          method: 'PUT',
          data: user
        });
      },

      delete: function (userId) {
        return $http({
          url: USERS_SERVICE_URL + '/' + userId,
          method: 'DELETE'
        });
      }

    };
  }

})(angular);
