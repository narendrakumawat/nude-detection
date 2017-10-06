# Nudity

Node.js nudity detector based on Nude.js

## Installation

```
$ npm install nudity
```

## Example

```
var nudity = require('nudity');

var imagePath = '/path/to/image.jpg';

nudity.scanFile(imagePath, function(err, result) {
  console.log(result + ' = ' + imagePath);
});
```

## API

### scanFile(imagePath, callback)

Scans the file given by `imagePath`. `callback` returns `err` and `result`. `result` of true means nudity detected, false means not.

### scanData(data, callback)

Scans the contents (of a file) given by `data`. `callback` returns `err` and `result`. `result` of true means nudity detected, false means not.


## Test

```
node ./test/test.scanFile.js [imagePath]
node ./test/test.scanData.js [imagePath]
```

