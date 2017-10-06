var express = require('express');
var router = express.Router();
var nude = require('nude');
 
/* GET home page. */
const pathPic = '/main.jpg';
router.get('/', function(req, res, next) {
	nude.scan(__dirname + pathPic, function(res1) {
	  console.log('Contains nudity: ' + res1);
	    res.render('index', { title: "Contains nudity " + res1 , path : pathPic });
	});
});

module.exports = router;
