var http = require('http');
var fs = require('fs');

var server = http.createServer((req, res) => {
	res.writeHead(200, {'Content-Type' : 'application/json'});

	var jsonObj = {
		name : 'akshat',
		surname : 'shukla',
		age : 18
	};

	res.end(JSON.stringify(jsonObj));

}).listen(2000);

console.log("Server started on http://127.0.0.1:8080");