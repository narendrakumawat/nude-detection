var nudity = require('../index');

if (process.argv.length != 3) {
	console.log('Usage: node test.scanFile.js [image]');
	process.exit(1);
}

var imagePath = process.argv[2];

nudity.scanFile(imagePath, function(err, result) {
	if (err)
		return console.log(err);
	
	console.log(result + ' = ' + imagePath);
});