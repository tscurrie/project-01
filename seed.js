var db = require("./models");

var workout = [
	{
		workoutName: 'arms and back',
		description: 'Upper body workout to be performed twice a week',
		exercise: ['pull ups', 'push ups','bent over rows','dips','lat pulls']
	}
];


// create all workout objects above
db.Workout.create(workout, function(err, success) {
	if(err) {return console.log(err);}
	console.log("SUCCESS" , success);
});


// remove all of the objects
// db.Workout.remove({}, function(err, success) {
// 	if(err) {return console.log(err);}
// 	console.log("SUCCESSFULLY DUMPED DB");
// });