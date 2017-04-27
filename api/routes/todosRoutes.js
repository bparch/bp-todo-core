module.exports = function (app) {
    var todos = require('../controllers/todosController');

    // API Routes
    app.route('/todos')
        .get(todos.getAllTodos)
        .post(todos.addTodo);

    app.route('/todos/:todoId')
        .get(todos.getTodo)
        .put(todos.modifyTodo)
        .delete(todos.deleteTodo);
};