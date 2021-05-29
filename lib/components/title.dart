import 'package:flutter/material.dart';

class MyTitle extends StatelessWidget {
  final String title;
  final double size;

  const MyTitle({Key key, this.title, this.size = 50.0}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: EdgeInsets.only(
          bottom: size == 50 ? 32.0 : 8, top: size == 50 ? 32 : 8),
      child: Text(
        title,
        style: TextStyle(fontSize: size, color: Colors.blue),
      ),
    );
  }
}
