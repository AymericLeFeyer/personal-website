"use client";

import { titlOptions } from "@/src/utils/titl-options";
import { cn } from "@/src/utils/utils";
import Image from "next/image";
import Link from "next/link";
import { Tilt } from "react-tilt";

export type AppIconProps = {
  name: string;
  image: string;
  backgroundColor: string;
  link: string;
  width: number;
  height?: number;
};

export const AppIcon = (props: AppIconProps) => {
  return (
    <div className="flex flex-col items-center">
      <Link href={props.link}>
        <Tilt
          options={titlOptions}
          className={cn(`bg-gray-100`, " p-4 rounded-xl shadow-md")}
          style={{ aspectRatio: "1 / 1" }}
        >
          <Image
            src={props.image}
            alt={props.name}
            width={props.width - 32}
            height={props.height ?? props.width}
          />
        </Tilt>
      </Link>
      <p className="text-xs mt-1">{props.name} </p>
    </div>
  );
};

export const SmallAppIcon = (props: AppIconProps) => {
  return (
    <div className="flex flex-col items-center">
      <div
        className={cn(`bg-gray-100`, "p-1 rounded-md shadow-md", {})}
        style={{ aspectRatio: "1 / 1" }}
      >
        <Image
          src={props.image}
          alt={props.name}
          width={(props.width - 28) / 4}
          height={props.height ?? props.width}
        />
      </div>
    </div>
  );
};

export const PictureIcon = (props: AppIconProps) => {
  return (
    <div className="flex flex-col items-center">
      <Image
        className={`rounded-xl shadow-md`}
        src={props.image}
        alt={props.name}
        width={props.width}
        height={props.height}
      />
    </div>
  );
};
