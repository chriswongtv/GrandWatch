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
    
  // accept POST request on the homepage ADDED BY ME
  app.post('/api/events', function (req, res) {
    
    res.send('Got a POST request: '+  JSON.stringify(req.body));
  });

  // Finish by binding the article middleware
  app.param('articleId', articles.articleByID);
};
