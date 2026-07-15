import { ReactNode } from "react";
import clsx from "clsx";

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

export default function Badge({
  children,
  className,
}: BadgeProps) {
  return (
    <span
      className={clsx(
        "inline-flex items-center gap-2",
        "rounded-full",
        "border border-white/10",
        "bg-white/[0.03]",
        "px-5 py-2.5",
        "text-sm",
        "font-medium",
        "text-gray-300",
        "backdrop-blur-xl",
        className
      )}
    >
      <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />

      {children}
    </span>
  );
}