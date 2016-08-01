(function (angular) {
  'use strict';

  angular
      .module('users.ui.users')
      .factory('UsersService', UsersService);

  function UsersService($http, UIConfigService) {

    var USERS_SERVICE_URL = UIConfigService.getConfig().service.users.url;

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
