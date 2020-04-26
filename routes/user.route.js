const express = require('express');
const routeUser = express.Router();
const weatherController = require('../controllers/weather.controller');
const userController = require('../controllers/user.controller');

routeUser.get('/home', userController.getHome);

routeUser.get('/signup', userController.getSignup);

routeUser.post('/signup', userController.postSignup);


routeUser.get('/weather', weatherController.getWeather);


module.exports = routeUser;