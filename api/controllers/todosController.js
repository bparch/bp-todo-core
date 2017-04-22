'use strict';

var mongoose = require('mongoose');
var Todo = mongoose.model('Todos');

exports.list_all_todos = function (request, response) {
    Todo.find({}, function (error, todos) {
        if (error) {
            response.send(error);
        }
        response.json(todos);
    });
};

exports.create_a_todo = function (request, response) {
    var new_todo = new Todo(JSON.parse(request.rawBody));
    new_todo.save(function (error, todo) {
        if (error) {
            response.send(error);
        }
        response.json(todo);
    });
};

exports.read_a_todo = function (request, response) {
    Todo.findById(request.params.todoId, function (error, todo) {
        if (error) {
            response.send(error);
        }
        response.json(todo);
    });
};

exports.update_a_todo = function (request, response) {
    Todo.findOneAndUpdate(request.params.todoId, JSON.parse(request.rawBody), { new: true }, function (error, todo) {
        if (error) {
            response.send(error);
        }
        response.json(todo);
    });
};

exports.delete_a_todo = function (request, response) {
    Todo.remove({
        _id: request.params.todoId
    }, function (error, todo) {
        if (error) {
            response.send(error);
        }
        response.json({ message: 'Todo ' + request.params.todoId + ' was removed successfully' });
    });
};