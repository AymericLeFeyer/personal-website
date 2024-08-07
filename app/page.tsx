import { AppFolder } from "@/src/features/apps/AppFolder";
import { AppIcon, PictureIcon } from "@/src/features/apps/AppIcon";
import { AppShortcuts } from "@/src/features/apps/AppShortcuts";
import { MobileFrame } from "@/src/features/device-frame/MobileFrame";
import { Search } from "@/src/features/search/Search";

export default function Home() {
  const appTileWidth = 80;
  const pictureTileWidth = appTileWidth * 2 + 16;

  return (
    <main>
      <MobileFrame width={appTileWidth * 8}>
        <div className="flex flex-col gap-4 flex-grow">
          <div className="flex gap-4">
            <PictureIcon
              name="Aymeric"
              image="/pictures/me.png"
              backgroundColor="#FA23E1"
              link="Test"
              width={pictureTileWidth}
              height={pictureTileWidth}
            />
            <div className="flex flex-col gap-4">
              <PictureIcon
                name=""
                image="/pictures/name.png"
                backgroundColor="#FA23E1"
                link="Test"
                width={pictureTileWidth}
                height={appTileWidth}
              />
              <div className="flex gap-4">
                <AppIcon
                  name="Hello"
                  image="/emojis/waving-hand.png"
                  backgroundColor="#FA23E1"
                  link="now"
                  width={appTileWidth}
                />
                <AppIcon
                  name="Portfolio"
                  image="/emojis/rocket.png"
                  backgroundColor="#FA23E1"
                  link="Test"
                  width={appTileWidth}
                />
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <AppIcon
              name="Technos"
              image="/emojis/man-technologist.png"
              backgroundColor="#FA23E1"
              link="Test"
              width={appTileWidth}
            />
            <AppIcon
              name="Missions"
              image="/emojis/briefcase.png"
              backgroundColor="#FA23E1"
              link="Test"
              width={appTileWidth}
            />
            <AppIcon
              name="Talks"
              image="/emojis/microphone.png"
              backgroundColor="#FA23E1"
              link="Test"
              width={appTileWidth}
            />
            <AppIcon
              name="YouTube"
              image="/logos/youtube.png"
              backgroundColor="#FA23E1"
              link="Test"
              width={appTileWidth}
            />
          </div>
          <div className="flex gap-4">
            <AppIcon
              name="Études"
              image="/emojis/man-student.png"
              backgroundColor="#FA23E1"
              link="Test"
              width={appTileWidth}
            />
            <AppIcon
              name="Localisation"
              image="/emojis/world-map.png"
              backgroundColor="#FA23E1"
              link="Test"
              width={appTileWidth}
            />
            <AppFolder
              size={appTileWidth}
              name="Loisirs"
              apps={[
                {
                  name: "Jeux vidéos",
                  image: "/emojis/video-game.png",
                  backgroundColor: "#FA23E1",
                  link: "Test",
                },
                {
                  name: "Jeux société",
                  image: "/emojis/game-die.png",
                  backgroundColor: "#FA23E1",
                  link: "Test",
                },
                {
                  name: "Voyages",
                  image: "/emojis/airplane.png",
                  backgroundColor: "#FA23E1",
                  link: "Test",
                },
                {
                  name: "Cinéma",
                  image: "/emojis/popcorn.png",
                  backgroundColor: "#FA23E1",
                  link: "Test",
                },
                {
                  name: "Musique",
                  image: "/logos/spotify.png",
                  backgroundColor: "#FA23E1",
                  link: "Test",
                },
                {
                  name: "Domotique",
                  image: "/emojis/house.png",
                  backgroundColor: "#FA23E1",
                  link: "Test",
                },
                {
                  name: "Bricolage",
                  image: "/emojis/house.png",
                  backgroundColor: "#FA23E1",
                  link: "Test",
                },
              ]}
            />
            <AppFolder
              size={appTileWidth}
              name="Réseaux"
              apps={[
                {
                  name: "GitHub",
                  image: "/logos/github.png",
                  backgroundColor: "#FA23E1",
                  link: "Test",
                },
                {
                  name: "LinkedIn",
                  image: "/logos/linkedin.png",
                  backgroundColor: "#FA23E1",
                  link: "Test",
                },
                {
                  name: "Mail",
                  image: "/emojis/envelope.png",
                  backgroundColor: "#FA23E1",
                  link: "Test",
                },
                {
                  name: "Daily.dev",
                  image: "/logos/daily-dev.png",
                  backgroundColor: "#FA23E1",
                  link: "Test",
                },
                {
                  name: "Stk Overflow",
                  image: "/logos/stack-overflow.png",
                  backgroundColor: "#FA23E1",
                  link: "Test",
                },
                {
                  name: "Dev.to",
                  image: "/logos/dev-to.png",
                  backgroundColor: "#FA23E1",
                  link: "Test",
                },
                {
                  name: "Discord",
                  image: "/emojis/house.png",
                  backgroundColor: "#FA23E1",
                  link: "Test",
                },
              ]}
            />
          </div>
        </div>
        <Search />
        <AppShortcuts
          size={appTileWidth}
          apps={[
            {
              name: "",
              image: "/logos/baraque.png",
              backgroundColor: "#FA23E1",
              link: "Test",
            },
            {
              name: "",
              image: "/emojis/game-die.png",
              backgroundColor: "#FA23E1",
              link: "Test",
            },
            {
              name: "",
              image: "/emojis/airplane.png",
              backgroundColor: "#FA23E1",
              link: "Test",
            },
            {
              name: "",
              image: "/emojis/airplane.png",
              backgroundColor: "#FA23E1",
              link: "Test",
            },
          ]}
        />
      </MobileFrame>
    </main>
  );
}
