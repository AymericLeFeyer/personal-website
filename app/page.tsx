import { AppIcon, PictureIcon } from "@/src/features/apps/AppIcon";
import { MobileFrame } from "@/src/features/device-frame/MobileFrame";

export default function Home() {
  const appTileWidth = 80;
  const pictureTileWidth = appTileWidth * 2 + 16;

  return (
    <main>
      <MobileFrame width={appTileWidth * 8}>
        <div className="flex flex-col gap-4">
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
                  link="Test"
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
          </div>
        </div>
      </MobileFrame>
    </main>
  );
}
