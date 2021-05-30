import 'package:aymeric/components/image.dart';
import 'package:aymeric/components/title.dart';
import 'package:flutter/material.dart';

Widget hobbiesDesktop() {
  return hobbiesImage();
}

Widget hobbiesPhone() {
  return hobbiesImage(size: 1);
}

Widget hobbiesTitle() {
  return MyTitle(
    title: "Loisirs",
  );
}

Widget hobbiesImage({size = 2}) {
  return image(asset: "hobbies.png", size: size);
}
