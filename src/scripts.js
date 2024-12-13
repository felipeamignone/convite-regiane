$(document).ready(function () {
  $("#rsvp-form").on("submit", function (e) {
    e.preventDefault();
    const name = $("#name").val();
    const guests = $("#guests").val();

    $.ajax({
      url: "https://script.google.com/macros/s/AKfycbyfnMLex6pKAOQSkR5scVZ208oLapQota63XkKRAqFy9gzRIyTrRaRli0evMhM7aTqS/exec",
      method: "POST",
      contentType: "application/json",
      data: JSON.stringify({ name: name, guests: guests }),
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
