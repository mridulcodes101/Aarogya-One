import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  spacing?: "none" | "sm" | "md" | "lg";
}

export function Section({
  children,
  className,
  as: Component = "section",
  spacing = "md",
  ...props
}: SectionProps) {
  const spacingClasses = {
    none: "py-0",
    sm: "py-section-sm",
    md: "py-section",
    lg: "py-section-lg",
  };

  return (
    <Component
      className={cn(spacingClasses[spacing], className)}
      {...props}
    >
      {children}
    </Component>
  );
}
