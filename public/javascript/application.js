$(function() {
  var display_contacts = function(index, contact) {
    var display = $("<h1>").css('color', 'blue').text(contact.name);
    $("<h3>").text(contact.email).prepend(display).appendTo("#list");
    $("<h3>").text(contact.phone_number).prepend(display).prependTo("#list");    
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