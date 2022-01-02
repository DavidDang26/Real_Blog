const express = require('express');
const route = express.Router();
const scriptController = require('../app/controllers/scriptController')

route.post('/', scriptController.index);

module.exports = route;