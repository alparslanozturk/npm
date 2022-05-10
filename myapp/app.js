/*
https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction
 https://expressjs.com/en/starter/hello-world.html
*/

const express = require('express')
const uyg = express()
const port = 3000

// https://expressjs.com/en/resources/middleware/morgan.html
const morgan = require('morgan')
uyg.use(morgan('dev'))
console.log('dev secilmiştir.')

const fs = require('fs')
const path = require('path')
var erisimLogAkim = fs.createWriteStream(path.join(__dirname, 'access.log'),{flags: 'a'})
uyg.use(morgan('combined', { stream: erisimLogAkim }))
console.log('dosaya secilmiştir.')

// statik
uyg.use(express.static('public'))
uyg.use(express.static('files'))
uyg.use('dosyalar', express.static('dosyalar'))
const yol = require('path')
uyg.use('hacker', express.static(yol.join(__dirname, 'public')))


uyg.get('/', function(req, res) {
  res.send('merhaba dünaya...')
});

uyg.get('/test', function(req, res){
  res.send('testing...')
  // morgan.log('testing istek geldi.')
})

uyg.listen(port, function() {
  console.log(`Örnek express uyg ${port} portunu dinliyor.`)
});
