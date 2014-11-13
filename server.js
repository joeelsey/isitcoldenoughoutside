var express = require('express');
var request = require('superagent');
var app = express();

app.get('/', function(req, res) {
  var weatherUrl = "http://www.wunderground.com/?apiref=fca0fd6081216f5b";

  request
    .get(weatherUrl)
    .end(function(err, weatherdata) {
      if (err) res.status(500).send(err);
      res.json(weatherdata);
    });
});

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function() {
      console.log('server running on port: ' + app.get('port'));
