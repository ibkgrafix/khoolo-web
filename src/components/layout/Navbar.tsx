"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Circles", href: "#circles" },
  { label: "Goals", href: "#goals" },
  { label: "Security", href: "#security" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const closeMenuOnDesktop = () => {
      if (window.innerWidth >= 1280) {
        setMenuOpen(false);
      }
    };

    const closeMenuWithEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", closeMenuOnDesktop);
    window.addEventListener("keydown", closeMenuWithEscape);

    return () => {
      window.removeEventListener("resize", closeMenuOnDesktop);
      window.removeEventListener("keydown", closeMenuWithEscape);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 isolate w-full border-b border-white/[0.07] bg-[#080C0E]/95 shadow-[0_10px_35px_rgba(0,0,0,0.16)] backdrop-blur-xl">
      <div className="mx-auto flex h-[68px] max-w-[1280px] items-center justify-between px-5 sm:h-[72px] sm:px-6 lg:px-8 xl:h-[76px]">
        {/* Logo */}

        <a
          href="#home"
          aria-label="VAUHLT homepage"
          onClick={closeMenu}
          className="shrink-0 font-bold text-[22px] leading-none tracking-[0.18em] text-white transition-opacity duration-300 hover:opacity-85 sm:text-[24px] xl:text-[26px]"
        >
          VAUHLT
        </a>

        {/* Desktop navigation */}

        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-7 xl:flex"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="group relative py-2 text-[13px] font-medium text-white/60 transition-colors duration-300 hover:text-white"
            >
              {link.label}

              <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-[#16C47F] transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        {/* Desktop and mobile actions */}

        <div className="flex items-center gap-2.5 sm:gap-3">
          <a
            href="#login"
            className="hidden h-10 items-center justify-center px-2 text-[13px] font-medium text-white/60 transition-colors duration-300 hover:text-white md:inline-flex"
          >
            Log in
          </a>

          <a
            href="#get-started"
            className="hidden h-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] px-5 text-[13px] font-semibold text-white transition-all duration-300 hover:border-[#16C47F]/45 hover:bg-[#16C47F] hover:text-[#07100C] sm:inline-flex"
          >
            Get started
          </a>

          <button
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((current) => !current)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.035] text-white transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.07] xl:hidden"
          >
            {menuOpen ? <X size={19} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile and tablet navigation */}

      <div
        id="mobile-navigation"
        className={`
          overflow-hidden border-t border-white/[0.07]
          bg-[#080C0E]
          transition-all duration-300 ease-out
          xl:hidden
          ${menuOpen
            ? "max-h-[620px] opacity-100"
            : "pointer-events-none max-h-0 opacity-0"
          }
        `}
      >
        <div className="mx-auto max-w-[1280px] px-5 py-5 sm:px-6 lg:px-8">
          <nav
            aria-label="Mobile navigation"
            className="flex flex-col"
          >
            {navLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                onClick={closeMenu}
                className={`
                  group flex min-h-[52px] items-center justify-between
                  text-[15px] font-medium text-white/70
                  transition-colors duration-300 hover:text-white
                  ${index !== navLinks.length - 1
                    ? "border-b border-white/[0.06]"
                    : ""
                  }
                `}
              >
                <span>{link.label}</span>

                <ArrowUpRight
                  size={16}
                  className="text-white/25 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#16C47F]"
                />
              </a>
            ))}
          </nav>

          <div className="mt-5 grid grid-cols-2 gap-3 border-t border-white/[0.07] pt-5 sm:hidden">
            <a
              href="#login"
              onClick={closeMenu}
              className="inline-flex h-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-[13px] font-semibold text-white/75 transition-colors hover:bg-white/[0.07] hover:text-white"
            >
              Log in
            </a>

            <a
              href="#get-started"
              onClick={closeMenu}
              className="inline-flex h-11 items-center justify-center rounded-full bg-[#16C47F] px-4 text-[13px] font-semibold text-[#07100C] transition-colors hover:bg-[#29D18D]"
            >
              Get started
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}