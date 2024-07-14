import type { PropsWithChildren } from "react";

export type MobileFrameProps = PropsWithChildren<{
  width: number;
}>;

export const MobileFrame = (props: MobileFrameProps) => {
  return (
    <div
      className={`h-[800px] w-[${props.width}px] bg-gray-200 pt-4 flex flex-col gap-2 items-center`}
    >
      <div>{props.children}</div>
    </div>
  );
};
