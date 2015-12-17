$(document).ready(function() {
	console.log('app.js loaded!');


	// using delete
	$('#deleteWorkout').on('click', function (e){
		console.log('delete');
	});

	
	// using update
	$('#updateWorkout').on('click', function (e){
		console.log('update');
	});


	// using history
	$('#history').on('click', function (e){
		console.log('history');
	});

	$('#saveWorkout').on('click', function (e){
		e.preventDefault();
		var formData = $('#exercise-form form').serialize();
		console.log(formData);

	});

	$.ajax({
		method: 'GET',
		url: '/api/workouts',
		success: function (data){
		data.forEach( function(i){
		$('.test').prepend(data[0].wokoutName);
			console.log(i);
			
		});
		}

	});

// window.location.href = '/history';

});