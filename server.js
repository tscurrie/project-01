// SERVER-SIDE JAVASCRIPT

//require express in our app
var express = require('express');
// generate a new express app and call it 'app'
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var db = require('./models');
// serve static files from public folder
	// {description: 'Upper body workout to be performed twice a week'},
	// {exercise: 'pull ups', 'push ups','rows','dips','lat pulls'}];

// var exercises= [];

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));

	app.get('/', function homepage (req, res) {
	  res.sendFile(__dirname + '/views/index.html');
	});

	app.get('/api/workouts', function (req, res) {
		db.Workout.find({}, function(err, workouts){
			res.json(workouts);
		});
	});

	app.get('/api/exercises', function (req, res) {
		res.send('exrcises server side is working');
	});

	app.get('/api/history', function (req, res){
		res.send('history page is working');
	});

	app.post('/api/workouts', function (req, res){
		console.log('req', req.body);
		db.Workout.create(req.body, function (err, workouta){
			// exercises.push(workouta);
			console.log('workouta',workouta);
			res.send(workouta);
			
		});
	});

// app.get('/api/albums/:id', function albumShow(req, res) {
//   console.log('requested album id=', req.params.id);
//   db.Album.findOne({_id: req.params.id}, function(err, album) {
//     res.json(album);
//   });
// });

	app.get('/api/workouts/:id', function (req, res) {
		console.log('requested workout id=', req.params.id);
		db.Workout.findOne({_id: req.params.id}, function (err, success){
			res.json(success);
		});
	});


	// app.delete('/api/workouts', function (req, res){
	// 	console.log('deleting id: req.params.id');
	// 	res.send('hell yeah');
	// });






app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is running on http://localhost:3000/');
});