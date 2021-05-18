import 'package:flutter/material.dart';
import 'package:flutter_rounded_progress_bar/flutter_rounded_progress_bar.dart';
import 'package:flutter_rounded_progress_bar/rounded_progress_bar_style.dart';

class SkillBarDesk extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      width: 700,
      child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: progressBars()),
    );
  }
}

class SkillBarTab extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      child: Container(
        width: 600,
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: progressBars(),
        ),
      ),
    );
  }
}

class SkillBarMob extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      child: Container(
        width: 600,
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: progressBars(),
        ),
      ),
    );
  }
}

progressBars() {
  return [
    Text(
      'Compétences',
      style: TextStyle(fontWeight: FontWeight.w600, fontSize: 32),
    ),
    SizedBox(
      height: 30,
    ),
    Text(
      'Mobile',
      style: TextStyle(fontSize: 18),
    ),
    RoundedProgressBar(
      style: RoundedProgressBarStyle(borderWidth: 0, widthShadow: 0),
      margin: EdgeInsets.symmetric(vertical: 16),
      borderRadius: BorderRadius.circular(24),
      percent: 90,
      childCenter: Text(
        "Flutter - Android",
        style: TextStyle(fontSize: 18),
      ),
    ),
    Text(
      'Web',
      style: TextStyle(fontSize: 18),
    ),
    RoundedProgressBar(
      style: RoundedProgressBarStyle(borderWidth: 0, widthShadow: 0),
      margin: EdgeInsets.symmetric(vertical: 16),
      borderRadius: BorderRadius.circular(24),
      percent: 75,
      childCenter: Text(
        "VueJS",
        style: TextStyle(fontSize: 18),
      ),
    ),
    Text(
      'Back',
      style: TextStyle(fontSize: 18),
    ),
    RoundedProgressBar(
      style: RoundedProgressBarStyle(borderWidth: 0, widthShadow: 0),
      margin: EdgeInsets.symmetric(vertical: 16),
      borderRadius: BorderRadius.circular(24),
      percent: 60,
      childCenter: Text(
        "NodeJS - Django",
        style: TextStyle(fontSize: 18),
      ),
    ),
    Text(
      'Base de données',
      style: TextStyle(fontSize: 18),
    ),
    RoundedProgressBar(
      style: RoundedProgressBarStyle(borderWidth: 0, widthShadow: 0),
      margin: EdgeInsets.symmetric(vertical: 16),
      borderRadius: BorderRadius.circular(24),
      percent: 60,
      childCenter: Text(
        "MongoDB - PostgresSQL",
        style: TextStyle(fontSize: 18),
      ),
    ),
  ];
}
