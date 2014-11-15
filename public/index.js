$(document).ready(function() {
  $('#button').on('click', function() {
    showZip();
  });
});

function showZip() {
  var zip = document.getElementById('zip').value;
  console.log(zip);
}
console.log(zip,'the zip');
console.log('hello');
