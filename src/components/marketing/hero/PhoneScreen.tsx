import {
  ArrowDownLeft,
  ArrowUpRight,
  Bell,
  ChevronRight,
} from "lucide-react";

export default function PhoneScreen() {
  return (
    <div className="bg-[#111418] px-5 pt-5 pb-4">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div>

          <p className="text-[11px] text-gray-400">
            Good Evening 👋
          </p>

          <h2 className="mt-1 text-[28px] font-bold leading-none text-white">
            Samuel
          </h2>

        </div>

        <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5">

          <Bell size={18} className="text-white" />

        </button>

      </div>

      {/* Savings */}

      <div className="mt-5 rounded-[24px] bg-[#18C37E] p-5 text-white">

        <p className="text-sm opacity-80">
          Total Savings
        </p>

        <h3 className="mt-2 text-[34px] font-black tracking-tight">
          ₦1,250,000
        </h3>

        <p className="mt-2 text-sm">
          + ₦85,000 this month
        </p>

      </div>

      {/* Quick Actions */}

      <div className="mt-4 grid grid-cols-4 gap-3">

        {[
          {
            icon: <ArrowDownLeft size={18} />,
            text: "Save",
          },
          {
            icon: <ArrowUpRight size={18} />,
            text: "Withdraw",
          },
          {
            icon: (
              <svg
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="2" y="3" width="14" height="12" rx="2" />
                <path d="M2 7h14" />
              </svg>
            ),
            text: "Wallet",
          },
          {
            icon: (
              <svg
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="2" y="4" width="14" height="10" rx="2" />
                <path d="M11 9h2" />
              </svg>
            ),
            text: "Cards",
          },
        ].map((item) => (
          <div key={item.text} className="text-center">

            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-white/6 text-white">

              {item.icon}

            </div>

            <p className="mt-2 text-[12px] text-[#8D98A5]">

              {item.text}

            </p>

          </div>
        ))}
      </div>

      {/* Circle */}

      <div className="mt-5 rounded-[22px] bg-white/5 p-4">

        <div className="flex items-center justify-between">

          <div>

            <p className="text-[#8D98A5]">

              Family Circle

            </p>

            <h3 className="mt-1 text-[20px] font-bold text-white">

              12 Members

            </h3>

          </div>

          <ChevronRight className="text-white" />

        </div>

        <div className="mt-4 h-2 rounded-full bg-white/10">

          <div className="h-full w-[72%] rounded-full bg-[#18C37E]" />

        </div>

        <div className="mt-2 flex justify-between text-sm">

          <span className="text-[#8D98A5]">

            Progress

          </span>

          <span className="font-semibold text-white">

            72%

          </span>

        </div>

      </div>

      {/* Activity */}

      <div className="mt-5 rounded-[22px] bg-white/5 p-4">

        <div className="flex items-center justify-between">

          <div>

            <h4 className="font-semibold text-white">

              Weekly Contribution

            </h4>

            <p className="text-sm text-[#8D98A5]">

              Today • 9:30 AM

            </p>

          </div>

          <span className="text-xl font-bold text-[#18C37E]">

            + ₦50,000

          </span>

        </div>

      </div>

    </div>
  );
}