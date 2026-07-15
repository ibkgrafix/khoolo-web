import GlassCard from "@/components/ui/GlassCard";

interface FloatingCardProps {
  title: string;
  value: string;
  position:
    | "left-top"
    | "right-top"
    | "right-bottom";
}

const positions = {
  "left-top":
    "hidden lg:block absolute -left-16 top-24 animate-float",

  "right-top":
    "hidden lg:block absolute -right-10 top-52 animate-float-delay",

  "right-bottom":
    "hidden lg:block absolute right-0 bottom-20 animate-float-slow",
};

export default function FloatingCard({
  title,
  value,
  position,
}: FloatingCardProps) {
  return (
    <GlassCard
      className={`${positions[position]} w-52 p-5`}
    >
      <p className="text-xs uppercase tracking-[0.25em] text-[#8D98A5]">
        {title}
      </p>

      <h3 className="mt-3 text-3xl font-bold text-white">
        {value}
      </h3>
    </GlassCard>
  );
}