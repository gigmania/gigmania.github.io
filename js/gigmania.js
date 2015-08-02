
$( document ).ready(function() {

	$('#yummy-txts').on('mouseup touchend', function () {
		console.log('stealth clicker working');
		window.open('http://yummytexts.meteor.com', '_blank');
	});
	$('#rollcall').on('mouseup touchend', function () {
		console.log('stealth clicker working');
		window.open('http://rollcallin.meteor.com', '_blank');
	});
	$('#coderly').on('mouseup touchend', function () {
		console.log('stealth clicker working');
		window.open('http://codeup.herokuapp.com', '_blank');
	});

});