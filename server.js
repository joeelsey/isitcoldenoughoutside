'use strict';

var express = require('express');
var request = require('superagent');
var app = express();

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function() {
  console.log('server running on port: ' + app.get('port'));
});

app.get('/', function(req, res){
  res.send('Add your state and city to the end of the url in the following format:  "/state initials/city name"\n
    If entered correctly you should see the temp for where you live.');
})

app.get('/:state/:city', function(req, res) {
  var key = 'b40a0fca31859481'
  var weatherUrl = 'http://api.wunderground.com/api/' + key +
                    '/conditions/q/' + req.params.state + "/" + req.params.city + '.json';

  request
    .get(weatherUrl)
    .end(function(err, weatherdata) {
      if (err) res.status(500).send(err);
      var parsedData = JSON.parse(weatherdata.text);
      res.json({'temp in your city': parsedData.current_observation.temperature_string});
    });
});


