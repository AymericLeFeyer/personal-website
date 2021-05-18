import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';

class SkillsLogoDesk extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      width: 600,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        mainAxisAlignment: MainAxisAlignment.start,
        children: <Widget>[
          profile(),
          SizedBox(
            height: 20,
          ),
          SizedBox(
            height: 20,
          ),
        ],
      ),
    );
  }
}

class SkillsLogoTab extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      child: Container(
        width: 600,
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: <Widget>[
            profile(),
            SizedBox(
              height: 20,
            ),
            SizedBox(
              height: 20,
            ),
          ],
        ),
      ),
    );
  }
}

class SkillsLogoMob extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      child: Container(
        width: 600,
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: <Widget>[
            profile(),
            SizedBox(
              height: 20,
            ),
            SizedBox(
              height: 20,
            ),
          ],
        ),
      ),
    );
  }
}

profile() {
  return Column(
    mainAxisAlignment: MainAxisAlignment.start,
    children: [
      Text(
        "Qui suis-je ?",
        style:
            TextStyle(fontWeight: FontWeight.w800, height: 1.0, fontSize: 50),
        textAlign: TextAlign.center,
      ),
      SizedBox(
        height: 30,
      ),
      Text(
        "Étudiant en 1e année de master informatique à l'Université de Lille.",
        style: TextStyle(
          fontSize: 22,
        ),
      ),
      Text(
        "Je suis passionné par le monde de l'informatique et surtout le développement mobile et web. Sérieux, autonome et motivé, je peux aisément m'adapter à une techonologie et à une équipe",
        style: TextStyle(
          fontSize: 22,
        ),
      ),
      Text(
        "J'adore apprendre de nouvelles choses.",
        style: TextStyle(
          fontSize: 22,
        ),
      ),
    ],
  );
}
