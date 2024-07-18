"use client";

import { useState, type PropsWithChildren } from "react";
import { SmallAppIcon } from "./AppIcon";

export type AppFolderProps = {
  size: number;
  name: string;
  apps: Array<{
    name: string;
    image: string;
    backgroundColor: string;
    link: string;
  }>;
};

export const AppFolder = (props: AppFolderProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col items-center">
      <div
        className={`bg-gray-300 flex gap-1 flex-wrap rounded-xl p-1`}
        onClick={() => setOpen(!open)}
        style={{
          width: `${props.size}px`,
          height: `${props.size}px`,
        }}
      >
        {props.apps.map((app) => (
          <SmallAppIcon
            key={app.name}
            name={app.name}
            image={app.image}
            backgroundColor={app.backgroundColor}
            link={app.link}
            width={props.size}
          />
        ))}
      </div>
      <p className="text-sm">{props.name} </p>
    </div>
  );
};
