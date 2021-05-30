import 'package:aymeric/components/content.dart';
import 'package:aymeric/components/responsive.dart';
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
            child: Padding(
              padding: const EdgeInsets.all(8.0),
              child: Column(
                children: [
                  // Title Section
                  ResponsiveWidget(
                    desktop: Column(
                      children: [
                        Container(
                          height: 50,
                        ),
                        Row(
                          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                          children: [titleText(), titleImage()],
                        ),
                      ],
                    ),
                    phone: Column(
                      children: [titleText(), titleImage(size: 1.2)],
                    ),
                  ),
                  // Skill section
                  skillTitle(),
                  ResponsiveWidget(
                    phone: Column(
                      children: [skillText(), skillImage(size: 1.2)],
                    ),
                    desktop: Row(
                      mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                      children: [skillImage(), skillText()],
                    ),
                  ),
                  // Tools section
                  toolsTitle(),
                  ResponsiveWidget(
                      phone: toolsImage(size: 1), desktop: toolsImage()),
                  // Activities section
                  activitiesTitle(),
                  ResponsiveWidget(
                    phone: Column(
                      mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                      children: [workText(), workImage(size: 1.2)],
                    ),
                    desktop: Row(
                      mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                      children: [
                        Container(width: Get.width / 2, child: workText()),
                        workImage()
                      ],
                    ),
                  ),
                  Container(
                    height: 50,
                  ),
                  ResponsiveWidget(
                    phone: Column(
                      children: [
                        Container(child: studyText()),
                        studyImage(size: 1.2)
                      ],
                    ),
                    desktop: Row(
                      mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                      children: [
                        studyImage(),
                        Container(width: Get.width / 2, child: studyText())
                      ],
                    ),
                  ),
                  // Portfolio section
                  portfolioTitle(),
                  ResponsiveWidget(
                    phone: Column(
                      mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                      children: [bonap(size: 1), baggou(size: 1)],
                    ),
                    desktop: Row(
                      mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                      children: [bonap(), baggou()],
                    ),
                  ),
                  // Hobbies section
                  hobbiesTitle(),
                  ResponsiveWidget(
                      phone: hobbiesImage(size: 1), desktop: hobbiesImage()),

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
      ),
    );
  }
}
