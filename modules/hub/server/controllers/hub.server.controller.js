'use strict';

/**
 * Module dependencies.
 */
var path = require('path'),
  mongoose = require('mongoose'),
  Hub = mongoose.model('Hub'),
  errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller'));