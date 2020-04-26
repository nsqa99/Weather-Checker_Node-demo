
module.exports.getLogin = (req, res) => {
    res.render('index');
}

module.exports.postLogin = (req, res) => {
    res.redirect('/user/home');
}