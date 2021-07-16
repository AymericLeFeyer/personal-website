import 'package:aymeric/components/button.dart';
import 'package:aymeric/components/image.dart';
import 'package:aymeric/pages/home/portfolio.dart';
import 'package:aymeric/url.dart';
import 'package:flutter/material.dart';

Widget dunfresh({size = 3}) {
  return Column(
    children: [
      dunfreshImage(size: size),
    ],
  );
}

Widget dunfreshImage({size = 3}) {
  return InkWell(
      onTap: () {
        portfolioDialog(
            title: "Dunfast",
            description: [
              "Solution de mise en relation automatique de documents pour préparer des containers.",
            ],
            technos: "Python - Django",
            url: URL.dunfresh);
      },
      child: image(asset: "dunfresh.png", size: size));
}
