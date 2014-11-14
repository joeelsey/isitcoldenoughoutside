'use strict';

var express = require('express');
var request = require('superagent');
var app = express();

app.get('/', function(req, res){
  res.json({msg:'add zip code to the end of the url to get temp.  Ex: /zip/yourzip'});
});

app.get('/zip/:zip', function(req, res) {
  var key = 'b40a0fca31859481'
  var weatherUrl = 'http://api.wunderground.com/api/' + key +
                    '/conditions/q/' + req.params.zip + '.json';

  request
    .get(weatherUrl)
    .end(function(err, weatherdata) {
      if (err) res.status(500).send(err);
      var parsedData = JSON.parse(weatherdata.text);
      var temp = parsedData.current_observation.temp_f;
      var hot = ' and its too warm to store beer outside.';
      var cold = ' and its cold enough to store beer outside.';
      if(temp < 50 ){
        res.json({msg: 'temp in your city is ' + temp + cold});
      } else {
        res.json({msg: 'temp in your city is ' + temp + hot})
      } 
    });
});
app.use(express.static(__dirname + '/public'));
app.get('/public', function(req,res){
  res.redirect('/index.html');

});

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function() {
  console.log('server running on port: ' + app.get('port'));
});
