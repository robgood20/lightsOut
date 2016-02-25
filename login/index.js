var express = require('express');
var bodyParser = require('body-parser');
var server = express();
var port = 3001;
var fakeDB = {
    users: []
}

server.use(express.static(__dirname + '/public'));
server.use(bodyParser.json());

server.post('/login', function (req, res) {
    // loop through users in fake db and if users e-mail is found
    // check if the userpassword === req.body.password
    var clientCreds = req.boby
    var currentUser = fakeDB.users
    for (var i = 0; i < fakeDB.users.length; i++){
        if (currentUser.userName === clientCreds.userName) {
            if (currentUser.passowrd === clientCreds.password) {
                res.Send(currentUser);
            } else {
                return res.send({ error: 'Invalid Password' })
            }
        }
    }

    if (currentUser.email === clientCreds.email) {
        if (currentUser.email === clientCreds.emaill{
            if (currentUser.passowrd === clientCreds.password {log(req.body)
                console.log('Hey this thing works')
                res.send('Woot it worked!')
            })

server.listen(port, function(){
    console.log('The server is up and running on port:', port)

})