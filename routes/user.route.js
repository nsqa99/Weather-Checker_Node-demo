const express = require('express');
const routeUser = express.Router();
const weatherController = require('../controllers/weather.controller');
const userController = require('../controllers/user.controller');
const authLogin = require('../controllers/auth.controller');
const authSignup = require('../validate/signup.validate');

routeUser.get('/home', authLogin.requireAuth, userController.getHome);

routeUser.get('/signup', userController.getSignup);

routeUser.post('/signup', authSignup.authSign , userController.postSignup);


routeUser.get('/weather', authLogin.requireAuth, weatherController.getWeather);


module.exports = routeUser;