var css = "display: block; opacity: 1; transition: all 300ms ease;";

var m1 = document.getElementsByClassName("m1")[0];
var m2 = document.getElementsByClassName("m2")[0];
var m3 = document.getElementsByClassName("m3")[0];

var one = document.getElementsByClassName("text one");
var two = document.getElementsByClassName("text two");
var three = document.getElementsByClassName("text three");

var title = document.getElementsByClassName("titlePage formation")[0];
var subtitle = document.getElementsByClassName("subtitlePage formation")[0];

function events(m, texts) {
  m.onmouseover = function () {
    for (var i = 0; i < texts.length; i++) {
      texts[i].style.opacity = 1;
    }
    title.style.opacity = 0;
    subtitle.style.opacity = 0;
  };

  m.onmouseleave = function () {
    for (var i = 0; i < texts.length; i++) {
      texts[i].style.opacity = 0;
    }
    title.style.opacity = 1;
    subtitle.style.opacity = 1;
  };
}

function refresh() {
  for (var i = 0; i < one.length; i++) {
    one[i].style.opacity = 0;
    two[i].style.opacity = 0;
    three[i].style.opacity = 0;
  }

  title.style.opacity = 1;
  subtitle.style.opacity = 1;
}

events(m1, one);
events(m2, two);
events(m3, three);
