 var mongoose = require('mongoose'),
 	Workout = require('./workout.js'),
 	Exercise = require('./exercise.js');
  mongoose.connect('mongodb://localhost/project-01');

module.exports.Workout = Workout;
module.exports.Exercise = Exercise;