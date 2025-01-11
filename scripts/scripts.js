$(document).ready(function () {
  document.querySelector(".balloons-container").style.animation =
    "riseUp 5s ease-in-out forwards";

  $("#open-modal-button").on("click", function () {
    $("#response").hide();
  });

  const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });

  let namesString = params.names;
  let namesList = [];
  if (namesString) {
    namesList = namesString.split(",");

    let formCheckboxes = "";
    namesList.forEach((name) => {
      $("#guests-text").append(`<p class="mb-1">${name}</p>`);
      formCheckboxes += `
       <div class="form-check">
            <input type="checkbox" class="form-check-input" id="${name}" name="guests" value="${name}">
            <label class="form-check-label" for="${name}">${name}</label>
        </div>
      `;
    });
    $("#guests-text").append(
      `<p class="mb-1 mt-3">
        Venha${namesList.length > 1 ? 'm' : ''} comemorar comigo <br />
        este dia especial
      </p>`
    );

    $("#guest-list").append(formCheckboxes);
  }

  $("#guest-form").on("submit", function (e) {
    e.preventDefault();
    let confirmedGuests = [];

    $('input[name="guests"]:checked').each(function () {
      const guestName = $(this).val();
      confirmedGuests.push(guestName);
    });

    const submitButton = $("#submit-button");

    submitButton.prop("disabled", true);

    if (confirmedGuests.length === 0) {
      alert("Selecione pelo menos um convidado.");
      submitButton.prop("disabled", false);
      return;
    }

    $.ajax({
      url: "https://script.google.com/macros/s/AKfycbwqCMBaIX2dUmK4xSUXwd2DQmnhFp-hW97LAke5Ds-_5yL84hpVeVaqpZodEv93KnZq/exec",
      method: "POST",
      data: JSON.stringify({ names: confirmedGuests }),
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
