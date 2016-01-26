var express = require('express');
var router = express.Router();
var fs = require("fs");

/* GET home page. */
router.get('/', function(request, response, next) {
  console.log('request:', request.query);
  // var name = JSON.parse(request.body.name);
  // console.log('name:', name);
  response.render('profiles', {name: request.body.name});
 
 
});

module.exports = router;
