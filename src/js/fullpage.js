// Fullpage
console.warn(
  "The following error has no sense cause the project is open source !"
);
new fullpage("#fullpage", {
  anchors: ["home", "tech", "portfolio", "experiences", "studies", "contact"],
  sectionsColor: [
    "#78C0E0",
    "#009DD1",
    "#ADD8E6",
    "#ADE8FF",
    "#B0D7FF",
    "#BBDEF0",
  ],
  scrollBar: true,
  onLeave: function (index, nextIndex, direction) {
    if (index.index == 4) {
      refresh();
    }
  },
  scrollHorizontally: true,
});
