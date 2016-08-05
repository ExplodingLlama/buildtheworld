'use strict';

var app = require('./app');
var https = require('https');

app.set('port', process.env.OPENSHIFT_NODEJS_PORT || 3022);
app.set('ip', process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1");

var port = app.get('port');
var ip = app.get('ip');

var server = https.createServer({}, app).listen(port, ip);

app.setup(server);

server.on('listening', function () {
  return console.log('Feathers application started on ' + ip + ':' + port);
});