angular.module('grandwatch.controllers', [])

.controller('FeedCtrl', function($scope, $ionicPopover, $ionicModal, $localstorage, feed) {

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

  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal
    if ($localstorage.get('uid', 'null') == 'null')
      $scope.modal.show();
  })  

  $scope.openModal = function() {
    $scope.modal.show()
  }

  $scope.closeModal = function() {
    $scope.modal.hide();
  };

  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });

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
   
})

.controller('PopoverCtrl', function($scope, $localstorage) {
  $scope.logout = function() {
    $localstorage.set('uid', 'null');
    $scope.openModal();
    $scope.closePopover();
  }
})

.controller('LoginCtrl', function($scope, $localstorage, $ionicLoading) {

  $scope.checkEmail = function(email) {
    $scope.hide = true;

    if (email == "chris@cogifire.com") {
      angular.element(document.querySelector('#login-form')).css('margin-top','20%');
      $scope.isUser = true;
    }
    else {
      angular.element(document.getElementById('title')).text("CREATE ACCOUNT");
      angular.element(document.querySelector('#login-form')).css('margin-top','10%');
      $scope.isNotUser = true;
    }
  }

  $scope.signIn = function(email, password) {
    $ionicLoading.show({template: 'Signing in...'});
    var auth = new Firebase("https://grandwatch.firebaseio.com/users");
    auth.authWithPassword({
      email    : email,
      password : password
    }, function(error, authData) {
      if (error) {
        console.log("Login Failed!", error);
      } else {
        console.log("Authenticated successfully with payload:", authData);
        $localstorage.set('uid', authData);
        $ionicLoading.hide();
        $scope.closeModal();
      }
    });
  }

  $scope.createAccount = function(email, password, name) {
    var auth = new Firebase("https://grandwatch.firebaseio.com/users");
    console.log(email + ' ' + password + ' ' + name);
    auth.createUser({
      email: email,
      password: password,
      name: name
    }, function(error, userData) {
      if (error) {
        console.log("Error creating user:", error);
      } else {
        console.log("Successfully created user account with uid:", userData.uid);
      }
    });
    $scope.closeModal();
  }
});
