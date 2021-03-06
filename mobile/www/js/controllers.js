angular.module('grandwatch.controllers', [])

.controller('FeedCtrl', function($scope, $ionicPopover, $ionicModal, $localstorage, feed) {

  $scope.api = 'http://45.33.109.130:3000';

  // Initialize "Setting" popover page
  $ionicPopover.fromTemplateUrl('templates/setting-popover.html', {
    scope: $scope
  }).then(function(popover) {
    $scope.popover = popover;
  });

  // Displays "Setting" popover
  $scope.openPopover = function($event) {
    $scope.popover.show($event);
  };

  // Closes "Setting" popover
  $scope.closePopover = function() {
    $scope.popover.hide();
  };

  // Initializes login modal
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal
    // Checks if cookie exist, if not then show login modal
    if ($localstorage.get('uid', 'null') == 'null')
      $scope.modal.show();
  })  

  // Displays login modal
  $scope.openModal = function() {
    $scope.modal.show()
  }

  // Closes login modal
  $scope.closeModal = function() {
    $scope.modal.hide();
  };

  // Destroys login modal upon finish
  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });

  $scope.feed = [{name: 'Grandpa', picture: './img/grandpa.jpg', action: 'is having breakfast', time: '2 hours ago'},{name: 'Grandma', picture: './img/grandma.jpg', action: 'is sleeping', time: '11 hours ago'}];

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
  // Logout function
  $scope.logout = function() {
    // Sets UID cookie to 'null'
    $localstorage.set('uid', 'null');
    // Displays login modal
    $scope.openModal();
    // Closes "Setting" popover
    $scope.closePopover();
  }
})

.controller('LoginCtrl', function($scope, $localstorage, $ionicLoading, $ionicPopup, $http) {
  // Check if email exists in database
  $scope.checkEmail = function(input_email) {
    $ionicLoading.show({template: '<ion-spinner icon="spiral" class="spinner-light"></ion-spinner><br>Loading...'});

    // Set flag to true 
    $scope.hide = true;

    $http({
      method: 'POST',
      url: $scope.api + '/api/v1/user/auth/checkEmail',
      data: { email: input_email }
    }).then(function successCallback(response) {
      // If email matches then display password field
      if (response.data == true) {
        angular.element(document.querySelector('#login-form')).css('margin-top','20%');
        $scope.isUser = true;
      }
      else if (response.data == false) {
        // Otherwise, display account creation form
        angular.element(document.getElementById('title')).text("CREATE ACCOUNT");
        angular.element(document.querySelector('#login-form')).css('margin-top','10%');
        $scope.isNotUser = true;
      }
      else
        $scope.hide = false;
    }, function errorCallback(response) {
      console.log(JSON.stringify(response));
    });

    $ionicLoading.hide();
  }

  // Sign in function
  $scope.signIn = function(input_email, input_password) {
    // Displays loading spinner
    $ionicLoading.show({template: '<ion-spinner icon="spiral" class="spinner-light"></ion-spinner><br>Signing in...'});
    
    $http({
      method: 'POST',
      url: $scope.api + '/api/v1/user/auth/signIn',
      data: { email: input_email, password: input_password }
    }).then(function successCallback(response) {
      if (response.data.success == 'true') {
        console.log('Login successful. UID: ' + response.data.uid);
        // If login successful, store the UID returned from database
        $localstorage.set('uid', response.data.uid);
        // Closes the loading spinner
        $ionicLoading.hide();
        // Closes the login modal
        $scope.closeModal();
      }
      else {
        // If login failed, display popup with error message
        console.log("Login Failed!", error);
        var errorPopup = $ionicPopup.alert({
          title: 'Login Failed',
          template: error
        });
        // Closes the loading spinner
        $ionicLoading.hide();
      }
    })
  }

  // Account creation function
  $scope.createAccount = function(input_email, input_password, input_name) {
    $ionicLoading.show({template: '<ion-spinner icon="spiral" class="spinner-light"></ion-spinner><br>Creating account...'});
    
    // Attempt to create user in database from user's input
    $http({
      method: 'POST',
      url: $scope.api + '/api/v1/user/auth/createAccount',
      data: { email: input_email, password: input_password, name: input_name }
    }).then(function successCallback(response) {
      if (response.data.success == 'true') {
        console.log("Successfully created user account with uid:", userData.uid);
        // If account creation successful, close login modal
        $scope.closeModal();
      }
      else
        console.log("Error creating user:", error);
    })

    $ionicLoading.hide();
  }
});
