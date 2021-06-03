import 'package:aymeric/controllers/theme.dart';
import 'package:aymeric/pages/home/content.dart';
import 'package:aymeric/utils/aymeric_icons.dart';
import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';
import 'package:get/get.dart';

class ContentPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    var _themeMode = ThemeController.to.themeMode.obs;
    if (Theme.of(context).brightness == Brightness.light) {
      _themeMode.value = ThemeMode.light;
    } else {
      _themeMode.value = ThemeMode.dark;
    }

    return Scaffold(
      body: SafeArea(
        child: Stack(
          children: [
            SingleChildScrollView(
                child: Center(
              child: Padding(
                  padding: const EdgeInsets.all(8.0), child: content(context)),
            )),
            Align(
                alignment: Alignment.topRight,
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.end,
                  children: [
                    Padding(
                      padding: const EdgeInsets.all(8.0),
                      child: IconButton(
                        tooltip: "Changer le thème",
                        icon: Obx(() => Icon(_themeMode.value == ThemeMode.dark
                            ? AymericIcons.wb_sunny
                            : AymericIcons.moon)),
                        onPressed: () {
                          if (_themeMode.value == ThemeMode.dark) {
                            _themeMode.value = ThemeMode.light;
                          } else {
                            _themeMode.value = ThemeMode.dark;
                          }
                          ThemeController.to.setThemeMode(_themeMode.value);
                        },
                      ),
                    ),
                  ],
                )),
          ],
        ),
      ),
    );
  }
}
