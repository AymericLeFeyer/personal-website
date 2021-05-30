import 'package:aymeric/components/image.dart';
import 'package:aymeric/components/title.dart';
import 'package:flutter/widgets.dart';

Widget toolsDesktop() {
  return toolsImage();
}

Widget toolsPhone() {
  return toolsImage(size: 1);
}

Widget toolsTitle() {
  return MyTitle(
    title: "Outils",
  );
}

Widget toolsImage({size = 2}) {
  return image(asset: "tools.png", size: size);
}
