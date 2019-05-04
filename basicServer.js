var http = require('http');

var server = http.createServer((req, res) => {
	res.writeHead(200, {'Content-Type' : 'text/plain'});
	res.end("Hola!");

}).listen(2000);

console.log("Server started on http://127.0.0.1:8080");