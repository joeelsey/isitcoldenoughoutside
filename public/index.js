//var $ = require('jquery-latest');

$(document).on('ready', function() {
  var ZipCode = 1;
  var key = 'b40a0fca31859481'
  $('#SetZipCode').click(function() {
    var ZipCode = document.getElementById('GetZipCode').value;
    $('#GetZipCode').val(" ");
    console.log(ZipCode);

    $.ajax({
      type: 'GET',
      dataType: 'text',
      url: 'https://api.wunderground.com/api/' + key + '/conditions/q/' + ZipCode + '.json',
      success: function(data) {
        $('#answer').html(data);
      }
    });

  });
});
//url: 'https://localhost:3000/zip/'
