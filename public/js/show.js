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
		// to look at workout history
	// 	var path = (window.location.pathname);
	// 	var pathSplit = path.split('/')[2];	
	// $.ajax({
	// 	method: 'GET',
	// 	url: '/workouts/:id/history',
	// 	data: {id:pathSplit},
	// 	success: function (data) {
	// 		console.log(data);
	// 	}
	// });

	
	// using update
	$('#updateWorkout').on('click', function (e){
		var path = (window.location.pathname);
		var pathSplit = path.split('/')[2];
		console.log(pathSplit);
	});


	// using history
	$('#history').on('click', function (e){
		console.log('history');
	});

	$('#saveWorkout').on('click', function (e){
		e.preventDefault();
		var date = $('#date').val();
		console.log(date);
		var sets = $('#sets').val();
		var reps = $('#reps').val();
		var weightTime = $('#weightTime').val();
		var note = $('#note').val();
		console.log(sets);
		console.log(reps);
		console.log(weightTime);
		console.log(note);



	});



	// // this is to take you to exercise
	// $('.newE').on('click', function (e){
	// 	e.preventDefault();			
	// 	console.log(id);
	// 	// location.href = ('/exercises/' + id);
		
	// });


	$.ajax({
		method: 'GET',
		url: '/api/workouts',
		success: function (data){
		data.forEach( function(i){
			// console.log(i);
			
		});
		}

	});

// window.location.href = '/history';

});