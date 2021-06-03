import 'package:flutter/material.dart';
import 'package:get/get.dart';

class ThemeController extends GetxController {
  static ThemeController get to => Get.find();

  ThemeMode _themeMode;

  ThemeMode get themeMode => _themeMode;

  Future<void> setThemeMode(ThemeMode themeMode) async {
    Get.changeThemeMode(themeMode);
    _themeMode = themeMode;
    update();
  }
}
