import 'package:flutter/widgets.dart';

class ResponsiveWidget extends StatelessWidget {
  final Widget phone;
  final Widget tablet;
  final Widget desktop;

  final double phoneMaxWidth = 600;
  final double tabletMaxWidth = 960;

  const ResponsiveWidget(
      {Key key, @required this.phone, @required this.desktop, this.tablet})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    return LayoutBuilder(builder: (context, constraints) {
      if (constraints.maxWidth > tabletMaxWidth) {
        return desktop;
      } else if (constraints.maxWidth > phoneMaxWidth) {
        return tablet == null ? desktop : tablet;
      } else {
        return phone;
      }
    });
  }
}
