'use strict';

/**
 * Module dependencies.
 */
var articlesPolicy = require('../policies/articles.server.policy'),
  articles = require('../controllers/articles.server.controller');

module.exports = function (app) {
  // Articles collection routes
  app.route('/api/articles').all(articlesPolicy.isAllowed)
    .get(articles.list)
    .post(articles.create);

  // Single article routes
  app.route('/api/articles/:articleId').all(articlesPolicy.isAllowed)
    .get(articles.read)
    .put(articles.update)
    .delete(articles.delete);
    
  // accept POST request ADDED BY ME
  app.post('/api/v1/events', function (req, res) {
    var jsonString = JSON.stringify(req.body);
    res.send('Got a POST request: ' + jsonString);
    var eventType = JSON.stringify(req.body.EventType);
    var eventValue = JSON.stringify(req.body.EventValue);
    var timeStamp = JSON.stringify(req.body.TimeStamp);
  });

  // Finish by binding the article middleware
  app.param('articleId', articles.articleByID);
};
