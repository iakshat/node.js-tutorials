var http = require('http');
var fs = require('fs');

var stream = fs.createReadStream('file.txt');
stream.setEncoding('utf8');
var data = '';

stream.on('data', (str) => {
	 console.log('-------------------------');
	 console.log(str);
	 data += str;
});

stream.on('end', () => {
	console.log('----------End_----------');
	//console.log(data);
});

var server = http.createServer((req, res) => {
	res.end("Hola!");

}).listen(2000);

console.log("Server started on http://127.0.0.1:8080");