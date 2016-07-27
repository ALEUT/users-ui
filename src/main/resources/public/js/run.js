(function (angular) {
  'use strict';

  angular
      .module('users.ui')
      .run(setupTitle);

  function setupTitle($rootScope) {
    $rootScope.$on('$routeChangeSuccess', function (event, current) {
      document.title = current.$$route.title || 'Home';
    });
  }

})(angular);
