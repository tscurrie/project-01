// SERVER-SIDE JAVASCRIPT

//require express in our app
var express = require('express');
// generate a new express app and call it 'app'
var app = express(),
	mongoose = require('mongoose'),
	bodyParser = require('body-parser'),
	hbs = require('hbs');

var db = require('./models');
// serve static files from public folder
	// {description: 'Upper body workout to be performed twice a week'},
	// {exercise: 'pull ups', 'push ups','rows','dips','lat pulls'}];

// var exercises= [];

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views');

app.use(express.static(__dirname + '/public'));


app.use(bodyParser.urlencoded({ extended: true }));

//// HTML ENDPOINTS

app.get("/", function homepage(req, res){
	res.send("Homepage");
});

app.get('/workouts', function workout_index (req, res) {
	res.sendFile(__dirname + '/views/workout/indexW.hbs');
});

app.get('/workouts/:id', function workout_show (req, res) {
	res.render('workout/show', {
_id: "5670b5efc06cf7615b01dea2",
workoutName: "arms and back",
description: "Upper body workout to be performed twice a week",
__v: 0,
exercises: [
{
date: "2015-12-16T00:53:03.878Z",
sets: 10,
reps: 10,
note: "example 0",
_id: "5670b5efc06cf7615b01dea4"
},
{
date: "2015-12-16T00:53:03.878Z",
sets: 10,
reps: 10,
note: "example 1",
_id: "5670b5efc06cf7615b01dea3"
}
]
});
});

//// JSON ENDPOINTS

app.get('/api/workouts', function (req, res) {
	db.Workout.find({}, function(err, workouts){
		res.json(workouts);
	});
});

// app.get('/api/exercises', function (req, res) {
// 	res.send('exrcises server side is working');
// });

// app.get('/api/history', function (req, res){
// 	res.send('history page is working');
// });

app.post('/api/workouts', function (req, res){
	console.log('req', req.body);
	db.Workout.create(req.body, function (err, workouta){
			// exercises.push(workouta);
			console.log('workouta',workouta);
			res.send(workouta);
		});
});




app.get('/api/workouts/:id', function (req, res) {
	console.log('requested workout id=', req.params.id);
	db.Workout.findOne({_id: req.params.id}, function (err, success){
		// this is equal to res.send, only with handlebars
		//res.render('workout/indexW',success);
		res.json(success);
	});
});


	// for exercises "api/workouts/" + w.id + "/exercises" + id
	
	// app.delete('/api/workouts', function (req, res){
	// 	console.log('deleting id: req.params.id');
	// 	db.Workout.remove({_id: req.params.id}, function (err, success){
	// 		res.json(success);
	// 	res.send('hell yeah');
	// });
	// });

app.get('/testpage', function(req,res){
	res.render('test', { title: 'Awesome Post', text: 'Lorem ipsum dolor'});
});




app.listen(process.env.PORT || 3000, function () {
	console.log('Express server is running on http://localhost:3000/');
});