const express = require('express');
const routeLogin = express.Router();

const loginController = require('../controllers/login.controller');
const loginValidate = require('../validate/login.validate');

routeLogin.get('/', loginController.getLogin);

routeLogin.post('/', loginValidate.postLogin, loginController.postLogin);

module.exports = routeLogin;