$(function() {
  var display_contacts = function(index, contact) {


    var div = $("<div id='border'>").appendTo("#list");
    $("<h1>").css('color', '#045268').text(contact.name).appendTo(div);
    $("<p>").text(contact.email).appendTo(div);
    $("<p>").text(contact.phone_number).appendTo(div);
  }

  function get_contacts(contacts) {
    $.each(contacts, display_contacts);
  };

  function refresh_list() {
    $("#list").replaceWith("<div id='list'>");
      $.getJSON('/contacts', get_contacts);
        // function() {
        //   $("#loader").addClass("hidden");
        // };
  };

  var offset = 300,
  //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
  offset_opacity = 1200,
  //duration of the top scrolling animation (in ms)
  scroll_top_duration = 700;
  // $("#contacts").hover(,function(){
  //   $.getJSON('/contacts', function(contacts){
  //     $.each(contacts, function(index, contact){
  //       $("<li>").text(contact.name).appendTo("#contacts");
  //     })
  //   });

  // });

  // function validate_form() {
  //   var nameReg = /^[A-Za-z]+$/;
  //   var numberReg = /^[0-9]{10}$/;
  //   var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

  //   var name = $('#name').val();
  //   var email = $('#email').val();
  //   var number = $('#phone_number').val();

  //   if (!nameReg.test(name)){
  //     $("#flash").html($("<h3>").text("Name is Not Valid"));
  //   }
  // };

  $("#btn").on('click', refresh_list);
  


  $("#submit").on('click', function(event){
    event.preventDefault();
    var data = $("#form").serialize();
    $.ajax({
      url: '/create',
      method: 'post',
      data: data,
      beforeSend: function(){
        $("<div id='#loader'>").appendTo("#loader-wrapper");
        $("#loader").removeClass("hidden");
      },
      success: function(response){
        refresh_list();
      },
    });

    $('#form').trigger("reset");
    $("#flash").html($("<h3>").text("Contact Created"));
    $("#flash").show();
    setTimeout(function() { $("#flash").hide(); }, 1500);
  });

  $("#search").on('submit', function(event){
    event.preventDefault();
    var data = $("#search").serialize();
    $.ajax({
      url: '/search',
      method: 'get',
      data: data,
      success: function(e){
        $("#list").replaceWith("<div id='list'>");
        get_contacts(e);
      },
    });
  });


});



