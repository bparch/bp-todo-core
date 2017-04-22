'use strict';
module.exports = function (app) {
    var todos = require('../controllers/todosController');

    // API Routes
    app.route('/todos')
        .get(todos.list_all_todos)
        .post(todos.create_a_todo);

    app.route('/todos/:todoId')
        .get(todos.read_a_todo)
        .put(todos.update_a_todo)
        .delete(todos.delete_a_todo);
};