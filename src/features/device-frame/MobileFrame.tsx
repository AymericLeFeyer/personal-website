import type { PropsWithChildren } from "react";

export type MobileFrameProps = PropsWithChildren<{}>;

export const MobileFrame = (props: MobileFrameProps) => {
  return (
    <div className="w-[500px] h-[800px] bg-gray-200 flex flex-col gap-2 items-center">
      <div>{props.children}</div>
    </div>
  );
};
