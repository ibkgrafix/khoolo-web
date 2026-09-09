import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Eye,
  Fingerprint,
  KeyRound,
  LockKeyhole,
  ShieldCheck,
} from "lucide-react";

const protections = [
  {
    icon: Fingerprint,
    title: "Verified access",
    description:
      "Only approved members can access private circle information.",
  },
  {
    icon: LockKeyhole,
    title: "Protected payments",
    description:
      "Contribution and payout activity is securely recorded and tracked.",
  },
  {
    icon: Eye,
    title: "Transparent records",
    description:
      "Every member can clearly see payments, balances and payout history.",
  },
];

const activity = [
  {
    title: "Contribution received",
    description: "Sarah Johnson paid ₦10,000",
    status: "Verified",
  },
  {
    title: "Circle member approved",
    description: "Aisha Bello joined Friends Savings",
    status: "Approved",
  },
  {
    title: "Payout completed",
    description: "₦80,000 transferred successfully",
    status: "Completed",
  },
];

export default function Security() {
  return (
    <section
      id="security"
      className="relative overflow-hidden bg-[#080C0E] py-20 text-white lg:py-24"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="
            absolute inset-0
            opacity-[0.16]
            [background-image:linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)]
            [background-size:72px_72px]
          "
        />

        <div className="absolute -left-52 -top-60 h-[640px] w-[640px] rounded-full bg-[#16C47F]/12 blur-[150px]" />

        <div className="absolute -bottom-72 -right-52 h-[620px] w-[620px] rounded-full bg-[#16C47F]/10 blur-[145px]" />

        <div className="absolute left-[8%] top-1/2 h-[680px] w-[680px] -translate-y-1/2 rounded-full border border-[#16C47F]/10" />

        <div className="absolute left-[14%] top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full border border-[#16C47F]/10" />
      </div>

      <div className="relative mx-auto grid grid-cols-1 max-w-[1280px] items-center gap-8 px-5 sm:gap-10 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 lg:px-8">
        {/* Left Security Preview */}
        <div className="relative order-2 lg:order-1">
          <div className="absolute -inset-8 rounded-[48px] bg-[#16C47F]/10 blur-[80px]" />

          <div className="relative overflow-hidden rounded-[30px] border border-white/[0.08] bg-[#12181D] p-5 shadow-[0_35px_100px_rgba(0,0,0,0.42)] sm:p-7">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[9px] font-extrabold uppercase tracking-[0.24em] text-[#25D697]">
                  Security centre
                </p>

                <h3 className="mt-2 text-[22px] font-black tracking-[-0.035em] text-white">
                  Your account is protected
                </h3>
              </div>

              <div className="flex h-11 w-11 items-center justify-center rounded-[14px] border border-[#16C47F]/10 bg-[#16C47F]/10">
                <ShieldCheck
                  className="h-[20px] w-[20px] text-[#25D697]"
                  strokeWidth={1.8}
                />
              </div>
            </div>

            {/* Security Score */}
            <div className="mt-6 rounded-[20px] border border-[#16C47F]/15 bg-[#16C47F]/10 p-5">
              <div className="flex items-start justify-between gap-5">
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#25D697]">
                    Security status
                  </p>

                  <p className="mt-2 text-[18px] font-black text-white">
                    All protections active
                  </p>

                  <p className="mt-2 max-w-[330px] text-[12px] leading-5 text-slate-400">
                    Identity, circle access and payment records are currently
                    protected.
                  </p>
                </div>

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#16C47F]/25 bg-[#16C47F]/15">
                  <CheckCircle2
                    className="h-6 w-6 text-[#25D697]"
                    strokeWidth={1.8}
                  />
                </div>
              </div>
            </div>

            {/* Protection Status */}
            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="rounded-[17px] border border-white/[0.07] bg-white/[0.045] p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-[12px] bg-[#16C47F]/10">
                    <KeyRound
                      className="h-4 w-4 text-[#25D697]"
                      strokeWidth={1.8}
                    />
                  </div>

                  <div>
                    <p className="text-[11px] font-bold text-white">
                      Secure login
                    </p>

                    <p className="mt-0.5 text-[9px] text-[#25D697]">
                      Enabled
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-[17px] border border-white/[0.07] bg-white/[0.045] p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-[12px] bg-[#16C47F]/10">
                    <BadgeCheck
                      className="h-4 w-4 text-[#25D697]"
                      strokeWidth={1.8}
                    />
                  </div>

                  <div>
                    <p className="text-[11px] font-bold text-white">
                      Identity check
                    </p>

                    <p className="mt-0.5 text-[9px] text-[#25D697]">
                      Verified
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Activity */}
            <div className="mt-4 rounded-[20px] border border-white/[0.07] bg-[#0B1014] p-4">
              <div className="flex items-center justify-between px-1">
                <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-slate-500">
                  Protected activity
                </p>

                <span className="text-[10px] font-bold text-[#25D697]">
                  Live records
                </span>
              </div>

              <div className="mt-3 space-y-2.5">
                {activity.map((item) => (
                  <div
                    key={item.title}
                    className="flex items-center justify-between gap-4 rounded-[14px] border border-white/[0.04] bg-white/[0.045] px-3.5 py-3"
                  >
                    <div className="flex min-w-0 items-center gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#16C47F]/10">
                        <CheckCircle2
                          className="h-4 w-4 text-[#25D697]"
                          strokeWidth={1.8}
                        />
                      </div>

                      <div className="min-w-0">
                        <p className="truncate text-[11px] font-semibold text-white">
                          {item.title}
                        </p>

                        <p className="mt-0.5 truncate text-[9px] text-slate-500">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    <span className="shrink-0 rounded-full bg-[#16C47F]/10 px-2.5 py-1 text-[8px] font-extrabold text-[#25D697]">
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="order-1 lg:order-2">
          <span className="inline-flex items-center rounded-full border border-[#16C47F]/25 bg-[#16C47F]/10 px-5 py-2 text-[10px] font-extrabold uppercase tracking-[0.28em] text-[#25D697]">
            Security first
          </span>

          <h2 className="mt-6 max-w-[570px] text-[32px] font-black leading-[0.98] tracking-[-0.055em] text-white min-[375px]:text-[36px] min-[430px]:text-[42px] sm:text-[50px] lg:text-[58px]">
            Built to protect
            <br />
            every{" "}
            <span className="text-[#16C47F]">contribution.</span>
          </h2>

          <p className="mt-6 w-full max-w-[540px] text-[15px] leading-7 text-slate-400 lg:text-base">
            KHOOLO keeps circle access controlled, payment activity visible and
            every contribution record easy to verify.
          </p>

          <div className="mt-8 space-y-5">
            {protections.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="flex w-full max-w-[540px] items-start gap-4"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] border border-[#16C47F]/15 bg-[#16C47F]/10">
                  <Icon
                    className="h-[18px] w-[18px] text-[#25D697]"
                    strokeWidth={1.8}
                  />
                </div>

                <div>
                  <h3 className="text-[15px] font-bold text-white">
                    {title}
                  </h3>

                  <p className="mt-1 text-[13px] leading-6 text-slate-400">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <a
            href="#get-started"
            className="group mt-9 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#16C47F] px-6 text-[13px] font-bold text-[#07120D] transition duration-300 hover:bg-[#20D58E]"
          >
            Start saving securely

            <ArrowRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              strokeWidth={1.8}
            />
          </a>
        </div>
      </div>
    </section>
  );
}