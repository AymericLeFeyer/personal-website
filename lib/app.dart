import 'package:aymeric/content.dart';
import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';
import 'package:get/route_manager.dart';

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return GetMaterialApp(
        title: 'Aymeric LE FEYER',
        debugShowCheckedModeBanner: false,
        theme: ThemeData.light().copyWith(
            textTheme: Theme.of(context)
                .textTheme
                .apply(fontSizeFactor: 1.5, fontFamily: 'Pangolin')),
        darkTheme: ThemeData.dark().copyWith(
            textTheme: Theme.of(context).textTheme.apply(
                fontSizeFactor: 1.5,
                fontFamily: 'Pangolin',
                bodyColor: Colors.white,
                displayColor: Colors.white)),
        themeMode: ThemeMode.system,
        home: ContentPage());
  }
}
