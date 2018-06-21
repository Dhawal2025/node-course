var express = require('express');
// var moment = require('moment');
var app = express();

app.get('/', function(req, res) {
    res.send('HTTP ESP8266 Test Server')
});

app.use('/ultrasonic', function (req, res) {
    // var t = moment.duration(parseInt(req.param('uptime')), 'milliseconds')
    var read = req.param('read');
    console.log("Distance:"+read+" cm");
    res.send("You are alive!");
});

app.listen(8080);