var db = require("./models");

var exercises1 = [{name: 'pull ups',
					sets: 3, reps: 3, 

}, {name: 'push ups', logEntries: []}, 

{name: 'sit ups', logEntries: []},

{name: 'chin ups', logEntries: []}

];
	
	
	

var workout = [{
		workoutName: 'arms and back',
		description: 'Upper body workout to be performed twice a week',
		exercises: exercises1
	},{
		workoutName: 'legs',
		description: 'leg workout to be done twice a week',
		exercises: exercises1
	} ];



// remove all of the objects
db.Workout.remove({}, function(err, success) {
	if(err) {return console.log(err);}
	console.log("SUCCESSFULLY DUMPED DB");
	
	// create all workout objects above
	db.Workout.create(workout, function(err, success) {
		if(err) {return console.log(err);}
		console.log("SUCCESS" , success);
		process.exit();
	});

});