var http = require('http');
var events = require('events');
var util = require('util');

var server = http.createServer((req, res) => {
	res.end("Hola!");

}).listen(2000);

var Student = function(name, age, marks){
	this.name = name;
	this.age = age;
	this.marks = marks;
}

util.inherits(Student , events.EventEmitter);

var event = new events.EventEmitter();
var raj = new Student('raj', 19, 89);

raj.on('clicked', function() {
	console.log("recieved");
});

raj.emit('clicked');

console.log("Server started on http://127.0.0.1:8080");

var eventEmitter = new events.EventEmitter();

eventEmitter.on('click', function(n, power) {
	console.log( n+' to power '+power+' is '+ n*n);
});

eventEmitter.emit('click', 5, 2);