import {
  ArrowRight,
  CheckCircle2,
  Copy,
  Mail,
  UserPlus,
  Users,
} from "lucide-react";

const members = ["Sarah Johnson", "Michael James"];

export default function InviteCard() {
  return (
    <article
      className="
        group
        relative
        flex
        h-full
        overflow-hidden
        rounded-[26px]
        border
        border-white/[0.08]
        bg-[#141A20]
        p-6
        shadow-[0_18px_50px_rgba(15,23,42,0.09)]
        transition
        duration-500
        hover:-translate-y-1
        hover:border-[#16C47F]/20
        hover:shadow-[0_24px_65px_rgba(22,196,127,0.11)]
        lg:h-[470px]
      "
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(22,196,127,0.11),transparent_50%)]" />

      <div className="relative flex min-w-0 flex-1 flex-col">
        <div className="flex items-center justify-between">
          <span className="rounded-full border border-[#16C47F]/20 bg-[#16C47F]/10 px-4 py-2 text-[10px] font-extrabold tracking-[0.24em] text-[#25D697]">
            STEP 02
          </span>

          <div className="flex h-10 w-10 items-center justify-center rounded-[13px] border border-white/[0.05] bg-white/[0.05]">
            <UserPlus
              className="h-[18px] w-[18px] text-[#25D697]"
              strokeWidth={1.8}
            />
          </div>
        </div>

        <div className="mt-5">
          <h3 className="min-h-[58px] text-[27px] font-black leading-[1.05] tracking-[-0.04em] text-white">
            Invite everyone
            <br />
            to your circle.
          </h3>

          <p className="mt-3 min-h-[48px] max-w-[500px] text-[13px] leading-6 text-slate-400">
            Share one private invite link with friends, family or colleagues
            and bring everyone together securely.
          </p>
        </div>

        <div className="mt-5 h-[182px] rounded-[20px] border border-white/[0.08] bg-[#0D1217] p-4">
          <div className="flex h-12 items-center justify-between rounded-[13px] bg-white/[0.055] px-3.5">
            <div className="min-w-0">
              <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-slate-500">
                Invite link
              </p>

              <p className="mt-1 truncate text-[11px] text-white">
                vauhlt.app/invite/7GH9A
              </p>
            </div>

            <button
              type="button"
              aria-label="Copy invite link"
              className="ml-3 flex h-8 w-8 shrink-0 items-center justify-center rounded-[10px] bg-[#16C47F]/10"
            >
              <Copy
                className="h-4 w-4 text-[#25D697]"
                strokeWidth={1.8}
              />
            </button>
          </div>

          <div className="mt-2.5 grid grid-cols-2 gap-2">
            {members.map((member) => (
              <div
                key={member}
                className="flex h-10 min-w-0 items-center justify-between rounded-[12px] bg-white/[0.055] px-3"
              >
                <div className="flex min-w-0 items-center gap-2">
                  <Users
                    className="h-3.5 w-3.5 shrink-0 text-[#25D697]"
                    strokeWidth={1.8}
                  />

                  <span className="truncate text-[10px] text-slate-300">
                    {member}
                  </span>
                </div>

                <CheckCircle2
                  className="ml-2 h-3.5 w-3.5 shrink-0 text-[#25D697]"
                  strokeWidth={1.8}
                />
              </div>
            ))}
          </div>

          <button
            type="button"
            className="mt-2.5 flex h-10 w-full items-center justify-center gap-2 rounded-[12px] bg-[#16C47F] text-[11px] font-bold text-[#0B1510] transition hover:bg-[#21D58E]"
          >
            <Mail className="h-3.5 w-3.5" strokeWidth={1.8} />
            Send invitation
          </button>
        </div>

        <div className="mt-auto flex items-center gap-2 pt-5 text-[12px] font-bold text-[#25D697]">
          Invite with one secure link

          <ArrowRight
            className="h-4 w-4 transition-transform group-hover:translate-x-1"
            strokeWidth={1.8}
          />
        </div>
      </div>
    </article>
  );
}