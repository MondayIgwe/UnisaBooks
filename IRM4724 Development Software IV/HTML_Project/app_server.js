var express = require('express');
var mysql = require('mysql');

mysql.createConnection({
    host: '127.0.0.1',
    user: 'mobileappbook',
    password: 'xxxxxxxxxx',
    database: 'mobileappbook',
    connectTimeout: 10000
});

database.connect();

var allowCrossDomain = function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET POST PUT DELETE');

    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
}

var app = express();
app.use(express.bodyParser());
app.use(allowCrossDomain);

process.on('SIGTERM', function (){
    console.log('shuting down');
    database.end();
    app.close();
});

var server =app.listen(3000, function(){
    console.log('Listening to port %d', server.address().port);
})
