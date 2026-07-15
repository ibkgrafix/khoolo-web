import GlassCard from "./GlassCard";

interface StatCardProps {
  value: string;
  label: string;
}

export default function StatCard({
  value,
  label,
}: StatCardProps) {
  return (
    <GlassCard className="p-8 text-center">
      <h3 className="text-4xl font-black text-white">
        {value}
      </h3>

      <p className="mt-3 text-gray-400">
        {label}
      </p>
    </GlassCard>
  );
}