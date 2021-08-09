import 'package:aymeric/components/responsive.dart';
import 'package:aymeric/pages/home/activities.dart';
import 'package:aymeric/pages/home/footer.dart';
import 'package:aymeric/pages/home/hobbies.dart';
import 'package:aymeric/pages/home/portfolio.dart';
import 'package:aymeric/pages/home/skills.dart';
import 'package:aymeric/pages/home/title.dart';
import 'package:aymeric/pages/home/tools.dart';
import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';

Widget content(BuildContext context) {
  return Column(
    children: [
      // Title Section
      ResponsiveWidget(
        desktop: titleDesktop(),
        phone: titlePhone(),
      ),
      // Skill section
      skillTitle(),
      ResponsiveWidget(
        phone: skillPhone(),
        desktop: skillDesktop(),
      ),
      // Tools section
      toolsTitle(),
      ResponsiveWidget(phone: toolsPhone(), desktop: toolsDesktop()),
      // Activities section
      activitiesTitle(),
      ResponsiveWidget(
        phone: workPhone(),
        desktop: workDesktop(),
      ),
      Container(
        height: 50,
      ),
      ResponsiveWidget(
        phone: schoolPhone(),
        desktop: schoolDesktop(),
      ),
      // Portfolio section
      portfolioTitle(),
      ResponsiveWidget(
        phone: portfolioPhone(),
        desktop: portfolioDesktop(),
      ),
      // Hobbies section
      hobbiesTitle(),
      ResponsiveWidget(phone: hobbiesPhone(), desktop: hobbiesDesktop()),

      Container(
        height: 50,
      ),
      footer(),
      Container(
        height: 50,
      ),
      credits(context),
      Container(
        height: 20,
      ),
      // company(context),
    ],
  );
}
