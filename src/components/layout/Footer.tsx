import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const productLinks = [
  {
    label: "How it works",
    href: "#how-it-works",
  },
  {
    label: "Contribution circles",
    href: "#how-it-works",
  },
  {
    label: "Savings goals",
    href: "#goals",
  },
  {
    label: "Security",
    href: "#security",
  },
];

const companyLinks = [
  {
    label: "About KHOOLO",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
  },
  {
    label: "Careers",
    href: "/careers",
  },
];

const legalLinks = [
  {
    label: "Privacy policy",
    href: "/privacy",
  },
  {
    label: "Terms of service",
    href: "/terms",
  },
  {
    label: "Cookie policy",
    href: "/cookies",
  },
];

export default function Footer() {
  return (
    <footer
      id="footer"
      className="relative overflow-hidden border-t border-white/[0.07] bg-[#080A0C] text-white"
    >
      {/* Background details */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-[#16C47F]/10 blur-[140px]" />

        <div className="absolute -bottom-56 -left-44 h-[520px] w-[520px] rounded-full border border-[#16C47F]/10" />

        <div className="absolute -bottom-72 -left-60 h-[700px] w-[700px] rounded-full border border-white/[0.04]" />

        <div
          className="
            absolute inset-0
            opacity-[0.025]
            [background-image:linear-gradient(#ffffff_1px,transparent_1px),linear-gradient(90deg,#ffffff_1px,transparent_1px)]
            [background-size:72px_72px]
          "
        />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 pb-8 pt-24 lg:px-8 lg:pt-28">
        {/* CTA */}

        <div
          className="
            relative overflow-hidden
            rounded-[32px]
            border border-white/[0.08]
            bg-[#111417]
            px-7 py-9
            shadow-[0_30px_90px_rgba(0,0,0,0.35)]
            sm:px-10
            lg:flex lg:items-center lg:justify-between
            lg:px-12 lg:py-11
          "
        >
          <div className="pointer-events-none absolute right-0 top-0 h-48 w-48 rounded-full bg-[#16C47F]/10 blur-[80px]" />

          <div className="relative max-w-2xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#16C47F]/20 bg-[#16C47F]/10 px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#61DFA7]">
              <Sparkles size={14} strokeWidth={2} />
              Your circle. Your future.
            </div>

            <h2 className="max-w-xl text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl lg:text-[44px] lg:leading-[1.08]">
              Build your financial future with people you trust.
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-white/55 sm:text-base">
              Create trusted contribution circles, save toward meaningful
              goals, and manage every payment with clarity.
            </p>
          </div>

          <div className="relative mt-8 flex flex-col gap-3 sm:flex-row lg:mt-0 lg:pl-10">
            <Link
              href="#goals"
              className="
                inline-flex min-h-12 items-center justify-center gap-2
                rounded-full bg-[#16C47F] px-6
                text-sm font-semibold text-[#07110D]
                transition duration-300
                hover:-translate-y-0.5 hover:bg-[#29D18D]
              "
            >
              Start saving
              <ArrowRight size={17} strokeWidth={2.2} />
            </Link>

            <Link
              href="#how-it-works"
              className="
                inline-flex min-h-12 items-center justify-center gap-2
                rounded-full border border-white/10 bg-white/[0.04]
                px-6 text-sm font-semibold text-white
                transition duration-300
                hover:-translate-y-0.5 hover:border-white/20
                hover:bg-white/[0.07]
              "
            >
              See how it works
            </Link>
          </div>
        </div>

        {/* Main footer */}

        <div className="grid gap-14 py-16 sm:grid-cols-2 lg:grid-cols-[1.35fr_0.65fr_0.65fr_0.65fr] lg:gap-12 lg:py-20">
          {/* Brand */}

          <div className="max-w-sm">
            <Link
              href="#home"
              className="inline-flex items-center gap-3"
              aria-label="KHOOLO home"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#16C47F] text-sm font-black text-[#07110D]">
                K
              </div>

              <span className="text-xl font-bold tracking-[0.16em] text-white">
                KHOOLO
              </span>
            </Link>

            <p className="mt-6 max-w-xs text-sm leading-7 text-white/50">
              A trusted digital platform for contribution circles and personal
              goal savings.
            </p>

            <div className="mt-7 inline-flex items-center gap-2.5 rounded-full border border-white/[0.08] bg-white/[0.035] px-4 py-2.5 text-xs font-medium text-white/60">
              <ShieldCheck size={15} className="text-[#16C47F]" />
              Built for secure, transparent saving
            </div>
          </div>

          {/* Product */}

          <div>
            <h3 className="text-sm font-semibold text-white">Product</h3>

            <div className="mt-6 flex flex-col gap-4">
              {productLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="w-fit text-sm text-white/45 transition hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Company */}

          <div>
            <h3 className="text-sm font-semibold text-white">Company</h3>

            <div className="mt-6 flex flex-col gap-4">
              {companyLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="group flex w-fit items-center gap-1.5 text-sm text-white/45 transition hover:text-white"
                >
                  {link.label}

                  <ArrowUpRight
                    size={13}
                    className="opacity-0 transition group-hover:opacity-100"
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* Legal */}

          <div>
            <h3 className="text-sm font-semibold text-white">Legal</h3>

            <div className="mt-6 flex flex-col gap-4">
              {legalLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="w-fit text-sm text-white/45 transition hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}

        <div className="flex flex-col gap-5 border-t border-white/[0.07] pt-7 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} KHOOLO. All rights reserved.</p>

          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#16C47F] shadow-[0_0_12px_rgba(22,196,127,0.8)]" />
            <span>Saving together, made simple.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}