$(document).ready(function() {
	console.log('app.js loaded!');

	// handlebars set up
	var source = $('#workout-template').html();
	var template = Handlebars.compile(source);

	$.ajax({
		method: 'GET',
		url: ('/api/workouts'),
		success: (function (data){
				console.log(data);
				var dataHtml = template({workouts: data});
				console.log(dataHtml);
				$('#workout-list').append(dataHtml);
		})

	});
		$('#workout-list').on('click', '.workout', function (e){
		var id = $(this).data("id");
		location.href=('/workouts/' + id);
		console.log(id);
	    
		// if you want ot have the modal pop up on the workout click
	    // $('#myModal').data('data-id', id);
	    // $('#myModal').modal();

		});

  
		
		// selecotrs for buttons in modals, non-functional att
		// $('#myModal').on('click','#continue', function (e){
		// 	alert('wtf');
		// });

		// $('#update').on('click', function (e){
		// 	alert('update');
		// });
		// $('#delete').on('click', function (e){
		// 	alert('delete');
		// });
		

		// $('')

	// tunely suggestions maybe delete

	// 	}
	// });
	// $.ajax({
	// 	method: 'GET',
	// 	url: '/api/workouts/:workout_id/exercises/:id',
	// 	success: function (data) {
	// 		console.log(data);
	// 	}
	// });
	// $.ajax({
	// 	method: 'GET',
	// 	url: '/api/workouts/:workout_id/exercise',
	// 	success: function (data) {
	// 		console.log(data);
	// 	}
	// });


	// $.ajax({
	// 	method: 'GET',
	// 	url: ('/api/exercises'),
	// 	success: (function (history){
	// 		console.log('exercises is working');
	// 	})
	// });

	// $.ajax({
	// 	method: 'GET',
	// 	url: ('/api/history'),
	// 	success: (function (history){
	// 		console.log('history is working');
	// 	})
	// });
	

	$('#createWorkout').on('click', function (e){
		e.preventDefault();
		// var formData = $('#workout-form form').serialize();
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
		var formData = {name: name, description: description};
		var exercises = [];
		$(".newExercises").each(function(element){
			var x = ($(this).val());
			if (x.length > 0) {  
				exercises.push({name: x});
			}
		});
		formData.exercises = exercises;
		console.log('form data', formData);
		$.ajax({
			method: 'POST',
			url: '/api/workouts',
			data: formData,
			success: function(response){
					console.log(response);
		$('#workout-form form').trigger("reset");
					$('#workout-list').empty();
				$.ajax({
				method: 'GET',
				url: ('/api/workouts'),
				success: (function (data){
						$('#workout-list').trigger("reset");
						var dataHtml = template({workouts: data});
						$('#workout-list').append(dataHtml);

				})
			});
				
			}
		});
	});
	// $('#deleteWorkout').on('click', function (e){
	// 	alert('why?');
	// });



	// $('#confirm-delete').on('click', function (e){
	// 	var workoutDelete = $('#exerciseDelete').val();	
	// 	console.log(workoutDelete);
		
	// });

	// adds more input fields, look into other solutions
	$('#addMore').on('click', function (e){
		e.preventDefault();
		console.log('add-more is working');
		$('.hidden-test').toggle();
	 });


});