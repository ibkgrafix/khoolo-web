import Link from "next/link";
import { ReactNode } from "react";
import clsx from "clsx";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
}

export default function Button({
  children,
  href = "#",
  variant = "primary",
  className = "",
}: ButtonProps) {
  const classes = clsx(
    "inline-flex items-center justify-center rounded-2xl px-8 h-14 font-semibold transition-all duration-300",
    {
      "bg-[var(--primary)] text-white hover:bg-[var(--primary-hover)] hover:-translate-y-1":
        variant === "primary",

      "border border-white/10 bg-white/5 text-white hover:border-white/20 hover:bg-white/10":
        variant === "secondary",
    },
    className
  );

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}