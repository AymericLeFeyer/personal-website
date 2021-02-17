$(document).ready(function () {
  $(".carousel").slick({
    centerMode: true,
    autoplay: true,
    dots: true,
    prevArrow: false,
    nextArrow: false,
    autoplaySpeed: 6000,
  });
  let company = document.getElementById("company");
  let missionType = document.getElementById("mission_type");
  let expDiv = document.getElementById("experiences-div");
  // Set opacity to 0
  $(".carousel").on("beforeChange", function () {
    var dataId = $(".slick-current").attr("data-slick-index");
    expDiv.style.opacity = 0;
  });

  // Set opacity to 1
  $(".carousel").on("afterChange", function () {
    var id = $(".slick-current").attr("data-slick-index");
    if (id == 0) {
      company.textContent = "Progress-IT";
      missionType.textContent = "Développeur mobile et web";
    } else if (id == 1) {
      company.textContent = "Dunfresh";
      missionType.textContent = "Manutentionnaire CACES";
    } else if (id == 2) {
      company.textContent = "Lesieur";
      missionType.textContent = "Opérateur station d'épuration";
    }

    expDiv.style.opacity = 1;
  });
});
