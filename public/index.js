$(document).on('ready', function() {
  var ZipCode = 1;
  $('#SetZipCode').click(function() {
    var ZipCode = document.getElementById('GetZipCode').value;
    $('#GetZipCode').val(" ");
    console.log(ZipCode);

    $.ajax({
      type: 'GET',
      dataType: 'text',
      url: 'https://coldenoughforbeer.herokuapp.com/zip/' + ZipCode,
      success: function(data) {
        $('#answer').html(data);
      }
    });

  });
});
