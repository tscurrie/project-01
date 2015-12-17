 var mongoose = require('mongoose'),
 	Workout = require('./workout.js'),
 	Exercise = require('./exercise.js');
  mongoose.connect( process.env.MONGOLAB_URI ||
                    process.env.MONGOHQ_URL ||
                    'mongodb://localhost/project-01'); 

module.exports.Workout = Workout;
module.exports.Exercise = Exercise;