const users = 
    {
        email: 'nguyensyquanganh@gmail.com',
        password: '12022020',
        status: 'verified'
    };
module.exports.getLogin = (req, res) => {
    res.render('index');
}

module.exports.postLogin = (req, res) => {
    res.cookie('status', users.status, { signed: true });
    res.redirect('/user/home');
}
