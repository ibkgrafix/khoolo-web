import { ReactNode } from "react";
import clsx from "clsx";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function GlassCard({
  children,
  className,
  hover = true,
}: GlassCardProps) {
  return (
    <div
      className={clsx(
        "rounded-[28px]",
        "border border-white/10",
        "bg-white/[0.03]",
        "backdrop-blur-2xl",
        "shadow-[0_20px_80px_rgba(0,0,0,.35)]",
        "transition-all duration-500",
        hover &&
          "hover:-translate-y-2 hover:border-green-500/30 hover:bg-white/[0.05]",
        className
      )}
    >
      {children}
    </div>
  );
}