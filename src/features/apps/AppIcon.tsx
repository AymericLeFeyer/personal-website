import { cn } from "@/src/utils/utils";
import Image from "next/image";

export type AppIconProps = {
  name: string;
  icon: string;
  backgroundColor: string;
  link: string;
};

export const AppIcon = (props: AppIconProps) => {
  return (
    <div className="flex flex-col items-center">
      <div
        className={cn(
          `bg-[${props.backgroundColor}]`,
          "p-4 rounded-lg shadow-md"
        )}
        style={{ aspectRatio: "1 / 1" }}
      >
        <Image src={props.icon} alt={props.name} width={80} height={50} />
      </div>
      <p>{props.name}</p>
    </div>
  );
};
