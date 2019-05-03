var fs = require('fs');

fs.mkdirSync('node');
fs.writeFileSync('./node/todelete.txt' , "jkdfnhjdshckjsn");

fs.unlink('./node/todelete.txt' , () => {
	fs.rmdirSync('node');	
});
