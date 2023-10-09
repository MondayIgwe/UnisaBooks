var bcryp = require('bcrypt');
var express = require('express');
var mongodb = require('mongodb');
bcryp.hash();

let allowCrossDomain = function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*')
}

var app = express();
app.use(express.bodyParser());
app.use(allowCrossDomain);
process.on();
app.post('/saveNewUser', (request, response, str) =>
{
    console.log('New user created');
    var user = request.body.newUser;
    console.log(request.body);

    if(!user.email || !user.newPassword)
    return response.json(400, 'Missing Parameter' + str.String().toLowerCase());
});

var salt = bcryp.genSaltSync(10);
