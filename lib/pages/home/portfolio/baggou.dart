import 'package:aymeric/components/image.dart';
import 'package:aymeric/pages/home/portfolio.dart';
import 'package:aymeric/url.dart';
import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';

Widget baggou({size = 3}) {
  return Column(
    children: [
      baggouImage(size: size),
    ],
  );
}

Widget baggouImage({size = 3}) {
  return InkWell(
      onTap: () {
        portfolioDialog(
            title: "Baggou",
            description: [
              "Solution de covoiturage adaptée aux supporters.",
            ],
            technos: "Flutter - Firebase - NodeJS",
            url: URL.baggou);
      },
      child: image(asset: "baggou.png", size: size));
}
