import 'package:aymeric/components/image.dart';
import 'package:aymeric/components/title.dart';
import 'package:flutter/widgets.dart';

Widget titleDesktop() {
  return Column(
    children: [
      Container(
        height: 50,
      ),
      Row(
        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
        children: [titleText(), titleImage()],
      ),
    ],
  );
}

Widget titlePhone() {
  return Column(
    children: [
      titleText(),
      Container(
        height: 20,
      ),
      titleImage(size: 1.2)
    ],
  );
}

Widget titleText() {
  return Column(children: [
    MyTitle(
      title: "Hello, World.",
    ),
    MyTitle(
      title: "Moi c'est Aymeric",
      size: 30,
    ),
    Text("Ingénieur informatique", style: TextStyle(fontSize: 30)),
    Text("Développeur Mobile & Web", style: TextStyle(fontSize: 30)),
  ]);
}

Widget titleImage({size = 3}) {
  return image(asset: "logo.png", size: size);
}
