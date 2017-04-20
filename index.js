var express = require('express');
var app = express();
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/todo');
var db = mongoose.connection;

app.get('/', function(request, response){
    response.send('TODO server is responding!');
});

app.listen(8001);
console.log('Running on port 8001...');