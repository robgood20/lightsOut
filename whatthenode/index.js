var express = require('express');
var app = express();
var port = 8080;

app.use(express.static(__dirname+ '/public'));

app.get('/does-it-work', function(req, res){
    res.send('umm yeah, of course!!')
});

app.listen(port, function(){
    console.log('the app is alive and kickin on port:', port)
});