import 'package:flutter/material.dart';

Widget MyButton({Widget content, Function onPress}) {
  return OutlinedButton(
    style: OutlinedButton.styleFrom(
      side: BorderSide(color: Colors.blue, width: 5),
    ),
    onPressed: onPress,
    child: Padding(padding: const EdgeInsets.all(8.0), child: content),
  );
}
