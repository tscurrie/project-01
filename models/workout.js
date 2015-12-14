var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Exercise = require('./exercise.js');

var WorkoutSchema = new Schema({
	workoutName: String,
	description: String,
	exercises: [Exercise.schema]
});

var Workout = mongoose.model('Workout', WorkoutSchema);

module.exports = Workout;
