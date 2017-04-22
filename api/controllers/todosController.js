'use strict';

var mongoose = require('mongoose');
var Todo = mongoose.model('Todos');

exports.getAllTodos = function (request, response) {
    Todo.find({}, function (error, todos) {
        if (error) {
            response.send(error);
        }
        response.json(todos);
    });
};

exports.addTodo = function (request, response) {
    var new_todo = new Todo(JSON.parse(request.rawBody));
    new_todo.save(function (error, todo) {
        if (error) {
            response.send(error);
        }
        response.json(todo);
    });
};

exports.getTodo = function (request, response) {
    Todo.findById(request.params.todoId, function (error, todo) {
        if (error) {
            response.send(error);
        }
        response.json(todo);
    });
};

exports.modifyTodo = function (request, response) {
    Todo.findOneAndUpdate({_id: request.params.todoId}, JSON.parse(request.rawBody), { new: true }, function (error, todo) {
        if (error) {
            response.send(error);
        }
        response.json(todo);
    });
};

exports.deleteTodo = function (request, response) {
    Todo.remove({
        _id: request.params.todoId
    }, function (error, todo) {
        if (error) {
            response.send(error);
        }
        response.json({ message: 'Todo ' + request.params.todoId + ' was removed successfully' });
    });
};