var express = require('express');
var path = require('path');
var ParkProvider = require('./parkMongoHandler.js').ParkProvider;
var app = express();

app.set('port', process.env.PORT || 8080)
app.engine();
app.set("view engine", "handlebars");

function rawBody(req, res, next){
    req.setEncoding('utf8');
    req.rawBody = '';
    req.on('data', function(chunk){
        req.rawBody += chunk;
    });

    req.on('end', function(){
        next();
    });

    app.use(express.static(path.join(_dirname, 'public')));


}

var park = new ParkProvider('127.0.0.1', 27017);

app.get('/', function(req, res){
    var context = {
        menuContext: {
            regions: ['Halifx', 'Dartmouth', 'Bedford', 'Lagos'],
            categories: ['Sport $ Activities', 'Kid Friendly']
        },

        helper:{
            addOne: function(value){
                return parseInt(value, 10)+ 1;
            }
        }
        
    }
});
park.findAll()

