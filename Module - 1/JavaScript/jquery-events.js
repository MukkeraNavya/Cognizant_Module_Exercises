$(document).ready(function () {
  $("#showEvents").click(function () {
    $(".event-card").fadeIn();
  });

  $("#hideEvents").click(function () {
    $(".event-card").fadeOut();
  });
});