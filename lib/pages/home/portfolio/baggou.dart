import 'package:aymeric/components/button.dart';
import 'package:aymeric/components/image.dart';
import 'package:aymeric/url.dart';
import 'package:flutter/widgets.dart';

Widget baggou({size = 3}) {
  return Column(
    children: [
      baggouImage(size: size),
      Padding(
        padding: const EdgeInsets.all(16.0),
        child: baggouButton(),
      ),
    ],
  );
}

Widget baggouImage({size = 3}) {
  return image(asset: "baggou.png", size: size);
}

Widget baggouButton() {
  return MyButton(
      content: Text("En savoir plus ...", style: TextStyle(fontSize: 30)),
      onPress: () {
        launchInBrowser(URL.baggou);
      });
}
