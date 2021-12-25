const express = require('express');
const route = express.Router();
const blogController = require('../app/controllers/blogController')

route.get('/', blogController.index);
route.get('/:test',blogController.show);

module.exports = route;