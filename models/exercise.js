var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ExerciseSchema = new Schema({
	// name: String, name from workoutSchema
	date: Date,
	sets: Number,
	reps: Number,
	notes: String
});

var Exercise = mongoose.model('Exercise', ExerciseSchema);

module.exports = Exercise;
