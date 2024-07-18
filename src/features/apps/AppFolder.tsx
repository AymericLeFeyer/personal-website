"use client";

import { useState, type PropsWithChildren } from "react";
import { AppIcon, SmallAppIcon } from "./AppIcon";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { titlOptions } from "@/src/utils/titl-options";
import { Tilt } from "react-tilt";

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
    <>
      <Dialog>
        <DialogTrigger>
          <Tilt options={titlOptions}>
            <div className="flex flex-col items-center">
              <div
                className={`bg-gray-300 flex gap-1 flex-wrap rounded-xl p-1 `}
                onClick={() => setOpen(true)}
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
              <p className="text-xs mt-1">{props.name} </p>
            </div>
          </Tilt>
        </DialogTrigger>
        <DialogContent
          className="p-8"
          style={{ width: props.size * 4.25, height: props.size * 4.85 }}
        >
          <div className="flex gap-4 flex-wrap">
            {props.apps.map((app) => (
              <AppIcon
                key={app.name}
                name={app.name}
                image={app.image}
                backgroundColor={app.backgroundColor}
                link={app.link}
                width={props.size}
              />
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
