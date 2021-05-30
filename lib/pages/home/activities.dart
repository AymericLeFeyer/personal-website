import 'package:aymeric/components/image.dart';
import 'package:aymeric/components/title.dart';
import 'package:flutter/widgets.dart';
import 'package:get/get.dart';

Widget workDesktop() {
  return Row(
    mainAxisAlignment: MainAxisAlignment.spaceEvenly,
    children: [Container(width: Get.width / 2, child: workText()), workImage()],
  );
}

Widget workPhone() {
  return Column(
    mainAxisAlignment: MainAxisAlignment.spaceEvenly,
    children: [workText(), workImage(size: 1.2)],
  );
}

Widget schoolDesktop() {
  return Row(
    mainAxisAlignment: MainAxisAlignment.spaceEvenly,
    children: [
      studyImage(),
      Container(width: Get.width / 2, child: studyText())
    ],
  );
}

Widget schoolPhone() {
  return Column(
    children: [Container(child: studyText()), studyImage(size: 1.2)],
  );
}

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
