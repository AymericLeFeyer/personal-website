import 'package:flutter/material.dart';
import 'package:get/get.dart';

Widget image({asset, size = 3}) {
  return Image.asset(
    "assets/$asset",
    width: Get.width / size,
  );
}
