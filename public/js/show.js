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
	


	// using history
	$('#history').on('click', function (e){
		console.log('history');
	});

	$('#saveWorkout').on('click', function (e){
		e.preventDefault();
		var date = $('form').eq(0).serialize();
  		$(".form-vertical").each(function () {
    	var id = $(this).data("id");
    	var otherInfo = $(this).serialize();

   });
			

});

	$('.edit').on('click', function (e){
		var path = (window.location.pathname);
		var pathSplit = path.split('/')[2];
		console.log(pathSplit);
		var currentName = $('#current-name').html('<input class="edit-current-name"></input>');
		var currentDescription = $('#current-description').html('<input class="edit-current-description"></input>');
		console.log(currentName);
		console.log(currentDescription);


		$('.save').on('click', function (e) {
			e.preventDefault();
			var newName = $('.edit-current-name').val();
			var newDescription = $('.edit-current-description').val();
			console.log(newName);
			console.log(newDescription);

			$.ajax({
				method: 'PUT',
				url: '/api/workouts',
			    data: { name : newName, description: newDescription},
			    success: function () {
			    	console.log('edit worked');
			    }

			});
		
		});


	});

	


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