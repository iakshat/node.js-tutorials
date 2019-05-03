var fs = require("fs");

/*
	var str = fs.readFileSync('text.txt', 'utf8');
*/

var str = fs.readFile('text.txt', 'utf8', function(err, data) {
	if(err)
		return console.error(err);

	console.log(data);
});

console.log("file read");

fs.writeFileSync('temp.txt' , str);

fs.unlink('temp.txt');