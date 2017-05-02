$(function () {

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

});
