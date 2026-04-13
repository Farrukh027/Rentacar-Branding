import type { ElementType, ReactNode } from "react";

import { cn } from "@/lib/utils";

type ContainerProps<T extends ElementType = "div"> = {
  as?: T;
  className?: string;
  children: ReactNode;
};

export function Container<T extends ElementType = "div">({
  as,
  className,
  children
}: ContainerProps<T>) {
  const Component = as ?? "div";

  return <Component className={cn("site-container", className)}>{children}</Component>;
}
