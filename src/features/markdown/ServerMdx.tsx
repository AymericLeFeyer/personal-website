import { MDXRemote } from "next-mdx-remote-client/rsc";
import { Suspense } from "react";
import { rehypePlugins, remarkPlugins } from "./markdown.config";
import { cn } from "@/src/utils/utils";
import { Loader } from "lucide-react";

export type ServerMdxProps = {
  source: string;
  className?: string;
};

// * If you want to add custom component, such as an "EmailForm", you can add it to the MdxComponent object.
const MdxComponent = {} satisfies Record<string, React.ComponentType>;

export const ServerMdx = (props: ServerMdxProps) => {
  return (
    <div className={cn("prose dark:prose-invert", props.className)}>
      <Suspense fallback={<Loader />}>
        <RenderMdx {...props} />
      </Suspense>
    </div>
  );
};

const RenderMdx = (props: ServerMdxProps) => {
  return (
    <MDXRemote
      source={props.source}
      components={MdxComponent}
      options={{
        mdxOptions: {
          remarkPlugins: remarkPlugins,
          rehypePlugins: rehypePlugins,
          format: "mdx",
        },
      }}
    />
  );
};
