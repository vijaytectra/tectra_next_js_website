type SectionLabelProps = {
  children: string;
  theme?: "dark" | "light";
};

export default function SectionLabel({
  children,
  theme = "dark",
}: SectionLabelProps) {
  const border =
    theme === "dark" ? "border-color-neutral-400" : "border-color-neutral-500";
  const text =
    theme === "dark" ? "text-color-neutral-400" : "text-color-neutral-500";

  return (
    <div
      className={`inline-flex items-center gap-5 border-t py-1 pr-4 ${border}`}
    >
      <span
        className={`font-dm-mono text-base font-normal leading-5 tracking-[3.2px] ${text}`}
      >
        {children}
      </span>
    </div>
  );
}
