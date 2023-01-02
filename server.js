const express = require('express');

var app = express();
var bodyparser = require ('body-parser');
app.use(bodyparser.urlencoded({extended:false}));

app.get('/',function(req,res){
    res.sendFile("public/index.html",{root:__dirname})
});

app.listen(3000);

console.log("Server Running on port 3000");