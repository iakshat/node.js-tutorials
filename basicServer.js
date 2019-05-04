var http = require('http');
var fs = require('fs');

var server = http.createServer((req, res) => {

	console.log('requested url is: ' +req.url);

	if(req.url === '/' || req.url === '/home'){
		res.writeHead(200, {'Content-Type' : 'text/html'});
		fs.createReadStream('home.html').pipe(res);
	}else{
		res.writeHead(404);
		res.end("404 Page Not FOund");
	}
	
	// res.writeHead(200, {'Content-Type' : 'text/plain'});
	// res.end("Hola!");

}).listen(2000);

console.log("Server started on http://127.0.0.1:8080");