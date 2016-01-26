var express = require('express');
var router = express.Router();
var fs = require("fs");

/* GET home page. */
router.get('/', function(req, res, next) {
	fs.readFile('./data/users.json', function(err, data){
		var arr = JSON.parse(data);
		console.log('arr:', arr)
    res.render('addusers', { title: 'Add User', data: arr });
		
	})
});

router.post('/', function(req, res) {
	fs.readFile('./data/users.json', function(err, data) {
		if(err)return res.status(400).send(err);
		var arr = JSON.parse(data);
		console.log('req.body:', req.body)
		var name = req.body.name;
		arr.push({name: name});
		fs.writeFile('./data/users.json', JSON.stringify(arr), function(err) {
			if(err) return res.status(400).send(err);
			res.send('name received.\n')
		})
	})
})

module.exports = router;
