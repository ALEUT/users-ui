(function (angular) {
  'use strict';

  angular
      .module('users.ui')
      .run(setupTitle);

  function setupTitle($rootScope) {
    $rootScope.$on('$routeChangeSuccess', function (event, current) {
      if (current && current.$$route) {
        document.title = current.$$route.title || 'Home';
      }
    });
  }

})(angular);
