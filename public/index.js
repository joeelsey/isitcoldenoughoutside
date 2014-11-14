$(document).ready(function(){
  $('#submit').on('click', function(){
    addURL();
});

function addURL(){
  var zip = document.getElementById('yourzip').value;
  var url = window.location.href;

  return url + '/' + zip;
};
