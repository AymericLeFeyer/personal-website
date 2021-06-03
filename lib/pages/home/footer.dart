import 'package:aymeric/components/button.dart';
import 'package:aymeric/url.dart';
import 'package:aymeric/utils/aymeric_icons.dart';
import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart';

Widget footer() {
  return Column(
    children: [
      Padding(
          padding: const EdgeInsets.all(8.0),
          child: Tooltip(
            message: "Envoie moi un mail",
            child: MyButton(
                content: Text(
                  "Contacte-moi !",
                  style: TextStyle(fontSize: 50),
                ),
                onPress: () {
                  launchInBrowser(URL.mail);
                }),
          )),
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

Widget credits(BuildContext context) {
  return RichText(
    text: new TextSpan(
      children: [
        new TextSpan(
          text: 'Avec la participation graphique de ',
          style: new TextStyle(
              color: Theme.of(context).brightness == Brightness.dark
                  ? Colors.white
                  : Colors.black,
              fontFamily: "Pangolin"),
        ),
        new TextSpan(
          text: 'smola',
          style: new TextStyle(color: Colors.blue, fontFamily: "Pangolin"),
          recognizer: new TapGestureRecognizer()
            ..onTap = () {
              launchInBrowser(URL.smola);
            },
        ),
      ],
    ),
  );
}
