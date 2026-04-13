import type { HTMLAttributes, ReactNode } from "react";

type RevealProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  delay?: number;
};

export function Reveal({ children, delay, ...props }: RevealProps) {
  void delay;
  return <div {...props}>{children}</div>;
}
