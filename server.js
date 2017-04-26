var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Todo = require('./api/models/todosModel');
var routes = require('./api/routes/todosRoutes');

// Using Promises instead of Callbacks
mongoose.Promise = global.Promise;

// Connect to the local MongoDB
mongoose.connect('mongodb://localhost/todo');

// bodyParser will fetch request body and push it to request.body as a buffer
app.use(bodyParser.raw({ type: 'application/json' }));
routes(app);

// This is error handling mechanism
app.use(function (request, response) {
	let validRoute = new RegExp('\/todos*');
	if (request.originalUrl !== validRoute) {
		response.status(404).send({ url: request.originalUrl + ' is invalid' })
	}
});

app.use(function (error, request, response, next) {
	console.error(error.stack);
	response.status(500).send(error);
});

app.listen(8001);
console.log('Server is listening on port 8001...');