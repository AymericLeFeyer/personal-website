import 'package:aymeric/pages/home/content.dart';
import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';

class ContentPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: SingleChildScrollView(
          child: Center(
            child:
                Padding(padding: const EdgeInsets.all(8.0), child: content()),
          ),
        ),
      ),
    );
  }
}
