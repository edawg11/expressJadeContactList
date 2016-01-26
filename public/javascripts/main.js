'use strict'

$(document).ready(init);
	var $nameInput =$('#nameInput');
	var $userButton =$('#userButton');

function init(){
	$userButton.on('click', handleButtonClick);
}

function handleButtonClick (e){
	console.log('clicked');
	var name = $nameInput.val();
	$.post('/addusers', {name: name})
	.success(function(data){
		console.log("OK!!!")
		setTimeout(function() {
			location.replace('/');
		}, 2000);

	})
	.fail(function(err){
		console.error(err);

	});
}