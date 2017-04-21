var express = require('express');
var app = express();
var mongoose = require('mongoose');
var Todo = require('./api/models/todosModel');
var bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/todo');

//app.use(bodyParser.urlencoded({extended: true}));
/*app.use(bodyParser.raw({ type: 'application/json' }));
app.use(bodyParser.json());*/



app.use(function (req, res, next) {
    var contentType = req.headers['content-type'] || ''
        , mime = contentType.split(';')[0];

    if (mime != 'application/json') {
        return next();
    }

    var data = '';
    req.setEncoding('utf8');
    req.on('data', function (chunk) {
        data += chunk;
    });
    req.on('end', function () {
        req.rawBody = data;
        next();
    });
});


/*app.use(function(request, response){
    response.status(404).send({url: request.originalUrl + 'not found'})    
});*/

var routes = require('./api/routes/todosRoutes');
routes(app);


app.listen(8001);
console.log('Running on port 8001...');