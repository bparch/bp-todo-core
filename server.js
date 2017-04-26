var express = require('express');
var app = express();
var mongoose = require('mongoose');
var Todo = require('./api/models/todosModel');
var bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/todo');

// bodyParser will fetch request body and push it to request.body as a buffer
app.use(bodyParser.raw({ type: 'application/json' }));

// This is error handling mechanism
app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

var routes = require('./api/routes/todosRoutes');
routes(app);

app.listen(8001);
console.log('Server is listening on port 8001...');