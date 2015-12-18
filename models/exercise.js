var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var LogEntry = require('./logEntry.js');


var ExerciseSchema = new Schema({
	name: String, 
	sets: Number,
	reps: Number,

	});

var Exercise = mongoose.model('Exercise', ExerciseSchema);

module.exports = Exercise;

