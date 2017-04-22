describe('getAllTodos', function () {
    var todosController = require('./todosController');

    beforeEach(function () {
        var response = [
            {
                "_id": "58fab32c648c552c5889bdc6",
                "title": "Groceries",
                "description": "Buy a lot of fruits",
                "userName": "sumeet",
                "__v": 0,
                "timeStamp": "2017-04-22T01:34:36.462Z"
            },
            {
                "_id": "58fab34b648c552c5889bdc7",
                "title": "Travel",
                "description": "Book flight tickets",
                "userName": "sumeet",
                "__v": 0,
                "timeStamp": "2017-04-22T01:35:07.575Z"
            },
            {
                "_id": "58fab37e648c552c5889bdc8",
                "title": "work",
                "description": "code merge pending on bparch",
                "userName": "ronald",
                "__v": 0,
                "timeStamp": "2017-04-22T01:35:58.572Z"
            },
            {
                "_id": "58fab3ad648c552c5889bdc9",
                "title": "Home",
                "description": "Buy a coffee maker",
                "userName": "sumeet",
                "__v": 0,
                "timeStamp": "2017-04-22T01:36:45.657Z"
            }
        ]
    });

    it('errorScenario', function () {
        let request = null;
        const result = todosController.getAllTodos(request, response);
        expect(result).toBe(error);
    });

    it('successScenario', function () {
        //TODO - write test
    });

});
