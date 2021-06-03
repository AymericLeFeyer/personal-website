import 'package:aymeric/components/title.dart';
import 'package:aymeric/pages/home/portfolio/baggou.dart';
import 'package:aymeric/pages/home/portfolio/bonap.dart';
import 'package:aymeric/pages/home/portfolio/dunfresh.dart';
import 'package:flutter/widgets.dart';

Widget portfolioDesktop() {
  return Wrap(
    spacing: 20,
    runSpacing: 20,
    children: [baggou(), bonap(), dunfresh()],
  );
}

Widget portfolioPhone() {
  return Wrap(
    runSpacing: 50,
    children: [baggou(size: 1), bonap(size: 1), dunfresh(size: 1)],
  );
}

Widget portfolioTitle() {
  return MyTitle(
    title: "Portfolio",
  );
}
