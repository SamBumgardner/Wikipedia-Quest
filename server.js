var connect = require('connect');
var http = require('http');
var serveStatic = require('serve-static');

var app = connect();
var serve = serveStatic('./src');
app.use(serveStatic('./src'));

console.log('Starting webserver on http://localhost:8080/');
http.createServer(app).listen(8080);
