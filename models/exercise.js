var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ExerciseSchema = new Schema({
	// name: String, // name from workoutSchema
	// date: Date,
	// sets: Number,
	// reps: Number,
	// weight/time: Number,
	note: String
});

var Exercise = mongoose.model('Exercise', ExerciseSchema);

module.exports = Exercise;
