/**
 * Module dependencies.
 */

var express = require('express');
require('express-resource')

var routes = require('./routes');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));
//app.use(express.static('/static', path.join(__dirname, 'app/bower_components')));
app.use('/static', express.static('app/bower_components'));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);

// REST route for /api/places
app.resource('api/places', require('./routes/api/places'));
//app.resource('api/v1/places', require('./routes/api/places'));

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
