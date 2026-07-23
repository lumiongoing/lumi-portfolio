import type { ElementType, HTMLAttributes, ReactNode } from "react";

type SectionSpacing = "compact" | "default" | "spacious";

type SectionWrapperProps = HTMLAttributes<HTMLElement> & {
  as?: ElementType;
  children: ReactNode;
  spacing?: SectionSpacing;
};

const spacingClasses: Record<SectionSpacing, string> = {
  compact: "section section--compact",
  default: "section",
  spacious: "section section--spacious",
};

export function SectionWrapper({
  as: Component = "section",
  children,
  className,
  spacing = "default",
  ...props
}: SectionWrapperProps) {
  return (
    <Component
      className={[spacingClasses[spacing], className].filter(Boolean).join(" ")}
      {...props}
    >
      {children}
    </Component>
  );
}
