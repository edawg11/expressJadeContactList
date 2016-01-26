var express = require('express');
var router = express.Router();
var fs = require("fs");

/* GET home page. */
router.get('/', function(request, response, next) {
  console.log('rec.body.name', request.body.name);
  // var name = JSON.parse(request.body.name);
  // console.log('name:', name);
  response.render('profiles', request.body.name);
 
 
});

module.exports = router;
