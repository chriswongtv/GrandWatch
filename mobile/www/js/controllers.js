angular.module('grandwatch.controllers', [])

.controller('FeedCtrl', function($scope, $ionicPopover, feed) {

  $ionicPopover.fromTemplateUrl('templates/setting-popover.html', {
    scope: $scope
  }).then(function(popover) {
    $scope.popover = popover;
  });

  $scope.openPopover = function($event) {
    $scope.popover.show($event);
  };
  $scope.closePopover = function() {
    $scope.popover.hide();
  };

  var EventType = {
    BREAKFAST: 0,
    LUNCH: 1,
    DINNER: 2,
    GROCERIES: 3,
    MEDICATION: 4,
    NAP: 5,
    HELP: 6,
    NONE: -99
  };

  //toolkit
  function NetworkingOperations(){}

  NetworkingOperations.prototype.sendMessage = function (){
    //todo send data
  }

  NetworkingOperations.prototype.getMessage = function (person, eventCount){
    var url = 'http://personatestuser.org/email';
    $.getJSON(url, function(data) {
      console.log(data);
    })

    //todo get data from the server
  }
//**************EVENT CLASS BEGIN**************//

  //constructor
  function Event(inputType, inputValue, inputTimeStamp){
    this.eventType = inputType;
    this.eventValue = inputValue;
    this.timeStamp = inputTimeStamp;
  }
//**************EVENT CLASS END**************//

//**************USER ACCOUNT CLASS BEGIN**************//

  //constructor
  function UserAccount(inputUsername){

    this.username = inputUsername;
  }

  UserAccount.prototype.watchList = [];
  UserAccount.prototype.watchListCount = 0;

  //functions
  UserAccount.prototype.getWatchList = function(){
    return this.watchList;
  };

  UserAccount.prototype.addPersonToWatch = function(inputPerson){
    this.watchList.push(inputPerson);
    this.watchListCount++;
  };

  UserAccount.prototype.setUsername = function(inputName){
    this.userName = inputName;
  };

  UserAccount.prototype.getUsername = function(){
    return userName;
  };
//**************USER ACCOUNT CLASS END**************//

//**************PERSON CLASS BEGIN**************//

  //constructor
  function Person(inputId){
    this.uniqueIdentifier = inputId;
  }
  Person.prototype.eventLog = [];
  Person.prototype.eventCount = 0;

  //functions
  Person.prototype.setUniqueIdentifier = function(inputId){
    this.uniqueIdentifier = inputId;
  };

  Person.prototype.addEvent = function(inputEvent){
    this.eventLog.push(inputEvent);
    this.eventCount++;
  };

  Person.prototype.getUniqueIdentifier = function(){
    return uniqueIdentifier;
  };

  Person.prototype.getEventLog = function(){
    return eventLog;
  };

  Person.prototype.getEventCount = function(){
    return eventCount;
  };
//**************PERSON CLASS END**************//
   
});