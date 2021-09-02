const express = require('express')
const app = express()

app.set('view-engine', 'ejs')

app.get('/home',(req, res) => {
    res.render('home ui/index.html')
})

app.get('/login', (req, res) => {
    res.render('login ui/login.html')
})

app.get('/register', (req, res) => {
    res.render('registration ui/register.html')
})

app.listen(3000)
