import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'dart:js' as js;

Widget facebook() {
  return Expanded(
    child: Container(
        width: 60,
        height: 60,
        child: IconButton(
          icon: Icon(
            FontAwesomeIcons.facebook,
            color: Colors.blue,
            size: 40,
          ),
          onPressed: () {
            js.context
                .callMethod("open", ["https://www.facebook.com/naveenjujaray"]);
          },
        )),
  );
}

Widget twitter() {
  return Expanded(
    child: Container(
      width: 60,
      height: 60,
      child: GestureDetector(
        child: Icon(
          FontAwesomeIcons.twitter,
          color: Colors.lightBlue,
          size: 40,
        ),
        onTap: () {
          js.context.callMethod("open", ["https://twitter.com/naveenjujaray"]);
        },
      ),
    ),
  );
}

Widget linkedin() {
  return Expanded(
    child: Container(
        width: 60,
        height: 60,
        child: IconButton(
          icon: Icon(
            FontAwesomeIcons.linkedin,
            color: Color.fromRGBO(40, 103, 178, 1),
            size: 40,
          ),
          onPressed: () {
            js.context.callMethod(
                "open", ["https://www.linkedin.com/in/naveenjujaray"]);
          },
        )),
  );
}

Widget github() {
  return Expanded(
    child: Container(
        width: 60,
        height: 60,
        child: IconButton(
          icon: Icon(
            FontAwesomeIcons.github,
            size: 40,
          ),
          onPressed: () {
            js.context
                .callMethod("open", ["https://www.github.com/naveenjujaray"]);
          },
        )),
  );
}
