var express = require('express')
var app = express()
var path = require('path')
var pug = require('pug')

app.use(express.static("statics"))
app.set('view engine', 'pug')

app.get('/', function (req, res) {
  res.render(path.join(__dirname+'/homepage.pug'))
})

app.get('/methods', function (req, res) {
    res.render(path.join(__dirname+'/methods.pug'))
})

app.get('/app', function (req, res) {
    res.render(path.join(__dirname+'/app.pug'))
})

app.get('/uses', function (req, res) {
    res.render(path.join(__dirname+'/uses.pug'))
})

app.get('/articles', function (req, res) {
    res.render(path.join(__dirname+'/articles.pug'))
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))