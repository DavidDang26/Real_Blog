const express = require('express');
const route = express.Router();
const blogController = require('../app/controllers/blogController')

route.get('/', blogController.index);
route.get('/:name',blogController.show);
route.post('/:name', blogController.sendComment);
route.get('/tags/:tag',blogController.showTag);

module.exports = route;