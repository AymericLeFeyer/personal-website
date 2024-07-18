import { AppIcon } from "./AppIcon";

export type AppShortcutsProps = {
  size: number;
  apps: Array<{
    name: string;
    image: string;
    backgroundColor: string;
    link: string;
  }>;
};

export const AppShortcuts = (props: AppShortcutsProps) => {
  return (
    <div className="flex flex-grow-0 mb-4 gap-4 p-4 bg-gray-300 rounded-3xl">
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
  );
};
