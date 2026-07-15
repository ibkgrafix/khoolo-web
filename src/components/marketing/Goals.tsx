import {
  ArrowRight,
  GraduationCap,
  Heart,
  Home,
  Target,
  TrendingUp,
} from "lucide-react";

const goals = [
  {
    icon: Home,
    title: "Home Deposit",
    description: "Build your rent or property deposit steadily.",
    saved: "₦1,500,000",
    target: "₦2,000,000",
    progress: 75,
    timeline: "8 months remaining",
  },
  {
    icon: Heart,
    title: "Wedding Fund",
    description: "Plan your celebration without financial pressure.",
    saved: "₦900,000",
    target: "₦1,200,000",
    progress: 75,
    timeline: "5 months remaining",
  },
  {
    icon: GraduationCap,
    title: "School Fees",
    description: "Prepare early for tuition and education expenses.",
    saved: "₦450,000",
    target: "₦600,000",
    progress: 75,
    timeline: "3 months remaining",
  },
];

export default function Goals() {
  return (
    <section
      id="goals"
      className="relative overflow-hidden bg-[#F7FAF8] py-20 text-[#101820] lg:py-24"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="
            absolute inset-0
            [background-image:linear-gradient(rgba(15,23,42,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.045)_1px,transparent_1px)]
            [background-size:64px_64px]
          "
        />

        <div className="absolute -right-52 -top-60 h-[660px] w-[660px] rounded-full bg-[#16C47F]/10 blur-[145px]" />

        <div className="absolute -bottom-64 -left-48 h-[560px] w-[560px] rounded-full bg-[#16C47F]/8 blur-[135px]" />

        <div className="absolute left-1/2 top-[220px] h-[780px] w-[780px] -translate-x-1/2 rounded-full border border-[#16C47F]/10" />

        <div className="absolute left-1/2 top-[290px] h-[640px] w-[640px] -translate-x-1/2 rounded-full border border-[#16C47F]/10" />
      </div>

      <div className="relative mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-[820px] text-center">
          <span className="inline-flex items-center rounded-full border border-[#16C47F]/25 bg-[#16C47F]/10 px-5 py-2 text-[10px] font-extrabold uppercase tracking-[0.28em] text-[#0FAE6C]">
            Goal savings
          </span>

          <h2 className="mt-6 text-[42px] font-black leading-[0.98] tracking-[-0.055em] text-[#101820] sm:text-[50px] lg:text-[58px]">
            Save for the moments
            <br />
            that matter{" "}
            <span className="text-[#16C47F]">most.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-[650px] text-[15px] leading-7 text-slate-600 lg:text-base">
            Create a personal savings goal, choose your target and let KHOOLO
            help you stay consistent until you reach it.
          </p>
        </div>

        {/* Goal Cards */}
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {goals.map(
            ({
              icon: Icon,
              title,
              description,
              saved,
              target,
              progress,
              timeline,
            }) => (
              <article
                key={title}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[26px]
                  border
                  border-slate-200/80
                  bg-white
                  p-6
                  shadow-[0_18px_55px_rgba(15,23,42,0.07)]
                  transition
                  duration-500
                  hover:-translate-y-1
                  hover:border-[#16C47F]/30
                  hover:shadow-[0_24px_70px_rgba(22,196,127,0.12)]
                  sm:p-7
                "
              >
                <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-[#16C47F]/8 blur-[70px]" />

                <div className="relative">
                  <div className="flex items-start justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-[14px] border border-[#16C47F]/15 bg-[#16C47F]/10">
                      <Icon
                        className="h-[19px] w-[19px] text-[#0FAE6C]"
                        strokeWidth={1.8}
                      />
                    </div>

                    <span className="rounded-full bg-[#16C47F]/10 px-3 py-1.5 text-[10px] font-extrabold text-[#0FAE6C]">
                      {progress}% saved
                    </span>
                  </div>

                  <h3 className="mt-6 text-[22px] font-black tracking-[-0.035em] text-[#101820]">
                    {title}
                  </h3>

                  <p className="mt-2 min-h-[48px] text-[13px] leading-6 text-slate-500">
                    {description}
                  </p>

                  <div className="mt-6 rounded-[18px] border border-slate-200 bg-[#F7FAF8] p-4">
                    <div className="flex items-end justify-between gap-4">
                      <div>
                        <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400">
                          Saved
                        </p>

                        <p className="mt-1 text-[20px] font-black tracking-[-0.03em] text-[#101820]">
                          {saved}
                        </p>
                      </div>

                      <div className="text-right">
                        <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400">
                          Target
                        </p>

                        <p className="mt-1 text-[13px] font-bold text-slate-600">
                          {target}
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-200">
                      <div
                        className="h-full rounded-full bg-[#16C47F]"
                        style={{ width: `${progress}%` }}
                      />
                    </div>

                    <div className="mt-3 flex items-center gap-2 text-[11px] font-medium text-slate-500">
                      <TrendingUp
                        className="h-3.5 w-3.5 text-[#0FAE6C]"
                        strokeWidth={1.8}
                      />

                      {timeline}
                    </div>
                  </div>

                  <a
                    href="#get-started"
                    className="group/link mt-5 inline-flex items-center gap-2 text-[12px] font-bold text-[#0FAE6C]"
                  >
                    View goal plan

                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1"
                      strokeWidth={1.8}
                    />
                  </a>
                </div>
              </article>
            ),
          )}
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 flex flex-col gap-5 rounded-[26px] border border-[#16C47F]/15 bg-[#101820] px-6 py-6 shadow-[0_22px_65px_rgba(15,23,42,0.14)] sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] bg-[#16C47F]/10">
              <Target
                className="h-[19px] w-[19px] text-[#25D697]"
                strokeWidth={1.8}
              />
            </div>

            <div>
              <h3 className="text-[17px] font-bold text-white">
                Your goal. Your pace. Your progress.
              </h3>

              <p className="mt-1 text-[13px] leading-6 text-slate-400">
                Start with any amount and adjust your savings plan whenever
                life changes.
              </p>
            </div>
          </div>

          <a
            href="#get-started"
            className="group inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-full bg-[#16C47F] px-5 text-[12px] font-bold text-[#07120D] transition duration-300 hover:bg-[#20D58E]"
          >
            Create a goal

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