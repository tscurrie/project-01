var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Exercise = require('./exercise');

var WorkoutSchema = new Schema({
	workoutName: String,
	description: String,
	exercise: [Exercise.Schema]
});

var Workout = mongoose.model('Workout', WorkoutSchema);

module.exports = Workout;
