// SERVER-SIDE JAVASCRIPT

//require express in our app
var express = require('express');
// generate a new express app and call it 'app'
var app = express(),
	mongoose = require('mongoose'),
	bodyParser = require('body-parser'),
	hbs = require('hbs');

var db = require('./models');

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
	res.render('workout/indexW.hbs');
});

app.get('/workouts/:id', function workout_show (req, res) {
	db.Workout.findOne({_id: req.params.id}, function (err, workout){
		res.render('workout/show', workout);

	});
});

//// JSON ENDPOINTS

// to look at workouts
app.get('/api/workouts', function (req, res) {
	db.Workout.find({}, function(err, workouts){
		res.json(workouts);
	});
});



// request to create workouts
app.post('/api/workouts', function (req, res){
	console.log('req', req.body);
	db.Workout.create(req.body, function (err, workouta){
			// exercises.push(workouta);
			// console.log('workouta',workouta);
			res.json(workouta);
		});
});



// Delete workout
app.delete('/api/workouts', function (req,res) {
	console.log("req.body.id:",req.body.id);
	db.Workout.remove({_id: req.body.id}, function (err, gone){
		if (err) {
			console.log("error");
		}
		console.log('bye id', req.body);
		res.json({status:200,message:"This was successfully deleted."});
	});
	});

app.put('/api/workouts', function (req, res) {
	console.log('editing workout id=', req.params.id);
	db.Workout.findByIdAndUpdate({_id: req.params.id}, function (err, success){
		res.json(success);
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



app.listen(process.env.PORT || 3000, function () {
	console.log('Express server is running on http://localhost:3000/');
});