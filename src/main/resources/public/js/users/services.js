(function (angular) {
  'use strict';

  angular
      .module('users.ui.users')
      .factory('UsersService', UsersService);

  function UsersService($http) {

    var USERS_SERVICE_URL = "http://localhost:8080/users";

    return {
      list: function () {
        return $http.get(USERS_SERVICE_URL);
      },

      get: function (userId) {
        return $http.get(USERS_SERVICE_URL + '/' + userId);
      },
      
      create: function (user) {
        return $http.post(USERS_SERVICE_URL, user);
      },

      update: function (user) {
        return $http.put(USERS_SERVICE_URL, user);
      },

      delete: function (userId) {
        return $http.delete(USERS_SERVICE_URL + '/' + userId);
      }
    };
  }

})(angular);
