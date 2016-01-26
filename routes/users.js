var express = require('express');
var router = express.Router();
var fs = require('fs');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', function(req, res, next) {
	console.log('req.body:', req.body);
  res.send();
});

module.exports = router;
