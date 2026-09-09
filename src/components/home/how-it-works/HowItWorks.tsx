import FeatureBar from "./FeatureBar";
import CreateCircleCard from "./CreateCircleCard";
import InviteCard from "./InviteCard";
import ContributeCard from "./ContributeCard";
import PayoutCard from "./PayoutCard";
import TrustCard from "./TrustCard";

const steps = ["Create", "Invite", "Contribute", "Payout"];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-[#FCFDFC] py-16 sm:py-20 lg:py-24"
    >
      <style>
        {`
          @keyframes khoolo-glow-one {
            0%, 100% {
              transform: translate3d(0, 0, 0) scale(1);
            }

            50% {
              transform: translate3d(-42px, 28px, 0) scale(1.08);
            }
          }

          @keyframes khoolo-glow-two {
            0%, 100% {
              transform: translate3d(0, 0, 0) scale(1);
            }

            50% {
              transform: translate3d(38px, -26px, 0) scale(1.06);
            }
          }

          @keyframes khoolo-ring-one {
            0%, 100% {
              transform: translateX(-50%) rotate(0deg) scale(1);
            }

            50% {
              transform: translateX(-50%) rotate(4deg) scale(1.025);
            }
          }

          @keyframes khoolo-ring-two {
            0%, 100% {
              transform: translateX(-50%) rotate(0deg) scale(1);
            }

            50% {
              transform: translateX(-50%) rotate(-5deg) scale(0.985);
            }
          }

          @keyframes khoolo-ring-three {
            0%, 100% {
              transform: translateX(-50%) scale(1);
              opacity: 0.7;
            }

            50% {
              transform: translateX(-50%) scale(1.045);
              opacity: 1;
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .khoolo-background-motion {
              animation: none !important;
            }
          }
        `}
      </style>

      {/* Background */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="
            absolute inset-0
            [background-image:linear-gradient(rgba(15,23,42,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.045)_1px,transparent_1px)]
            [background-size:42px_42px]
            sm:[background-size:52px_52px]
            lg:[background-size:64px_64px]
          "
        />

        {/* Moving glows */}

        <div
          className="
            khoolo-background-motion
            absolute
            -right-56
            -top-48
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#16C47F]/10
            blur-[110px]
            will-change-transform
            sm:h-[620px]
            sm:w-[620px]
            sm:blur-[130px]
            lg:-top-64
            lg:h-[760px]
            lg:w-[760px]
            lg:blur-[150px]
          "
          style={{
            animation:
              "khoolo-glow-one 18s cubic-bezier(0.45, 0, 0.55, 1) infinite",
          }}
        />

        <div
          className="
            khoolo-background-motion
            absolute
            -bottom-48
            -left-52
            h-[440px]
            w-[440px]
            rounded-full
            bg-[#16C47F]/8
            blur-[105px]
            will-change-transform
            sm:h-[540px]
            sm:w-[540px]
            sm:blur-[125px]
            lg:-bottom-72
            lg:-left-48
            lg:h-[640px]
            lg:w-[640px]
            lg:blur-[145px]
          "
          style={{
            animation:
              "khoolo-glow-two 21s cubic-bezier(0.45, 0, 0.55, 1) infinite",
          }}
        />

        {/* Moving rings */}

        <div
          className="
            khoolo-background-motion
            absolute
            left-1/2
            top-[330px]
            h-[520px]
            w-[520px]
            rounded-full
            border border-[#16C47F]/10
            opacity-60
            will-change-transform
            sm:h-[680px]
            sm:w-[680px]
            lg:top-[310px]
            lg:h-[860px]
            lg:w-[860px]
            lg:border-[#16C47F]/15
            lg:opacity-100
          "
          style={{
            animation:
              "khoolo-ring-one 24s cubic-bezier(0.45, 0, 0.55, 1) infinite",
          }}
        />

        <div
          className="
            khoolo-background-motion
            absolute
            left-1/2
            top-[390px]
            h-[420px]
            w-[420px]
            rounded-full
            border border-[#16C47F]/10
            opacity-60
            will-change-transform
            sm:h-[560px]
            sm:w-[560px]
            lg:top-[370px]
            lg:h-[730px]
            lg:w-[730px]
            lg:border-[#16C47F]/12
            lg:opacity-100
          "
          style={{
            animation:
              "khoolo-ring-two 28s cubic-bezier(0.45, 0, 0.55, 1) infinite",
          }}
        />

        <div
          className="
            khoolo-background-motion
            absolute
            left-1/2
            top-[450px]
            h-[320px]
            w-[320px]
            rounded-full
            border border-[#16C47F]/10
            opacity-60
            will-change-transform
            sm:h-[440px]
            sm:w-[440px]
            lg:top-[430px]
            lg:h-[600px]
            lg:w-[600px]
            lg:opacity-100
          "
          style={{
            animation:
              "khoolo-ring-three 17s cubic-bezier(0.45, 0, 0.55, 1) infinite",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
        {/* Heading */}

        <div className="mx-auto max-w-[860px] text-center">
          <span className="inline-flex items-center rounded-full border border-[#16C47F]/25 bg-[#16C47F]/10 px-4 py-2 text-[9px] font-extrabold tracking-[0.28em] text-[#0FAE6C] sm:px-5 sm:text-[10px] sm:tracking-[0.3em]">
            HOW IT WORKS
          </span>

          <h2 className="mt-5 text-[36px] font-black leading-[1] tracking-[-0.05em] text-[#111827] sm:mt-6 sm:text-[46px] lg:text-[58px] lg:leading-[0.98] lg:tracking-[-0.055em]">
            Saving together
            <br />
            made{" "}
            <span className="text-[#16C47F]">
              beautifully simple.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-[680px] text-[14px] leading-6 text-slate-500 sm:text-[15px] sm:leading-7 lg:text-base">
            Create trusted savings circles, contribute every cycle and receive
            payouts automatically without spreadsheets or manual tracking.
          </p>
        </div>

        {/* Mobile steps */}

        <div className="mx-auto mt-9 grid max-w-[560px] grid-cols-2 gap-3 lg:hidden">
          {steps.map((step, index) => (
            <div
              key={step}
              className="flex min-h-[54px] items-center gap-3 rounded-2xl border border-slate-200/80 bg-white/80 px-3.5 shadow-[0_10px_30px_rgba(15,23,42,0.05)] backdrop-blur-sm sm:px-4"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#16C47F]/10">
                <span className="text-[10px] font-black text-[#16C47F]">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-slate-500 sm:text-[11px]">
                {step}
              </span>
            </div>
          ))}
        </div>

        {/* Desktop timeline */}

        <div className="relative mx-auto mt-12 hidden max-w-[1160px] lg:block">
          <div className="absolute left-[12.5%] right-[12.5%] top-6 h-px bg-[#16C47F]/30" />

          <div className="relative grid grid-cols-4">
            {steps.map((step, index) => (
              <div
                key={step}
                className="flex flex-col items-center text-center"
              >
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white shadow-[0_10px_30px_rgba(15,23,42,0.08)]">
                  <span className="text-[12px] font-black text-[#16C47F]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <span className="mt-3 text-[10px] font-extrabold uppercase tracking-[0.26em] text-slate-500">
                  {step}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Cards */}

        <div className="mx-auto mt-8 grid grid-cols-1 max-w-[1160px] items-stretch gap-4 sm:mt-10 sm:gap-5 lg:grid-cols-2">
          <CreateCircleCard />
          <InviteCard />
          <ContributeCard />
          <PayoutCard />
        </div>

        {/* Trust */}

        <div className="mx-auto mt-10 max-w-[1160px] sm:mt-12 lg:mt-14">
          <TrustCard />
        </div>

        {/* Feature bar */}

        <div className="mx-auto mt-6 max-w-[1160px] sm:mt-8">
          <FeatureBar />
        </div>
      </div>
    </section>
  );
}