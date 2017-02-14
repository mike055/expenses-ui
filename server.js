require('dotenv').config()

var express  = require('express');
var morgan = require('morgan');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app      = express();
var port     = (process.env.PORT || 3001);

var passport = require('passport');

var mongoose = require('mongoose');
var configDB = require('./config/database.js');

// configuration ===============================================================
mongoose.connect(configDB.url); // connect to our database

require('./config/passport')(passport); // pass passport for configuration

// set up our express application
app.use(morgan('combined'));

app.set('view engine', 'ejs'); // set up ejs for templating
app.set('views', './views')

app.use(cookieParser('moneylifeisdareallife'));
app.use(session({cookie: { maxAge: 60000 }, secret: 'moneylifeisdareallife'}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// required for passport
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

// routes ======================================================================
require('./app/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport

// launch ======================================================================
app.listen(port);
console.log('The magic happens on port ' + port);