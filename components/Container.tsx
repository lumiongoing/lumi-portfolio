import type { ElementType, HTMLAttributes, ReactNode } from "react";

type ContainerSize = "wide" | "content" | "narrow";

type ContainerProps = HTMLAttributes<HTMLElement> & {
  as?: ElementType;
  children: ReactNode;
  size?: ContainerSize;
};

const sizeClasses: Record<ContainerSize, string> = {
  wide: "site-container",
  content: "site-container site-container--content",
  narrow: "site-container site-container--narrow",
};

export function Container({
  as: Component = "div",
  children,
  className,
  size = "wide",
  ...props
}: ContainerProps) {
  return (
    <Component
      className={[sizeClasses[size], className].filter(Boolean).join(" ")}
      {...props}
    >
      {children}
    </Component>
  );
}
