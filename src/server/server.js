/**
 * Created by matan on 05/11/2016.
 */

const express = require('express');
const app = express();


app.listen(3000, function(){
    console.log("Listening on 3000");
});


app.get('/', function(req, res){
    res.send("Hello World");
});