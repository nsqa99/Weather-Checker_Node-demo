const md5 = require('md5');
const User = require('../db/db.model');

module.exports.postLogin = async (req, res, next) => {
    const email = req.body.email;
    const password = md5(req.body.password);
    
    let user = await User.find( { email: email, password: password} );
    if (!user[0]) {
        const error = 'Wrong email address or password';
        res.render('index', {
            err: error,
            email: email
        });
        return; 
    }
    next();
        

}