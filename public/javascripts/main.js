'use strict'

$(document).ready(init);
	var $nameInput =$('#nameInput');
	var $userButton =$('#userButton');

function init(){
	$userButton.on('click', handleButtonClick);
	$('h2').click(handleH2click);
}

function handleButtonClick (e){
	console.log('clicked');
	var name = $nameInput.val();
	$.post('/addusers', {name: name})
	.success(function(data){
		console.log("OK!!!")
		setTimeout(function() {
			location.replace('/');
		}, 1000);

	})
	.fail(function(err){
		console.error(err);

	});
}

function handleH2click(e) {
	// e.preventDefault();
	var clickedText = $(e.target).text();
	console.log('clickedText:', clickedText	);
	$.get('./profiles', {name: clickedText})
	.success(function(data){
		
	})
}
