"use client";

export default function FloatingAvatars() {
  const members = [
    {
      initials: "AO",
      top: "8%",
      left: "-4%",
      color: "from-emerald-500 to-green-400",
    },
    {
      initials: "MK",
      top: "72%",
      left: "2%",
      color: "from-sky-500 to-cyan-400",
    },
    {
      initials: "TJ",
      top: "60%",
      right: "-4%",
      color: "from-yellow-500 to-orange-400",
    },
  ];

  return (
    <>
      {members.map((member, index) => (
        <div
          key={index}
          className="absolute z-30 animate-[float_6s_ease-in-out_infinite]"
          style={{
            top: member.top,
            left: member.left,
            right: member.right,
            animationDelay: `${index * 1.5}s`,
          }}
        >
          <div className="relative">

            {/* Glow */}
            <div className="absolute inset-0 rounded-full bg-[#16C47F]/30 blur-xl" />

            {/* Avatar */}
            <div
              className={`relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br ${member.color} border-4 border-[#151719] text-lg font-bold text-white shadow-2xl`}
            >
              {member.initials}
            </div>

            {/* Online Dot */}
            <div className="absolute bottom-1 right-1 h-4 w-4 rounded-full border-2 border-[#151719] bg-[#16C47F]" />

          </div>
        </div>
      ))}
    </>
  );
}