$(function() {
  $("#getInfo").click(function(event){
    $.ajax({
      url: 'https://randomuser.me/api/',
      dataType: 'json',
      success: function(data){
        $('#content').append('<div>' + data.results[0].email + '</div>')
      }
    });
  });
});