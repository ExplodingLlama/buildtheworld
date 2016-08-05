'use strict';

const app = require('./app');
const https = require('https');

app.set('port', process.env.OPENSHIFT_NODEJS_PORT || 3022);
app.set('ip', process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1");

const port = app.get('port');
const ip = app.get('ip');

const server = https.createServer({
}, app).listen(port, ip);


server.on('listening', () =>
  console.log(`Feathers application started on ${ip}:${port}`)
);