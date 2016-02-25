var express = require('express');
var port = 8888;
var server = express();

// we get this from angular app
//     {
//     name: 'jake',
//     body: 'hey whats up guys?',
//     }


var chatroom = [];


server.post('/messeges/new-message', function (req, res) {
    var chatObj = req.body;
    chatroom.push(chatObj);
    res.send('message recieved');
});

server.get('/', function(req, res){
    res.send('you asked for bannanas')
});


server.listen(port, function(){
    console.log('Server is up and running on port:', port);
});
