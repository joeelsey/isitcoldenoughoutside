$(document).on('ready', function() {
  var ZipCode = 1;
  $('#SetZipCode').click(function() {
    var ZipCode = document.getElementById('GetZipCode').value;
    $('#GetZipCode').val(" ");
    console.log(ZipCode);

    $.ajax({
      type: 'GET',
      dataType: 'text',
      url: 'http://localhost:3000/zip/' + ZipCode,
      success: function(data) {
        $('#answer').html(data);
      }
    });

  });
});
