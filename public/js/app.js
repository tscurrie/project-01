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
	    

		});
	
	// this is to create a new workout
	$('#createWorkout').on('click', function (e){
		e.preventDefault();
		// var formData = $('#workout-form form').serialize();
		var name = $('#workout-name').val();
		var description = $('#description').val();

		var formData = {workoutName: name, description: description};
		var exercises = [];
		$(".newExercises").each(function(element){
			var exerciseName = $(this).children(".exerciseName").val();
			var sets = $(this).children(".sets").val();
			var reps = $(this).children(".reps").val();
			if ($(this).length > 0) {  
				exercises.push({name: exerciseName, sets:sets, reps:reps});
				console.log(exercises);
				console.log(exerciseName);
			}
		});
		formData.exercises = exercises;
		console.log('form data', formData);
		$.ajax({
			method: 'POST',
			url: '/api/workouts/',
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
	

	// adds more input fields, look into other solutions
	$('#createNew').on('click', function (e){
		e.preventDefault();
		console.log('add-more is working');
		$('.hidden-test').toggle();
		$('#createNew').toggle();
	 });


});