'use strict';

// Module dependencies.
var express = require('express'),
    path = require('path'),
    fs = require('fs'),
    SessionStore = require("session-mongoose")(express);

var store = new SessionStore({
    url: "mongodb://localhost/usersession",
    interval: 120000 // expiration check worker run interval in millisec (default: 60000)
});

var app = express();

// Connect to database
var db = require('./lib/db/mongo');

// Bootstrap models
var modelsPath = path.join(__dirname, 'lib/models');
fs.readdirSync(modelsPath).forEach(function (file) {
  require(modelsPath + '/' + file);
});

// Populate empty DB with dummy data 初始进站用户只需首次

//require('./lib/db/dummydataUser');
//require('./lib/db/dummydataPc');

// Express Configuration

  app.engine('html', require('ejs').renderFile);
  app.set('view engine', 'ejs');
  app.use(express.logger('dev'));
  app.use(express.json());
  app.use(express.urlencoded());
  app.use(express.methodOverride());
  app.use(express.cookieParser());
  app.use(express.cookieSession({secret :'bulatie'}));
  app.use(express.session({
      secret : 'bulatie',
      store: store,
      cookie: { maxAge: 900000 } // expire session in 15 min or 900 seconds
  }));

    app.use(require('less-middleware')({
        dest: path.join(__dirname,'/app/styles'),
        src: path.join( __dirname,'/app/bower_components/bootstrap/less'),
        prefix: '/styles',
        compress: true
    }));

if('development' === app.get('env')){
    app.use(require('connect-livereload')());
    app.use(express.static(path.join(__dirname, '.tmp')));
    app.use(express.static(path.join(__dirname, 'app')));
    app.use(express.errorHandler());
    app.set('views', __dirname + '/app/views');
};

if('production' === app.get('env')){
    app.use(express.favicon(path.join(__dirname, 'public', 'favicon.ico')));
    app.use(express.static(path.join(__dirname, 'public')));
    app.set('views', __dirname + '/views');
};



  // Router needs to be last
	app.use(app.router);


// Controllers
var api = require('./lib/controllers/api'),
    controllers = require('./lib/controllers');

// Server Routes
app.get('/api/pcStatuses', api.pcStatuses);
app.post('/api/enterSite',api.enterSite);
app.get('/api/logout', api.logout);

// Angular Routes
app.get('/partials/*', controllers.partials);
app.get('/*', controllers.index);

// Start server
var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Express server listening on port %d in %s mode', port, app.get('env'));
});