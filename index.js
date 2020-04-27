const express = require('express');
const bodyParser = require('body-parser');
const routeUser = require('./routes/user.route');
const routeLogin = require('./routes/login.route');
const cookieParser = require('cookie-parser');
const secretGenerator = require('./secretString/secret.generate');


require('dotenv').config();
const app = express();

app.set('view engine', 'pug');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser(secretGenerator.secretStr()));

const port = 3000;

app.listen(port);

app.get('/', (req, res) => {
    if (!req.signedCookies.status) {
        res.render('index');
        return;
    }
    res.render('./home/index');
});

app.use('/user', routeUser);
app.use('/login', routeLogin);





