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

      show: function (userId) {
        return $http({
          url: USERS_SERVICE_URL + '/' + userId,
          method: 'GET'
        });
      }


    };
  }

})(angular);
