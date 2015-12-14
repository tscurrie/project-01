$(document).ready(function() {
	console.log('app.js loaded!');

	$.ajax({
		method: 'GET',
		url: ('/api/workouts'),
		success: (function (data){
			console.log('workouts is working');
			console.log(data);
			$('#workouts-placement').prepend(data);
		})
	});
	
	$.ajax({
		method: 'GET',
		url: ('/api/history'),
		success: (function (history){
			console.log('history is working');
		})
	});


	// need to look into making this a function
	// $('#workout-name').on('submit', function (e){
	// 	e.preventDefault();
	// 	var name = $('#workout-name input').val();
	// 	console.log('name: ' + name);
	// $('#description').on('click', function (e){
	// 	e.preventDefault();
	// 	var description = $('#description input').val();
	// 	console.log('description: ' + description);
	// $('#ex1').on('submit', function (e){
	// 	e.preventDefault();
	// 	var ex1 = $('#ex1 input').val();
	// 	console.log('exercise: ' + ex1);
	// $('#ex2').on('submit', function (e){
	// 	e.preventDefault();
	// 	var ex2 = $('#ex2 input').val();
	// 	console.log('exercise: ' + ex2);
	// $('#ex3').on('submit', function (e){
	// 	e.preventDefault();
	// 	console.log('exercise: ' + ex3);
	

	$('.create').on('click', function (e){
		e.preventDefault();
		alert('The new workout, ' + name + ', has the descrition: ' + 
		 description + '. It contains the following exercises, ' +
		ex1);
		$.ajax({
			method: 'POST',
			url: ('/api/workouts'),
			success: (function (stuff){
				console.log('post went through');
				$('#workouts-placement').prepend(stuff);
			})
		});
	
	
	
	});

	// adds more input fields, look into other solutions
	$('#addMore').on('click', function (e){
		e.preventDefault();
		console.log('add-more is working');
		$('.hidden-test').toggle();
	});



});