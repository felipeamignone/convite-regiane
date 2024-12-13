$(document).ready(function () {
  $("#rsvp-form").on("submit", function (e) {
    e.preventDefault();
    const name = $("#name").val();
    const guests = $("#guests").val();

    $.ajax({
      url: "https://script.google.com/macros/s/AKfycbwBHTmoE3-1V4xCY0BXTx6UiYNjBfT9UkQppE14Di4u7XFVtYfVY263t9pGpn5hfsgP/exec",
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
