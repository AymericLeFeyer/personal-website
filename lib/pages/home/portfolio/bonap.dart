import 'package:aymeric/components/button.dart';
import 'package:aymeric/components/image.dart';
import 'package:aymeric/url.dart';
import 'package:flutter/material.dart';

Widget bonap({size = 3}) {
  return Column(
    children: [
      bonapImage(size: size),
      Padding(
        padding: const EdgeInsets.all(16.0),
        child: bonapButton(),
      ),
    ],
  );
}

Widget bonapImage({size = 3}) {
  return image(asset: "bonap.gif", size: size);
}

Widget bonapButton() {
  return MyButton(
      content: Text("En savoir plus ...", style: TextStyle(fontSize: 30)),
      onPress: () {
        launchInBrowser(URL.bonap);
      });
}
