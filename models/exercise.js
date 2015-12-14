var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ExerciseSchema = new Schema({
	name: String,
	date: Date,
	sets: Number,
	reps: Number,
	notes: String
});

var Exercise = mongoose.model('exercise', ExerciseSchema);

module.exports = exercise;
