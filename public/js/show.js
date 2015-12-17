$(document).ready(function() {
	console.log('app.js loaded!');

	

	// using delete
	$('#deleteWorkout').on('click', function (e){
		var path = (window.location.pathname);
		var pathSplit = path.split('/')[2];
		$.ajax({
			method: 'DELETE',
			url: '/api/workouts',
			data: {id:pathSplit},
			success: function () {
				console.log("SUCCESS!!!");
				window.location = 'http://localhost:3000/workouts';
			}
		});
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
			console.log(i);
			
		});
		}

	});

// window.location.href = '/history';

});