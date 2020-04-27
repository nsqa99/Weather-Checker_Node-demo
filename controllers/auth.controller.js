module.exports.requireAuth = (req, res, next) => {
    if (!req.signedCookies.status) {
        res.redirect('/');
        return;
    }   
    next();
}
