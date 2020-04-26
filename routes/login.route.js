const express = require('express');
const routeLogin = express.Router();

const loginController = require('../controllers/login.controller');

routeLogin.get('/', loginController.getLogin);

routeLogin.post('/', loginController.postLogin);

module.exports = routeLogin;