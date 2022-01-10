const express = require('express');
const route = express.Router();
const blogController = require('../app/controllers/blogController')

route.get('/', (req,res) => {
    res.render('about');
});

module.exports = route;