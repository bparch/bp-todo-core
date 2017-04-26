'use strict';

var mongoose = require('mongoose');
var Todo = mongoose.model('Todos');

exports.getAllTodos = function (request, response, next) {
	Todo.find({}, function (error, todos) {
		if (error) {
			return next(error);
		}
		response.json(todos);
	});
};

exports.addTodo = function (request, response, next) {
	var new_todo = new Todo(JSON.parse(request.body));
	new_todo.save(function (error, todo) {
		if (error) {
			return next(error);
		}
		response.json(todo);
	});
};

exports.getTodo = function (request, response, next) {
	Todo.findById(request.params.todoId, function (error, todo) {
		if (error) {
			return next(error);
		}
		response.json(todo);
	});
};

exports.modifyTodo = function (request, response, next) {
	Todo.findOneAndUpdate({ _id: request.params.todoId }, JSON.parse(request.body), { new: true }, function (error, todo) {
		if (error) {
			return next(error);
		}
		response.json(todo);
	});
};

exports.deleteTodo = function (request, response, next) {
	Todo.remove({
		_id: request.params.todoId
	}, function (error, todo) {
		if (error) {
			return next(error);
		}
		response.json({ message: 'Todo ' + request.params.todoId + ' was removed successfully' });
	});
};