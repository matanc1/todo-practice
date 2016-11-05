/**
 * Created by matan on 05/11/2016.
 */

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/static', express.static('bin'));

app.listen(3000, function(){
    console.log("Listening on 3000");
});

app.post('/', function(req, res){
    let filePath = path.resolve('bin/index.html');
    console.log(filePath);
    res.sendFile(filePath);
});

app.get('/get/data', function(req,res){
    res.send(JSON.stringify({todoItems:[{index: 1, content: "1"},{index: 2, content: "2"},{index: 3, content: "3"}]}));
});

app.post('/send/data', function(req,res){
    var data = req.body;
    console.log(data);
});