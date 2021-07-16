import 'package:aymeric/components/button.dart';
import 'package:aymeric/components/image.dart';
import 'package:aymeric/pages/home/portfolio.dart';
import 'package:aymeric/url.dart';
import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';

Widget familybook({size = 3}) {
  return Column(
    children: [
      familybookImage(size: size),
    ],
  );
}

Widget familybookImage({size = 3}) {
  return InkWell(
      onTap: () {
        portfolioDialog(
            title: "familyBOOK",
            description: [
              "Le moyen de maintenir le lien familial, simplement, de façon conviviale, attractive et économique."
            ],
            technos: "Android - VueJS - NodeJS - MongoDB",
            url: URL.familybook);
      },
      child: image(asset: "familybook.png", size: size));
}
