import 'package:aymeric/content.dart';
import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        title: 'Aymeric LE FEYER',
        debugShowCheckedModeBanner: false,
        theme: ThemeData(
            textTheme: Theme.of(context)
                .textTheme
                .apply(fontSizeFactor: 1.5, fontFamily: 'Pangolin')),
        home: ContentPage());
  }
}
