const express = require('express')
const app = express()
const path= require('path')
const router = express.Router();
const bcrypt = require('bcrypt')

app.use(express.urlencoded({ extended: false}))

app.use(express.static(__dirname + 'public'));
//app.use(express.static(__dirname + '/productivity'));
//app.use(express.static(__dirname + '/login'));
//app.use(express.static(__dirname + '/register'));

//app.use('/LEARN-CS', express.static('home'));

router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/home.html'));
    //__dirname: It will resolve to project folder
});

router.get('/productivity', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/productivity.html'));
});

router.get('/login', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/login.html'));
});

router.get('/register', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/register.html'));
});

//add router
app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');
