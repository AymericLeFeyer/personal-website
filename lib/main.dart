import 'package:aymeric/app.dart';
import 'package:aymeric/controllers/theme.dart';
import 'package:flutter/material.dart';
import 'package:flutter_web_plugins/flutter_web_plugins.dart';
import 'package:get/get.dart';

void main() {
  setUrlStrategy(PathUrlStrategy());
  Get.lazyPut<ThemeController>(() => ThemeController());
  runApp(MyApp());
}
