import 'package:flutter/material.dart';
import 'package:responsive_builder/responsive_builder.dart';

class FooterPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return ScreenTypeLayout(
      desktop: FooterDesk(),
      tablet: FooterTab(),
      mobile: FooterMob(),
    );
  }
}

class FooterDesk extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      child: Center(child: footer()),
    );
  }
}

class FooterTab extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      child: Center(child: footer()),
    );
  }
}

class FooterMob extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      alignment: Alignment.center,
      child: Center(child: footer()),
    );
  }
}

footer() {
  return Row(
    mainAxisAlignment: MainAxisAlignment.center,
    children: [
      Text(
        'Aymeric LE FEYER',
        style: TextStyle(
            fontSize: 18,
            fontWeight: FontWeight.normal,
            color: Colors.grey.shade500),
      )
    ],
  );
}
