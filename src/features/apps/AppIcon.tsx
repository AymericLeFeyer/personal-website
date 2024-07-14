"use client";

import { cn } from "@/src/utils/utils";
import Image from "next/image";
import Link from "next/link";
import { Tilt } from "react-tilt";

const defaultOptions = {
  reverse: true, // reverse the tilt direction
  perspective: 500, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};

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
          options={defaultOptions}
          className={cn(`bg-gray-100`, "p-4 rounded-xl shadow-md")}
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
      <p className="text-sm">{props.name}</p>
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
      <p className="text-sm">{props.name}</p>
    </div>
  );
};
