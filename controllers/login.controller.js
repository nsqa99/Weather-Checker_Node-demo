
const User = require('../db/db.model');


module.exports.getLogin = (req, res) => {
    res.render('index');
}

module.exports.postLogin = async (req, res) => {
    const user = await User.find({ email: req.body.email })
    const status = user[0].status;
    res.cookie('status', status, { signed: true });
    res.redirect('/user/home');
}
