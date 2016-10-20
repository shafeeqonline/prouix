var express = require('express'),
	app		= express(),
	path 	= require('path'),
	generatefiles = require('./server/generatefiles'),
	open = require('opener'),
	bodyParser = require('body-parser');

function initProuix(){

	app.use(bodyParser.urlencoded({
	  extended: true
	}));

	app.get('/', function(req, res){
		res.sendFile(path.join(__dirname + '/client/views/index.html'));
	});

	app.use('/js', express.static(__dirname + '/client/js'));
	app.use('/css', express.static(__dirname + '/client/css'));

	app.post('/createpackage', generatefiles.readForm);

	app.listen(3000, function(){
		console.log('I am  now listening on 3000');
		open('http://localhost:3000')
	});
}

initProuix();
module.exports.initProuix = initProuix;
