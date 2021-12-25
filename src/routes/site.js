const express = require('express');
const route = express.Router();
const siteController = require('../app/controllers/siteController')


route.get('/', siteController.index);

module.exports = route;