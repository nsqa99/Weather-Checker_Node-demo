const users = [
    {
        email: 'nguyensyquanganh@gmail.com',
        password: '12022020'
    }
];

module.exports.getLogin = (req, res) => {
    res.render('index');
}

module.exports.postLogin = (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    if (email === users[0].email && password === users[0].password) {
        res.redirect('/user/home');
    } else {
        const error = 'Wrong email address or password';
        res.render('index', {
            err: error,
            email: email
        })
    }
}