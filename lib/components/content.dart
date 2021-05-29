import 'package:aymeric/components/aymeric_icons.dart';
import 'package:aymeric/components/button.dart';
import 'package:aymeric/components/image.dart';
import 'package:aymeric/components/title.dart';
import 'package:flutter/material.dart';

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
    MyTitle(
      title: "Ingénieur informatique",
      size: 30,
    )
  ]);
}

Widget titleImage() {
  return image(asset: "logo.png");
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
      Text(
          "Ça ressemble à de la magie, pourtant ce ne sont que des lignes de code."),
      Text(
          "Mises bout à bout, elles permettent de réaliser de superbes projets."),
      Text("Je n'ai pas été à Poudlard mais je connais un tas de sorts !"),
    ],
  );
}

Widget skillImage() {
  return image(asset: "skills.png");
}

// Tools

Widget toolsTitle() {
  return MyTitle(
    title: "Outils",
  );
}

Widget toolsImage() {
  return image(asset: "tools.png", size: 2);
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
          padding: const EdgeInsets.only(bottom: 8.0),
          child: MyTitle(
            title: "Développeur alternant chez Progress-IT",
            size: 30.0,
          ),
        ),
        Padding(
          padding: const EdgeInsets.only(bottom: 8.0),
          child: Text(
              "Progress-IT est une société de services dans l'IT. Audit, accompagnement, réalisation de projets et formation sont au coeur de Progress-IT. "),
        ),
        Padding(
          padding: const EdgeInsets.only(bottom: 8.0),
          child: Text(
              "Développement mobile, web et backend. Je touche à tout chez Progress-IT, de la conception à la réalisation, je participe au développement d'applications intéressantes."),
        ),
        Padding(
          padding: const EdgeInsets.only(bottom: 8.0),
          child: Text(
              "La méthodologie agile est au cours de nos journées, j'apprends les ficelles du métier de Scrum Master et je fais tout pour que les projets se déroulent sans accrocs."),
        ),
        Padding(
            padding: const EdgeInsets.only(bottom: 8.0),
            child: Text(
                "Je travaille actuellement sur familyBOOK, un produit ayant pour but d'aider les personnes atteintes d'illectronisme à passer des visios avec leurs familles, à l'aide d'une interface pensée pour eux et des fonctionnalités adaptées."))
      ],
    ),
  );
}

Widget workImage() {
  return image(asset: "work.png", size: 3);
}

Widget studyText() {
  return Column(
    children: [
      MyTitle(
        title: "Étudiant à l'Université de Lille",
        size: 30.0,
      ),
      Padding(
        padding: const EdgeInsets.only(bottom: 8.0),
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

Widget studyImage() {
  return image(asset: "school.png", size: 3);
}

// Portfolio

Widget portfolioTitle() {
  return MyTitle(
    title: "Portfolio",
  );
}

Widget bonapImage() {
  return image(asset: "bonap.gif");
}

Widget baggouImage() {
  return image(asset: "baggou.png");
}

// Hobbies

Widget hobbiesTitle() {
  return MyTitle(
    title: "Loisirs",
  );
}

Widget hobbiesImage() {
  return image(asset: "hobbies.png", size: 2);
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
              onPress: () {})),
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
              onPressed: () {},
            ),
          ),
          Padding(
            padding: const EdgeInsets.all(8.0),
            child: IconButton(
              icon: Icon(AymericIcons.linkedin),
              iconSize: 64,
              onPressed: () {},
            ),
          ),
          Padding(
            padding: const EdgeInsets.all(8.0),
            child: IconButton(
              icon: Icon(AymericIcons.spotify),
              iconSize: 64,
              onPressed: () {},
            ),
          ),
        ],
      )
    ],
  );
}
