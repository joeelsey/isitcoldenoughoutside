//var $ = require('jquery-latest');

$(document).on('ready', function() {
  var ZipCode = 1;
  $('#SetZipCode').click(function() {
    var ZipCode = document.getElementById('GetZipCode').value;
    $('#GetZipCode').val(" ");
    console.log(ZipCode);

    $.ajax({
      type: 'GET',
      dataType: 'text',
      url: 'https://localhost:3000/zip/' + ZipCode,
      success: function(data) {
        $('#answer').html(data);
      }
    });

  });
});
