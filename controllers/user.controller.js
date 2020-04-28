const md5 = require('md5');
const mongoose = require('mongoose');
const User = require('../db/db.model');

module.exports.getHome = (req, res) => {
    res.render('./home/index');
    
};

module.exports.getSignup = (req, res) => {
    res.render('./sign-up/index');
}

module.exports.postSignup = async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const rePassword = req.body.rePassword;
    res.locals.userEmail = email;
    if (rePassword !== password) {
        const error = 'Please type in the password correctly!';
        res.render('sign-up/index');
        return;
    }

    let signer = new User({
        email: email,
        password: md5(password),
        status: ''
    });
    signer.status = signer._id.toString();
    await signer.save();
    res.redirect('/user/home');
}
