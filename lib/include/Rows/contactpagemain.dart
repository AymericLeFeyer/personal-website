import 'package:DeveloperFolio/include/Rows/welcomepagemain.dart';
import 'package:DeveloperFolio/include/socialNetworks.dart';
import 'package:flutter/material.dart';
import 'dart:js' as js;

import 'package:font_awesome_flutter/font_awesome_flutter.dart';

class ContactPageDesk extends StatelessWidget {
  const ContactPageDesk({Key key}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return Container(
      width: 400,
      child: Column(
          crossAxisAlignment: CrossAxisAlignment.start, children: contactBox()),
    );
  }
}

class ContactPageTab extends StatelessWidget {
  const ContactPageTab({Key key}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      child: Container(
        child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: contactBox()),
      ),
    );
  }
}

class ContactPageMob extends StatelessWidget {
  const ContactPageMob({Key key}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      child: Container(
        width: 600,
        child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: contactBox()),
      ),
    );
  }
}

List<Widget> contactBox() {
  return [
    Text(
      "Me contacter",
      style: TextStyle(fontWeight: FontWeight.w800, height: 1.0, fontSize: 50),
      textAlign: TextAlign.center,
    ),
    SizedBox(
      height: 10,
    ),
    SizedBox(
      height: 10,
    ),
    Row(
      children: [
        Text(
          '☎️',
          style: TextStyle(color: Colors.grey, fontSize: 28),
        ),
        SizedBox(
          width: 10,
        ),
        Text(
          '+33 6 49 14 26 45',
          style: TextStyle(color: Colors.grey, fontSize: 28),
        ),
      ],
    ),
    SizedBox(
      height: 10,
    ),
    Row(
      children: [
        Text(
          '✉️',
          style: TextStyle(color: Colors.grey, fontSize: 28),
        ),
        SizedBox(
          width: 10,
        ),
        Text(
          'lefeyer.aymeric@gmail.com',
          style: TextStyle(color: Colors.grey, fontSize: 28),
        ),
      ],
    ),
    SizedBox(
      height: 20,
    ),
    Row(
      mainAxisAlignment: MainAxisAlignment.start,
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [twitter(), linkedin(), github()],
    ),
  ];
}
