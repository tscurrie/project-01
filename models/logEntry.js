var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var LogEntrySchema = new Schema({

	date: Date,
	sets: Number,
	reps: Number,
	weightTime: Number,
	note: String
});

var LogEntry = mongoose.model('LogEntry', LogEntrySchema);

module.exports = LogEntry;

