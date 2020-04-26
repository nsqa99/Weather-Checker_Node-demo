const express = require('express');
const bodyParser = require('body-parser');
const routeUser = require('./routes/user.route');
const routeLogin = require('./routes/login.route');


require('dotenv').config();
const app = express();

app.set('view engine', 'pug');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = 3000;

app.listen(port);

app.get('/', (req, res) => {
    res.render('index');
    console.log(`Server running at port ${port}`);
});

app.use('/user', routeUser);
app.use('/login', routeLogin);





