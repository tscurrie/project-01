var db = require("./models");

var exercises1 = [
	{
		date: Date.now(),
		sets: 10,
		reps: 10,
		note: "example 0"
	},
	{
		date: Date.now(),
		sets: 10,
		reps: 10,
		note: "example 1"
	}
];

var exercises2 = [
	{
		date: Date.now(),
		sets: 10,
		reps: 10,
		note: "example 2"
	},
	{
		date: Date.now(),
		sets: 10,
		reps: 10,
		note: "example 3"
	}
];

var workout = [{
		workoutName: 'arms and back',
		description: 'Upper body workout to be performed twice a week',
		exercises: exercises1
	},{
		workoutName: 'legs',
		description: 'leg workout to be done twice a week',
		exercises: exercises2
	} ];



// remove all of the objects
// db.Workout.remove({}, function(err, success) {
// 	if(err) {return console.log(err);}
// 	console.log("SUCCESSFULLY DUMPED DB");
	
	// create all workout objects above
	db.Workout.create(workout, function(err, success) {
		if(err) {return console.log(err);}
		console.log("SUCCESS" , success);
	// });

});