import 'package:aymeric/components/aymeric_icons.dart';
import 'package:aymeric/components/button.dart';
import 'package:aymeric/components/image.dart';
import 'package:aymeric/components/title.dart';
import 'package:aymeric/url.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';

// Title

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

// Skills

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

// Tools

Widget toolsTitle() {
  return MyTitle(
    title: "Outils",
  );
}

Widget toolsImage({size = 2}) {
  return image(asset: "tools.png", size: size);
}

// Activities

Widget activitiesTitle() {
  return MyTitle(
    title: "Activités",
  );
}

Widget workText() {
  return Container(
    child: Column(
      children: [
        Padding(
          padding: const EdgeInsets.all(8.0),
          child: MyTitle(
            title: "Développeur alternant chez Progress-IT",
            size: 30.0,
          ),
        ),
        Padding(
          padding: const EdgeInsets.all(8.0),
          child: Text(
              "Progress-IT est une société de services dans l'IT. Audit, accompagnement, réalisation de projets et formation sont au coeur de Progress-IT. "),
        ),
        Padding(
          padding: const EdgeInsets.all(8.0),
          child: Text(
              "Développement mobile, web et backend. Je touche à tout chez Progress-IT, de la conception à la réalisation, je participe au développement d'applications intéressantes."),
        ),
        Padding(
          padding: const EdgeInsets.all(8.0),
          child: Text(
              "La méthodologie agile est au centre de nos journées, j'apprends les ficelles du métier de Scrum Master et je fais tout pour que les projets se déroulent sans accrocs."),
        ),
      ],
    ),
  );
}

Widget workImage({size = 3}) {
  return image(asset: "work.png", size: size);
}

Widget studyText() {
  return Column(
    children: [
      MyTitle(
        title: "Étudiant à l'Université de Lille",
        size: 30.0,
      ),
      Padding(
        padding: const EdgeInsets.all(8.0),
        child: Text(
            "J'étudie actuellement l'informatique et plus spécialement le développeur web & mobile à l'Université de Lille dans le cadre du Master E-Services. "),
      ),
      Padding(
        padding: const EdgeInsets.only(bottom: 8.0),
        child: Text(
            "C'est une occasion pour moi de finir l'apprentissage des notions basiques avant de rentrer à temps plein dans le monde du travail."),
      ),
      Padding(
        padding: const EdgeInsets.only(bottom: 8.0),
        child: Text(
            "L'alternance est une chance et me conforte dans mon idée de devenir développeur."),
      )
    ],
  );
}

Widget studyImage({size = 3}) {
  return image(asset: "school.png", size: size);
}

// Portfolio

Widget portfolioTitle() {
  return MyTitle(
    title: "Portfolio",
  );
}

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

// Hobbies

Widget hobbiesTitle() {
  return MyTitle(
    title: "Loisirs",
  );
}

Widget hobbiesImage({size = 2}) {
  return image(asset: "hobbies.png", size: size);
}

// Footer

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
