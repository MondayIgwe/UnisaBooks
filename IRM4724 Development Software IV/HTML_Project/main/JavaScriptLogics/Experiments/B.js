app = require('express')
app.set('port', process.env.PORT || 8080)

function rawBody(req, res, next){
    req.SetEncoding('utf8');
    req.rawBody = '';
    req.on('data', function (chunk) {
        req.rawBody += chunk;
    });

    req.on('end', () =>{
        next();
    })
}