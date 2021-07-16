import 'package:aymeric/components/button.dart';
import 'package:aymeric/components/image.dart';
import 'package:aymeric/pages/home/portfolio.dart';
import 'package:aymeric/url.dart';
import 'package:flutter/material.dart';

Widget bonap({size = 3}) {
  return Column(
    children: [
      bonapImage(size: size),
    ],
  );
}

Widget bonapImage({size = 3}) {
  return InkWell(
      onTap: () {
        portfolioDialog(
            title: "Bonap",
            description: [
              "Bonap est une application mobile qui permet de gérer ses menus à la semaine.",
            ],
            technos: "Flutter - Firebase",
            url: URL.bonap);
      },
      child: image(asset: "bonap.png", size: size));
}
