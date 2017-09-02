var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Todo = require('./api/models/todosModel');
var routes = require('./api/routes/todosRoutes');

// Using Promises instead of Callbacks
mongoose.Promise = global.Promise;

// Connect to MongoDB server
// mongoose.connect('mongodb://localhost/todo');
mongoose.connect('mongodb://bparch:bparch@cluster0-shard-00-00-6jawd.mongodb.net:27017,cluster0-shard-00-01-6jawd.mongodb.net:27017,cluster0-shard-00-02-6jawd.mongodb.net:27017/todo?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin');

// Set CORS headers
app.use(function (request, response, next) {
    response.header("Access-Control-Allow-Origin", "*");
    response.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    // OPTIONS method returns 200 and receives another method (POST, PUT, DELETE) in succession to proceed
    if (request.method === 'OPTIONS') {
        response.sendStatus(200);
    } else {
        next();
    }

});

// bodyParser will fetch request body and push it to request.body as a buffer
app.use(bodyParser.raw({ type: 'application/json' }));
routes(app);

// Checking for invalid URLs
app.use(function (request, response) {
    if (request.originalUrl.match(/\/todos*/g) === null) {
        response.status(404).send({ url: request.originalUrl + ' is invalid' })
    }
});

// Using error handling middleware
app.use(function (error, request, response, next) {
    console.error(error.stack);
    response.status(500).send(error);
});

app.listen(8080);
console.log('BP-TODO-CORE server is listening on port 8080...');