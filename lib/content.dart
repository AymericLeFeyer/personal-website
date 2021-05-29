import 'package:aymeric/components/content.dart';
import 'package:aymeric/components/title.dart';
import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';
import 'package:get/get.dart';

class ContentPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: SingleChildScrollView(
          child: Center(
            child: Column(
              children: [
                Container(
                  height: 50,
                ),
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                  children: [titleText(), titleImage()],
                ),
                skillTitle(),
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                  children: [skillImage(), skillText()],
                ),
                toolsTitle(),
                toolsImage(),
                activitiesTitle(),
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                  children: [
                    Container(width: Get.width / 2, child: workText()),
                    workImage()
                  ],
                ),
                Container(
                  height: 50,
                ),
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                  children: [
                    studyImage(),
                    Container(width: Get.width / 2, child: studyText())
                  ],
                ),
                portfolioTitle(),
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                  children: [bonap(), baggou()],
                ),
                hobbiesTitle(),
                hobbiesImage(),
                Container(
                  height: 100,
                ),
                footer(),
                Container(
                  height: 100,
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
