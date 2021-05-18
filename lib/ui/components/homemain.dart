import 'package:DeveloperFolio/ui/components/imagesmain/images.dart';
import 'package:DeveloperFolio/ui/components/welcomepagemain.dart';
import 'package:DeveloperFolio/ui/layouts/ContactCenter.dart';
import 'package:DeveloperFolio/ui/layouts/Education.dart';
import 'package:DeveloperFolio/ui/layouts/skills_desk.dart';
import 'package:DeveloperFolio/ui/pages/footer.dart';
import 'package:DeveloperFolio/ui/pages/progressbars/progressbarmain.dart';
import 'package:DeveloperFolio/ui/pages/progressbars/progresspage.dart';
import 'package:DeveloperFolio/ui/pages/skills/skillslogosmain.dart';
import 'package:DeveloperFolio/ui/pages/welcome.dart';
import 'package:flutter/material.dart';

class HomeDesktop extends StatefulWidget {
  const HomeDesktop({Key key}) : super(key: key);

  @override
  _HomeDesktopState createState() => _HomeDesktopState();
}

class _HomeDesktopState extends State<HomeDesktop> {
  var _controller = ScrollController();

  @override
  void initState() {
    // TODO: implement initState
    super.initState();
  }

  @override
  void dispose() {
    // TODO: implement dispose
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Scrollbar(
        controller: _controller,
        child: SingleChildScrollView(
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              Flexible(
                child: ListView(
                  physics: NeverScrollableScrollPhysics(),
                  shrinkWrap: true,
                  children: [
                    Row(
                      children: <Widget>[
                        Expanded(child: WelcomePage()),
                        Expanded(child: OneDesk()),
                      ],
                    ),
                    SizedBox(
                      height: 75,
                    ),
                    Row(
                      children: <Widget>[
                        Expanded(child: TwoDesk()),
                        Expanded(child: SkillsLogoDesk()),
                      ],
                    ),
                    SizedBox(
                      height: 75,
                    ),
                    Row(
                      children: <Widget>[
                        Expanded(child: SkillBarDesk()),
                        Expanded(child: ThreeDesk()),
                      ],
                    ),
                    SizedBox(
                      height: 75,
                    ),
                    Row(
                      children: [
                        Expanded(child: EducationDesk()),
                      ],
                    ),
                    SizedBox(
                      height: 75,
                    ),
                    SizedBox(
                      height: 75,
                    ),
                    SizedBox(
                      height: 75,
                    ),
                    Row(
                      children: <Widget>[
                        Expanded(child: ContactCenterDesk()),
                        Expanded(child: FourDesk()),
                      ],
                    ),
                    SizedBox(
                      height: 100,
                    ),
                    Row(
                      children: [
                        Expanded(child: FooterPage()),
                      ],
                    ),
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}

class HomeMobile extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      child: Column(
        mainAxisSize: MainAxisSize.min,
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Flexible(
            child: ListView(
              shrinkWrap: true,
              physics: NeverScrollableScrollPhysics(),
              children: <Widget>[
                WelcomePageMob(),
                OneMob(),
                SkillsMob(),
                ProgressPage(),
                EducationMob(),
                ContactCenterMob(),
                SizedBox(
                  height: 50,
                ),
                FooterPage()
              ],
            ),
          ),
        ],
      ),
    );
  }
}

class HomeTab extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      child: Column(
        mainAxisSize: MainAxisSize.min,
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Flexible(
            child: ListView(
              shrinkWrap: true,
              physics: NeverScrollableScrollPhysics(),
              children: <Widget>[
                WelcomePageTab(),
                OneTab(),
                SkillsTab(),
                ProgressPage(),
                EducationTab(),
                ContactCenterTab(),
                SizedBox(
                  height: 50,
                ),
                FooterMob(),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
