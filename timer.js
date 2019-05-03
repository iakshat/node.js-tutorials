var http = require("http");

console.log("Server running on http://127.0.0.1:8080");

setTimeout( () => {
	console.log("3 seconds have passed");
} , 3000);

var time = 0;
setInterval( (err, res) => {
	time += 2;
	console.log(time + " secs have passed");
}, 2000);

var server = http.createServer((req, res) =>{

});

server.listen(8080);