'use strict';

module.exports = function (app) {
  // Root routing
  var core = require('../controllers/core.server.controller');
    
  // accept POST request ADDED BY ME
  app.post('/api/v1/event', function (req, res) {
    var jsonString = JSON.stringify(req.body);
    var eventType = JSON.stringify(req.body.EventType);
    var eventValue = JSON.stringify(req.body.EventValue);
    var timeStamp = JSON.stringify(req.body.TimeStamp);
    res.send('Got a POST request: ' + jsonString +'   '+
     eventType +'   '+ eventValue +'   '+ timeStamp);
  });
  
  app.post('/api/v1/user/auth/checkEmail', function (req, res) {
    
  });
  
  app.post('/api/v1/user/auth/signIn', function (req, res) {
    
  });
  
  app.post('/api/v1/user/auth/createAccount', function (req, res) {
    
  });
  
  app.post('/api/v1/user/edit/email', function (req, res) {
    
  });
  
  app.post('/api/v1/user/edit/name', function (req, res) {
    
  });
  
  app.post('/api/v1/user/edit/password', function (req, res) {
    
  });
  
  app.post('/api/v1/user/edit/picture', function (req, res) {
    
  });
  
  app.post('/api/v1/user/get/email', function (req, res) {
    
  });
  
  app.post('/api/v1/user/get/name', function (req, res) {
    
  });
  
  app.post('/api/v1/user/get/picture', function (req, res) {
    
  });
  
  app.post('/api/v1/user/pair/watch', function (req, res) {
    
  });
  
  app.post('/api/v1/user/pair/subscribers', function (req, res) {
    
  });
  
  app.post('/api/v1/user/unpair/watch', function (req, res) {
    
  });
  
  app.post('/api/v1/user/unpair/subscribers', function (req, res) {
    
  });
  
  app.post('/api/v1/event/postEvent', function (req, res) {
    
  });
  
  app.post('/api/v1/event/changeStatus', function (req, res) {
    
  });
  

  // Define error pages
  app.route('/server-error').get(core.renderServerError);

  // Return a 404 for all undefined api, module or lib routes
  app.route('/:url(api|modules|lib)/*').get(core.renderNotFound);

  // Define application route
  app.route('/*').get(core.renderIndex);
};
