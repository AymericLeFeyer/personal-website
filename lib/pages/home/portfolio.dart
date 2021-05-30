import 'package:aymeric/components/title.dart';
import 'package:aymeric/pages/home/portfolio/baggou.dart';
import 'package:aymeric/pages/home/portfolio/bonap.dart';
import 'package:flutter/widgets.dart';

Widget portfolioDesktop() {
  return Row(
    mainAxisAlignment: MainAxisAlignment.spaceEvenly,
    children: [bonap(), baggou()],
  );
}

Widget portfolioPhone() {
  return Column(
    mainAxisAlignment: MainAxisAlignment.spaceEvenly,
    children: [bonap(size: 1), baggou(size: 1)],
  );
}

Widget portfolioTitle() {
  return MyTitle(
    title: "Portfolio",
  );
}
