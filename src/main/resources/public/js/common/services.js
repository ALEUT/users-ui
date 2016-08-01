(function (angular) {
  'use strict';

  angular
      .module('common')
      .factory('UIConfigService', UIConfigService);

  function UIConfigService() {

    return {
      getConfig: function () {
        return window.UI_CONFIG;
      }
    };
  }

})(angular);
