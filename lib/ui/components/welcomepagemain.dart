import 'package:DeveloperFolio/ui/pages/components/socialNetworks.dart';
import 'package:flutter/material.dart';
import 'dart:js' as js;

class WelcomePageDesk extends StatelessWidget {
  const WelcomePageDesk({Key key}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return Container(
      width: 600,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: <Widget>[
          title(),
          SizedBox(
            height: 40,
          ),
          Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              facebook(),
              twitter(),
              linkedin(),
              github(),
            ],
          ),
          SizedBox(
            height: 40,
          ),
          Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              contactButton(),
              SizedBox(
                width: 50,
              ),
              seeResume(),
            ],
          ),
        ],
      ),
    );
  }
}

class WelcomePageTab extends StatelessWidget {
  const WelcomePageTab({Key key}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      child: Container(
        width: 600,
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: <Widget>[
            SizedBox(
              height: 40,
            ),
            title(),
            SizedBox(
              height: 20,
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                facebook(),
                twitter(),
                linkedin(),
                github(),
              ],
            ),
            SizedBox(
              height: 20,
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                contactButton(),
                SizedBox(
                  width: 20,
                ),
                seeResume()
              ],
            ),
          ],
        ),
      ),
    );
  }
}

class WelcomePageMob extends StatelessWidget {
  const WelcomePageMob({Key key}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      child: Container(
        width: 600,
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: <Widget>[
            SizedBox(
              height: 40,
            ),
            title(),
            SizedBox(
              height: 20,
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                facebook(),
                twitter(),
                linkedin(),
                github(),
              ],
            ),
            SizedBox(
              height: 20,
            ),
            Center(
              child: Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [contactButton()],
              ),
            ),
            SizedBox(
              height: 20,
            ),
            Center(
              child: Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [seeResume()],
              ),
            ),
          ],
        ),
      ),
    );
  }
}

Widget title() {
  return Column(
    children: [
      Center(
        child: Text(
          "Salut 👋",
          style:
              TextStyle(fontWeight: FontWeight.w800, height: 1.3, fontSize: 50),
          textAlign: TextAlign.justify,
        ),
      ),
      Center(
        child: Text(
          "Moi c'est Aymeric",
          style:
              TextStyle(fontWeight: FontWeight.w800, height: 1.3, fontSize: 50),
          textAlign: TextAlign.justify,
        ),
      ),
      SizedBox(
        height: 30,
      ),
      Center(
        child: Text(
          //TODO toruver une phrase stylé
          "Développeur fullstack en continuelle évolution",
          style: TextStyle(
            fontSize: 20,
            height: 1.7,
          ),
          textAlign: TextAlign.center,
        ),
      ),
    ],
  );
}

Widget contactButton() {
  return Expanded(
    child: GestureDetector(
      onTap: () =>
          //TODO
          {},
      child: Container(
        padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 15),
        child: Text(
          'Contacte moi',
          textAlign: TextAlign.center,
          style: TextStyle(
            fontSize: 18,
            fontWeight: FontWeight.w800,
            color: Colors.white,
          ),
        ),
        decoration: BoxDecoration(
          color: Colors.blueAccent,
          borderRadius: BorderRadius.circular(5),
        ),
      ),
    ),
  );
}

Widget seeResume() {
  return Expanded(
    child: GestureDetector(
      onTap: () {
        js.context.callMethod("open", [
          "https://drive.google.com/file/d/1PZYWMJEQMLIh5g5mXnENQcOL1vlunq6_/view?usp=sharing"
        ]);
      },
      child: Container(
        padding: const EdgeInsets.symmetric(horizontal: 40, vertical: 15),
        child: Text(
          'Mon CV',
          textAlign: TextAlign.center,
          style: TextStyle(
            fontSize: 18,
            fontWeight: FontWeight.w800,
            color: Colors.white,
          ),
        ),
        decoration: BoxDecoration(
          color: Colors.blueAccent,
          borderRadius: BorderRadius.circular(5),
        ),
      ),
    ),
  );
}
