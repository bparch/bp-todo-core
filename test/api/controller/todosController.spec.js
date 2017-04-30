var should = require('should');
var sinon = require('sinon');
var todosController = require('../../../api/controllers/todosController');
var todoModel = require('../../../api/models/todosModel');

describe('getAllTodos', function () {

    it('successScenario', function () {
        let todoMock = sinon.mock(todoModel);
        todoMock
            .expects('find')
            .yields(null, 'TODOS');

        todoModel.find(function (error, result) {
            todoMock.verify();
            todoMock.restore();
            should.equal('TODOS', result, 'Test fails due to unexpected result');
            done();
        })
    });

});