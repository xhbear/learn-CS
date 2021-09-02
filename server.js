const express = require('express')
const app = express()

app.set('view-engine', 'ejs')

app.get('./',(req, res) => {
    res.render('index.ejs', { name:'Kyle'})
})

app.get('/login', (req, res) => {
    res.render('login ui/login.html')
})

app.get('/register', (req, res) => {
    res.render('registration ui/register.html')
})

app.listen(3000)
