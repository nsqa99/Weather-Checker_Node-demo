

module.exports.getHome = (req, res) => {
    res.render('./home/index');
    
};

module.exports.getSignup = (req, res) => {
    res.render('./sign-up/index');
}

module.exports.postSignup = (req, res) => {
    res.send('Oops! This feature is still up to date!')
}
