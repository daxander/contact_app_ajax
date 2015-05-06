$(function() {
  var display_contacts = function(index, contact) {
    var div = $("<h1>").css('color', 'blue').text(contact.name);
    $("<p>").text(contact.email).prepend(div).prependTo("#border");
    $("<p>").text(contact.phone_number).prepend(div).prependTo("#border");
    $("<hr>").prependTo("#border");   
  }

  function get_contacts(contacts) {
    $.each(contacts, display_contacts);
  }

  $("#btn").on('click', function() {
    $.getJSON('/contacts', get_contacts);
  });


  $("#submit").on('click', function(){
    $.getJSON('/new')
  });
});