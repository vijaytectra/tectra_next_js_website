type SectionLabelProps = {
  children: string;
  theme?: "dark" | "light";
};

export default function SectionLabel({
  children,
  theme = "dark",
}: SectionLabelProps) {
  const border =
    theme === "dark" ? "border-color-neutral-400" : "border-[#ADADAD]";
  const text =
    theme === "dark" ? "text-color-neutral-400" : "text-[#ADADAD]";

  return (
    <div
      className={`flex w-fit self-start items-center gap-[19.2px] border-t pt-[4px] pr-[16px] pb-[4px] pl-0 ${border}`}
    >
      <span
        className={`font-dm-mono text-base font-normal leading-[1.3] tracking-[3.2px] ${text}`}
      >
        {children}
      </span>
    </div>
  );
}
