import 'package:aymeric/components/title.dart';
import 'package:aymeric/pages/home/portfolio/baggou.dart';
import 'package:aymeric/pages/home/portfolio/bonap.dart';
import 'package:aymeric/pages/home/portfolio/dunfresh.dart';
import 'package:aymeric/pages/home/portfolio/familybook.dart';
import 'package:aymeric/url.dart';
import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';
import 'package:get/get.dart';

Widget portfolioDesktop() {
  return Wrap(
    spacing: 80,
    runSpacing: 80,
    children: [familybook(), baggou(), bonap(), dunfresh()],
  );
}

Widget portfolioPhone() {
  return Wrap(
    runSpacing: 50,
    children: [
      familybook(size: 1),
      baggou(size: 1),
      bonap(size: 1),
      dunfresh(size: 1)
    ],
  );
}

Widget portfolioTitle() {
  return MyTitle(
    title: "Portfolio",
  );
}

void portfolioDialog({title, description, url, technos}) {
  Get.defaultDialog(
    title: title,
    titleStyle: TextStyle(fontSize: 48),
    content: Container(
      child: Column(
        mainAxisSize: MainAxisSize.min,
        children: [
          ...description
              .map(
                (e) => Padding(
                  padding: const EdgeInsets.all(8.0),
                  child: Text(e, textAlign: TextAlign.center),
                ),
              )
              .toList(),
          Divider(),
          Padding(
            padding: const EdgeInsets.all(8.0),
            child: Text(
              technos,
              textAlign: TextAlign.center,
              style: TextStyle(fontSize: 16),
            ),
          ),
          SizedBox(
            height: 30,
          ),
          Padding(
            padding: const EdgeInsets.only(top: 8.0, right: 8, left: 8),
            child: TextButton(
                onPressed: () {
                  launchInBrowser(url);
                },
                child: Text("Accéder au site web")),
          ),
        ],
      ),
    ),
  );
}
