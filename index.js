const express = require('express'),
	ejs = require('ejs'),
	app = express(),
	path = require('path'),
	fs = require('fs'),
	fileUpload = require('express-fileupload'),
	bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(fileUpload());

app.set('view engine', 'ejs');
app.engine('html', ejs.renderFile)