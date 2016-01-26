var express = require('express');
var router = express.Router();
var fs = require("fs");

/* GET home page. */
router.get('/', function(req, res, next) {
	fs.readFile('./data/users.json', function(err, data){
		var arr = JSON.parse(data);
  res.render('index', { title: 'User Directory', data: arr });
	});
});


module.exports = router;


