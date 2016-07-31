(function (angular) {
  'use strict';

  angular
      .module('common.auth', [])
      .config(['$httpProvider', function($httpProvider) {
        $httpProvider.interceptors.push(function(AuthService) {
          return {
            request: function(config) {
              if (config.url.startsWith('http://localhost:8080/')) {
                AuthService.addAuthHeader(config);
              }

              return config;
            }
          };
        });
      }]);

})(angular);
