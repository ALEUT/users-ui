(function (angular) {
  'use strict';

  angular
      .module('common.directives', ['ngRoute'])
      .directive('debug', debug);

  function debug($location) {
    return {
      scope: false,
      restrict: 'E',
      link: function (scope, element, attr) {
        scope.debugValueKey = attr.value;
        scope.debugScope = scope;
        scope.debugId = Math.ceil(Math.random() * (10000 - 1));

        var debug = $location.search().debug;

        if (localStorage.getItem('debug') === 'true' && debug) {
          scope.debugOn = false;
          localStorage.removeItem('debug');
        } else if (debug) {
          scope.debugOn = true;
          localStorage.setItem('debug', true);
        } else if (localStorage.getItem('debug') === 'true') {
          scope.debugOn = true;
        }
      },
      template: [
        '<div ng-show="debugOn">',
        '<button style="font-size: 10px;" type="button" class="btn btn-warning btn-xs" data-toggle="collapse" data-target="#debug{{debugId}}">debug</button>',
        '<div style="margin-bottom: 20px;" id="debug{{debugId}}" class="collapse">',
        '<pre>{{debugScope[debugValueKey] | json}}</pre>',
        '</div>',
        '</div>'
      ].join('')
    };
  }

})(angular);
