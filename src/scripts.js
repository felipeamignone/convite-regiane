$(document).ready(function () {
  $("#rsvp-form").on("submit", function (e) {
    e.preventDefault();
    const name = $("#name").val();
    const guests = $("#guests").val();

    $.ajax({
      url: "https://script.google.com/macros/s/AKfycbwDsOvsXCRtz1WRnnCWws3bF0o4adM8BAp69EAO_3Earr-TM_KCY7nlZHwSdGygYqiV/exec",
      method: "POST",
      data: JSON.stringify({ name: name, guests: guests }),
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
    });
  });
});
