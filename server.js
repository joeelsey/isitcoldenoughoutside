'use strict';

var express = require('express');
var request = require('superagent');
var app = express();

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function() {
  console.log('server running on port: ' + app.get('port'));
});

//app.set('views', __dirname + './');
//app.set('view engine', 'html');

app.get('/', function(req, res){
  res.json({msg:'add zip code to the end of the url /zip to get temp'});
});

app.get('/:zip', function(req, res) {
  var key = 'b40a0fca31859481'
  var weatherUrl = 'http://api.wunderground.com/api/' + key +
                    '/conditions/q/' + req.params.zip + '.json';

  request
    .get(weatherUrl)
    .end(function(err, weatherdata) {
      if (err) res.status(500).send(err);
      var parsedData = JSON.parse(weatherdata.text);
      var temp = parsedData.current_observation.temp_f;
      if(temp < 50 ){
        res.json({'temp in your city': temp + ' and its cold enough to store beer outside.'});
      } else {
        res.json({'temp in your city': temp + ' and its too warm to store beer outside.'})
      }
      
    });
});


