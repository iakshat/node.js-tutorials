var http = require('http');
var fs = require('fs');

var readStream = fs.createReadStream('file.txt');
readStream.setEncoding('utf8');

var writeStream = fs.createWriteStream('stream.txt');

var data = '';

readStream.on('data', (str) => {
	 console.log('-------------------------');
	 //console.log(str);
	 //data += str;
	 writeStream.write(str);
	 writeStream.write('-------------------');

});

readStream.on('end', () => {
	console.log('----------End_----------');
	//console.log(data);
});

var server = http.createServer((req, res) => {
	res.end("Hola!");

}).listen(2000);

console.log("Server started on http://127.0.0.1:8080");