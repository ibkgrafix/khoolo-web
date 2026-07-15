import Badge from "./Badge";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={`${
        align === "center" ? "text-center mx-auto" : ""
      } max-w-3xl`}
    >
      {eyebrow && <Badge>{eyebrow}</Badge>}

      <h2 className="mt-6 text-5xl font-black leading-tight tracking-tight text-white md:text-6xl">
        {title}
      </h2>

      {description && (
        <p className="mt-6 text-lg leading-8 text-gray-400">
          {description}
        </p>
      )}
    </div>
  );
}