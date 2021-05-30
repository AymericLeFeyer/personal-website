import 'package:aymeric/components/image.dart';
import 'package:aymeric/components/title.dart';
import 'package:flutter/widgets.dart';

Widget skillDesktop() {
  return Row(
    mainAxisAlignment: MainAxisAlignment.spaceEvenly,
    children: [skillImage(), skillText()],
  );
}

Widget skillPhone() {
  return Column(
    children: [skillText(), skillImage(size: 1.2)],
  );
}

Widget skillTitle() {
  return MyTitle(
    title: "Compétences",
  );
}

Widget skillText() {
  return Column(
    children: [
      Padding(
        padding: const EdgeInsets.all(8.0),
        child: Text(
            "Ça ressemble à de la magie, pourtant ce ne sont que des lignes de code."),
      ),
      Padding(
        padding: const EdgeInsets.all(8.0),
        child: Text(
            "Mises bout à bout, elles permettent de réaliser de superbes projets."),
      ),
      Padding(
        padding: const EdgeInsets.all(8.0),
        child: Text(
            "Je n'ai pas été à Poudlard mais je connais un tas de sorts !"),
      ),
    ],
  );
}

Widget skillImage({size = 3}) {
  return image(asset: "skills.png", size: size);
}
