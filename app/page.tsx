import { AppIcon } from "@/src/features/apps/AppIcon";
import { MobileFrame } from "@/src/features/device-frame/MobileFrame";

export default function Home() {
  return (
    <main>
      <MobileFrame>
        <div className="flex gap-2">
          <AppIcon
            name="Test"
            icon="/see-no-evil.png"
            backgroundColor="#00A1FF"
            link="Test"
          />
          <AppIcon
            name="Test2"
            icon="/see-no-evil.png"
            backgroundColor="#005566"
            link="Test"
          />
          <AppIcon
            name="Test3"
            icon="/see-no-evil.png"
            backgroundColor="#FA23E1"
            link="Test"
          />{" "}
          <AppIcon
            name="Test3"
            icon="/see-no-evil.png"
            backgroundColor="#FA23E1"
            link="Test"
          />{" "}
        </div>
        <div className="flex gap-2 justify-start">
          <AppIcon
            name="Test3"
            icon="/see-no-evil.png"
            backgroundColor="#FA23E1"
            link="Test"
          />
        </div>
      </MobileFrame>
    </main>
  );
}
