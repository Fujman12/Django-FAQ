$(function () {

  $.ajaxSetup({
     beforeSend: function(xhr, settings) {
         function getCookie(name) {
             var cookieValue = null;
             if (document.cookie && document.cookie != '') {
                 var cookies = document.cookie.split(';');
                 for (var i = 0; i < cookies.length; i++) {
                     var cookie = jQuery.trim(cookies[i]);
                     // Does this cookie string begin with the name we want?
                 if (cookie.substring(0, name.length + 1) == (name + '=')) {
                     cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                     break;
                 }
             }
         }
         return cookieValue;
         }
         if (!(/^http:.*/.test(settings.url) || /^https:.*/.test(settings.url))) {
             // Only send the token to relative URLs i.e. locally.
             xhr.setRequestHeader("X-CSRFToken", getCookie('csrftoken'));
         }
     }
   });


  $(".js-new-topic").click(function () {
    $.ajax({
      url: '/faq/create_topic/',
      type: 'get',
      dataType: 'json',
      beforeSend: function () {
        $("#modal-book").modal("show");
      },
      success: function (data) {
        $("#modal-book .modal-content").html(data.html_form);
      }
    });
  });

  $("#modal-book").on("submit", ".js-book-create-form", function () {
  var form = $(this);
  $.ajax({
    url: form.attr("action"),
    data: form.serialize(),
    type: form.attr("method"),
    dataType: 'json',
    success: function (data) {
      if (data.form_is_valid) {
        alert("New Topic created!");  // <-- This is just a placeholder for now for testing
        $("#modal-book").modal("hide");
        $(".select-topic").html(data.html_topics_list)
      }
      else {
        $("#modal-book .modal-content").html(data.html_form);
      }
    }
  });
  return false;
  });

  $(".js-new-group").click(function () {
    var btn = $(this);
    $.ajax({
      url: btn.attr("data-url"),
      type: 'get',

      success: function (data) {
        location.reload();
      }
    });
  });

  $(".js-delete-group").click(function () {
    var btn = $(this);
    $.ajax({
      url: btn.attr("data-url"),
      type: 'get',

      success: function (data) {
        alert("Q/A group has been removed")
        location.reload();
      }
    });
  });

  $(".js-switch-published").click(function () {
    var swt = $(this);
    if (swt.is(':checked')){
      $.ajax({
        url: swt.attr("data-url")+"activate",
        type: 'get',

        success: function (data) {
          alert("Published");
        }
      });
    } else {
      $.ajax({
        url: swt.attr("data-url")+"deactivate",
        type: 'get',

        success: function (data) {
          alert("Deactivated!");
        }
      });
    }

  })

  $(".lol")

  .on('tokenfield:createdtoken', function (e) {
  // Über-simplistic e-mail validation
    if(e.attrs.id == null){

      var group_id = $(this).attr('group-id');
      $.ajax({
        url: '/faq/create_question/' + group_id,
        type: 'post',
        data: {text:e.attrs.value},
        success: function (data) {
          //alert("Fuck yeah!" + data.pk);
          e.attrs.id = data.pk;
        }
      });
    }
    console.log(e.attrs.id);

  })
  .on('tokenfield:editedtoken', function (e) {
    // Über-simplistic e-mail validation

    $.ajax({
      url: '/faq/delete_question/' + e.attrs.id,
      type: 'get',

      success: function (data) {
        //alert("Question " + e.attrs.value +" removed");
      }
    });
    

  })

  .on('tokenfield:removedtoken', function (e) {
    $.ajax({
      url: '/faq/delete_question/' + e.attrs.id,
      type: 'get',

      success: function (data) {
        //alert("Question " + e.attrs.value +" removed");
      }
    });
    //alert('Token removed! Token value was: ' + e.attrs.value)
  })





});

$( document ).ready(function() {


});
