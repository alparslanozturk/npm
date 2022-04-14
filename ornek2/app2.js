'use strict';
const express = require('express')
const app = express();
const router = express.Router();

router.route('/')
    .all(function(req,res,next){
        console.log('sayfa yuklendi...');
        next();
    })
    .get(function(req,res){
        res.send('get istegi alinmistir...');
    })
    .post(function(req,res){
        res.send('post istegi alinmistir...');
    });

app.use('/',router);

app.listen(8082, function(){
    console.log('sunucu calisiyor...')
});
