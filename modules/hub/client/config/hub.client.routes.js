'use strict';

// Setting up route
angular.module('hub').config(['$stateProvider',
  function ($stateProvider) {
    // Articles state routing
    $stateProvider
      .state('hub', {
        abstract: true,
        url: '/',
        template: '<ui-view/>'
      });
  }
]);