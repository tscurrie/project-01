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
	

	$('#workout-form').on('submit', function (e){
		e.preventDefault();
		var formData = $(this).serialize();
		var name = $('#workout-name').val();
		var description = $('#description').val();
		var ex1 = $('#ex1').val();
		var ex2 = $('#ex2').val();
		var ex3 = $('#ex3').val();
		var ex4 = $('#ex4').val();
		var ex5 = $('#ex5').val();
		var ex6 = $('#ex6').val();
		var ex7 = $('#ex7').val();
		var ex8 = $('#ex8').val();
		var ex9 = $('#ex9').val();
		var ex10 = $('#ex10').val();
		var ex11 = $('#ex11').val();
		var ex12 = $('#ex12').val();
		var ex13 = $('#ex13').val();
		var ex14 = $('#ex14').val();
		var ex15 = $('#ex15').val();
		
		console.log('form data', formData);
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