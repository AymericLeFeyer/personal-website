import 'package:aymeric/components/button.dart';
import 'package:aymeric/url.dart';
import 'package:aymeric/utils/aymeric_icons.dart';
import 'package:flutter/material.dart';

Widget footer() {
  return Column(
    children: [
      Padding(
          padding: const EdgeInsets.all(8.0),
          child: MyButton(
              content: Text(
                "Contacte-moi !",
                style: TextStyle(fontSize: 50),
              ),
              onPress: () {
                launchInBrowser(URL.mail);
              })),
      Container(
        height: 50,
      ),
      Text("Mes réseaux"),
      Row(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Padding(
            padding: const EdgeInsets.all(8.0),
            child: IconButton(
              icon: Icon(AymericIcons.github_circled),
              iconSize: 64,
              onPressed: () {
                launchInBrowser(URL.github);
              },
            ),
          ),
          Padding(
            padding: const EdgeInsets.all(8.0),
            child: IconButton(
              icon: Icon(AymericIcons.linkedin),
              iconSize: 64,
              onPressed: () {
                launchInBrowser(URL.linkedin);
              },
            ),
          ),
          Padding(
            padding: const EdgeInsets.all(8.0),
            child: IconButton(
              icon: Icon(AymericIcons.spotify),
              iconSize: 64,
              onPressed: () {
                launchInBrowser(URL.spotify);
              },
            ),
          ),
        ],
      )
    ],
  );
}
