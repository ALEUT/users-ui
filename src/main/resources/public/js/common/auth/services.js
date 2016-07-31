(function (angular) {
  'use strict';

  angular
      .module('common.auth')
      .factory('AuthService', AuthService);

  function AuthService() {
    var username;
    var password;

    return {
      setCredentials: function (user, passwd) {
        username = user;
        password = passwd;
      },

      addAuthHeader: function (config) {
        config.headers.Authorization = 'Basic ' + btoa(username + ':' + password);
      }
    };
  }

})(angular);
