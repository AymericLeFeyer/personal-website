import 'package:aymeric/components/image.dart';
import 'package:aymeric/components/title.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';

Widget hobbiesDesktop() {
  return hobbiesImage();
}

Widget hobbiesPhone() {
  return hobbiesImage(size: 3.5);
}

Widget hobbiesTitle() {
  return MyTitle(
    title: "Loisirs",
  );
}

Widget hobbiesImage({size = 6}) {
  return Container(
    width: Get.width,
    child: Row(
      mainAxisAlignment: MainAxisAlignment.spaceEvenly,
      children: [
        image(asset: "games.png", size: size),
        image(asset: "food.png", size: size),
        image(asset: "music.png", size: size),
      ],
    ),
  );
}
