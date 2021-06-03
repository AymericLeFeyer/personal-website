import 'package:url_launcher/url_launcher.dart';

class URL {
  static String bonap = "https://stelapix.github.io/BonapWeb/";
  static String baggou = "https://baggou.fr";
  static String dunfresh = "https://www.conhexa.com/fr/sites/dunfresh";
  static String mail = "mailto:lefeyer.aymeric@gmail.com";
  static String smola = "https://www.behance.net/smola_";
  static String github = "https://github.com/AymericLeFeyer";
  static String linkedin = "https://www.linkedin.com/in/aymericlefeyer/";
  static String spotify =
      "https://open.spotify.com/user/v3qrnw7xq5o64dgcc9ahofx33?si=e4e855ba19dc4741";
}

Future<void> launchInBrowser(String url) async {
  if (await canLaunch(url)) {
    await launch(
      url,
      forceSafariVC: false,
      forceWebView: false,
      headers: <String, String>{'my_header_key': 'my_header_value'},
    );
  } else {
    throw 'Could not launch $url';
  }
}
