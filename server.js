var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Todo = require('./api/models/todosModel');
var routes = require('./api/routes/todosRoutes');

mongoose.Promise = global.Promise;

// Connect to the local MongoDB
mongoose.connect('mongodb://localhost/todo');

// bodyParser will fetch request body and push it to request.body as a buffer
app.use(bodyParser.raw({ type: 'application/json' }));

// This is error handling mechanism
app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

routes(app);

app.listen(8001);
console.log('Server is listening on port 8001...');