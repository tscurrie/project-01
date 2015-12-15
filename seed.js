var db = require("./models");

var workout = [{
		workoutName: 'arms and back',
		description: 'Upper body workout to be performed twice a week',
		exercises: ['pull ups', 'push ups','bent over rows','dips','lat pulls']
	},{
		workoutName: 'legs',
		description: 'leg workout to be done twice a week',
		exercises: ['squats', 'lunges', 'box jumps', 'leg press']
	} ];



// create all workout objects above
// db.Workout.create(workout, function(err, success) {
// 	if(err) {return console.log(err);}
// 	console.log("SUCCESS" , success);
// });


// remove all of the objects
db.Workout.remove({}, function(err, success) {
	if(err) {return console.log(err);}
	console.log("SUCCESSFULLY DUMPED DB");
});