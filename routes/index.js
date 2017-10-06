var express = require('express');
var router = express.Router();
var nude = require('nude');
 
/* GET home page. */
router.get('/', function(req, res, next) {
	nude.scan(__dirname + '/main.jpg', function(res1) {
	  console.log('Contains nudity: ' + res1);
	    res.render('index', { title: "Contains nudity " + res1 });
	});
});

module.exports = router;
