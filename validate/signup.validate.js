const User = require('../db/db.model');

module.exports.authSign = async (req, res, next) => {
    let error = 'Please type in the password correctly!';
    const email = req.body.email;
    const password = req.body.password;
    const rePass = req.body.rePassword;
    res.locals.userEmail = email;
    
    // Wrong reinput
    if (rePass !== password) {
        res.locals.err = error;
        res.render('sign-up/index');
        return;
    }
    //Wrong password pattern
    if (password.length <=6 || password.length >=21) {
        error = 'Password must contain at least 6 characters & at most 20 characters';
        // console.log(1);
        res.locals.err = error;
        res.render('sign-up/index');
        return;
    }
    //Validate type input
    if (!email || !password || !rePass) {
        error = 'Fill in the blank to continue';
        res.locals.err = error;
        res.render('sign-up/index');
        return;
    }
    //Existed email
    let account = await User.findOne( { email: email } );
    
    if (account) {
        error = 'Email has already been used! Please try another one!';
        res.locals.err = error;
        res.render('sign-up/index');
        return;
    }

    

    next();
}