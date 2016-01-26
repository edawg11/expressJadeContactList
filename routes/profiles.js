var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(request, response, next) {
  console.log("RBN:", request.body.name);
  response.send({name: request.body.name});
});

router.get('/:user', function(request, response, next) {
  console.log("RBN:", request.params.user);
  response.render('profiles', {name: request.params.user});
});

module.exports = router;
