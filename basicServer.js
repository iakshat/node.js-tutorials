var http = require('http');
var fs = require('fs');

//var writeStream = fs.createWriteStream('stream.txt');

http.createServer((req, res) => {
	res.writeHead(200, {'Content-Type' : 'text/plain'});
	
	var readStream = fs.createReadStream('text.txt', 'utf8');
	//IF THE STREAM IS TOO BIG THEN IT GOES FOR 
	//DOWNLOAD IN FORM OF TXT FILE
	readStream.pipe(res);

}).listen(2000);

console.log("Server started on http://127.0.0.1:2000");