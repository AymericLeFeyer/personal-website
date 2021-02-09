new WOW().init();

$(".titlePage").one(
  "animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
  function () {
    $(this).css("display", "none");
  }
);
