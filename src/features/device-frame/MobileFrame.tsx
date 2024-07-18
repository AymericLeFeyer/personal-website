import type { PropsWithChildren } from "react";

export type MobileFrameProps = PropsWithChildren<{
  width: number;
}>;

export const MobileFrame = (props: MobileFrameProps) => {
  return (
    <div
      className={` bg-gray-200 pt-4 flex flex-col gap-2 items-center`}
      style={{
        height: "100vh",
      }}
    >
      <div>{props.children}</div>
    </div>
  );
};
