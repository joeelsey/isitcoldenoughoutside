(document).ready(function(){
  $('#submit').on('click', function(){
    $.ajax({
      url:'localhost:3000/zip/',
      type: 'POST'
      
    });
  });
}());
