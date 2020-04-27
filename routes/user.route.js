const express = require('express');
const routeUser = express.Router();
const weatherController = require('../controllers/weather.controller');
const userController = require('../controllers/user.controller');
const authLogin = require('../controllers/auth.controller');

routeUser.get('/home', authLogin.requireAuth, userController.getHome);

routeUser.get('/signup', userController.getSignup);

routeUser.post('/signup', userController.postSignup);


routeUser.get('/weather', authLogin.requireAuth, weatherController.getWeather);


module.exports = routeUser;