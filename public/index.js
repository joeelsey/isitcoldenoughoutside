$(document).ready(function(){
  $('#button').on('click', function(){
    process();
  });
});

function process() {
  var zip = document.getElementById('zip').value;
  var url = 'http://localhost:3000/zip/' + zip;
  console.log(url);
  return url;
}
