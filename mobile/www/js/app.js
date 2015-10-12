angular.module('grandwatch', ['ionic', 'grandwatch.controllers', 'grandwatch.services', 'ngCordova'])

.run(function($ionicPlatform, $cordovaStatusbar, $localstorage) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
    // Prevent bouncing upon tapping on input
    cordova.plugins.Keyboard.disableScroll(true);
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('feed', {
    url: '/feed',
    templateUrl: 'templates/feed.html',
    controller: 'FeedCtrl'
  });

  $urlRouterProvider.otherwise('/feed');
});