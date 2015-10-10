angular.module('grandwatch.services', [])

.factory('feed', ['$interval', '$http', function($interval, $http) {

  var feed1val;
  var feed2val;

  var grandpa = './img/grandpa.jpg';
  var grandma = './img/grandma.jpg';

  var count = 0;

  // $interval(function() {

  //   // feed - id=1
  //   $http({
  //     method: 'GET',
  //     url: 'http://45.33.109.130:8080/webserv/get?userId=1&fileName=e5'
  //   }).then(function successCallback(response) {
  //     //console.log(response.data);
      
  //     if (feed1val != response.data[0].eventValue) {
  //       angular.element(document.getElementById('feed')).prepend('<div class="item item-avatar"><img src="' + grandpa + '"><h2>Grandpa</h2><p>is ' + getContext(response.data[0].eventType) + ' ' + response.data[0].eventType + '</p><span class="badge badge-balanced" id="time' + count++ + '">0 secs ago</span></div>');
  //       feed1val = response.data[0].eventValue;
  //     }
  //   });

  //   // feed - id=2
  //   $http({
  //     method: 'GET',
  //     url: 'http://45.33.109.130:8080/webserv/get?userId=2&fileName=e5'
  //   }).then(function successCallback(response) {
  //     //console.log(response.data);

  //     if (feed2val != response.data[0].eventValue) {
  //       angular.element(document.getElementById('feed')).prepend('<div class="item item-avatar"><img src="' + grandma + '"><h2>Grandma</h2><p>is ' + getContext(response.data[0].eventType) + ' ' + response.data[0].eventType + '</p><span class="badge badge-balanced" id="time' + count++ + '">0 secs ago</span></div>');
  //       feed2val = response.data[0].eventValue;
  //     }
  //   });

  //   // activity - id=1
  //   $http({
  //     method: 'GET',
  //     url: 'http://45.33.109.130:8080/webserv/get?userId=1&fileName=d1'
  //   }).then(function successCallback(response) {
  //     //console.log(response.data);
  //     if (response.data[0].eventValue == "true")
  //       angular.element(document.getElementById('activity-one')).html('Active Now');
  //     else if (response.data[0].eventValue == "false")
  //       angular.element(document.getElementById('activity-one')).html('Idle');
  //   });

  //   // activity - id=2
  //   $http({
  //     method: 'GET',
  //     url: 'http://45.33.109.130:8080/webserv/get?userId=2&fileName=d1'
  //   }).then(function successCallback(response) {
  //     //console.log(response.data);
  //     if (response.data[0].eventValue == "true")
  //       angular.element(document.getElementById('activity-two')).html('Active Now');
  //     else if (response.data[0].eventValue == "false")
  //       angular.element(document.getElementById('activity-two')).html('Idle');
  //     else
  //       angular.element(document.getElementById('activity-two')).html('Not connected');
  //   });

  //   for (i = 0; i < count; i++) {
  //     var idName = 'time' + i;
  //     var cur = angular.element(document.getElementById(idName)).html();
  //     var index = cur.indexOf(" ");
  //     var sec = parseInt(cur.substring(0,index), 10);
  //     var newTime = sec + 1;
  //     angular.element(document.getElementById(idName)).html(newTime + ' secs ago');
  //   }
  // }, 1000);

  // function getContext(action) {
  //   switch (action) {
  //     case 'HELP':
  //       return 'in need of';
  //     case 'Breakfast':
  //     case 'Lunch':
  //     case 'Dinner': 
  //       return 'having';
  //     case 'Groceries':
  //       return 'buying';
  //     case 'Medicine':
  //       return 'taking';
  //     case 'Exercise':
  //       return 'doing';
  //     case 'Nap':
  //       return 'taking a';
  //   }
  // }

  return null;
}]);