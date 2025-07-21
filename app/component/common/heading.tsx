interface HeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function Heading({
  title,
  subtitle,
  align = "center",
}: HeadingProps) {
  const alignment = align === "center" ? "text-center" : "text-left";
  return (
    <div className={`mb-10 ${alignment}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-primary">{title}</h2>
      {subtitle && <p className="text-gray-500 mt-2">{subtitle}</p>}
    </div>
  );
}
