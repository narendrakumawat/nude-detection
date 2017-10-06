var nudity = require('../index');
var fs = require('fs');

if (process.argv.length != 3) {
	console.log('Usage: node test.scanData.js [image]');
	process.exit(1);
}

var imagePath = process.argv[2];

fs.readFile(imagePath, function(err, data) {
	if (err)
		return console.log(err);

	nudity.scanData(data, function(err, result) {
		console.log(result + ' = ' + imagePath);
	});
});
