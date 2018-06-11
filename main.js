"use strict";

$(() => {
  $(".header").on("click", (e) => {
    const $target = $(e.target);
    const $accordion = $target.closest(".accordion");
    const $accordionBody = $accordion.children(".body");

    if ($accordionBody.is(":visible")) {
      $accordion.removeClass("show");
      $accordionBody.slideUp(150);
    } else {
      $accordion.addClass("show");
      $accordionBody.slideDown(150);
    }
  });
});
