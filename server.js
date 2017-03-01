var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var activities = require('./routes/activities');

// var port = 3000;

var app = express();
app.set('port', (process.env.PORT) || 3000);

// init view engine
var viewEngine = require('ejs-locals');
app.engine('ejs', viewEngine);
app.set('view engine', 'ejs');

// set folder for static content
app.use(express.static(path.join(__dirname, 'client')));

// body parser middlewear
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', activities);

app.listen(app.get("port"), function() {
    console.log("Server started on port: " + app.get("port"));
});
