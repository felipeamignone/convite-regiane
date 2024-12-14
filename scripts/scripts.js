$(document).ready(function () {
  document.querySelector(".balloons-container").style.animation =
    "riseUp 5s ease-in-out forwards";

  $("#open-modal-button").on("click", function () {
    $("#response").hide();
  });

  $("#rsvp-form").on("submit", function (e) {
    e.preventDefault();
    const name = $("#name").val();

    const submitButton = $("#submit-button");

    submitButton.prop("disabled", true);

    $.ajax({
      url: "https://script.google.com/macros/s/AKfycbyQGXu1T0BnnNRKC28YOYpVIKUFR-X2yultCVwzzfOpjOeNqif7xsphX-AySfzEjE82/exec",
      method: "POST",
      data: JSON.stringify({ name: name }),
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      redirect: "follow",
      success: function () {
        $("#response").show();
        $("#rsvp-form")[0].reset();
      },
      error: function () {
        alert("Erro ao confirmar presença. Tente novamente.");
      },
      complete: function () {
        submitButton.prop("disabled", false);
      },
    });
  });
});
