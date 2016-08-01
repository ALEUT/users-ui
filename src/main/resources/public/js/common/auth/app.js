(function (angular) {
  'use strict';

  angular
      .module('common.auth', [])
      .config(['$httpProvider', function($httpProvider) {
        $httpProvider.interceptors.push(function(AuthService, UIConfigService) {
          var url = UIConfigService.getConfig().service.users.url;

          return {
            request: function(config) {
              if (config.url.startsWith(url)) {
                AuthService.addAuthHeader(config);
              }

              return config;
            }
          };
        });
      }]);

})(angular);
