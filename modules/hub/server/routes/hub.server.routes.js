'use strict';

/**
 * Module dependencies.
 */
var hub = require('../controllers/articles.server.controller');

module.exports = function (app) {

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

  // Articles collection routes
  app.route('/api/articles').all(articlesPolicy.isAllowed)
    .get(articles.list)
    .post(articles.create);

  // Single article routes
  app.route('/api/articles/:articleId').all(articlesPolicy.isAllowed)
    .get(articles.read)
    .put(articles.update)
    .delete(articles.delete);

  // Finish by binding the article middleware
  app.param('articleId', articles.articleByID);
};
