const express = require('express')
const app = express()
const path= require('path')
const router = express.Router();

app.use(express.urlencoded({ extended: false }))
app.use(express.static("home ui"));

router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/home ui/index.html'));
    //__dirname: It will resolve to project folder
});

router.get('/main', function (req, res) {
    res.sendFile(path.join(__dirname + '/to-do-list ui/main.html'));
});

router.get('/login', function (req, res) {
    res.sendFile(path.join(__dirname + '/login ui/login.html'));
});

router.get('/register', function (req, res) {
    res.sendFile(path.join(__dirname + '/register ui/register.html'));
});

//add router
app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');
