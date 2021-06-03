import 'package:aymeric/app.dart';
import 'package:aymeric/controllers/theme.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';

void main() {
  Get.lazyPut<ThemeController>(() => ThemeController());
  runApp(MyApp());
}
