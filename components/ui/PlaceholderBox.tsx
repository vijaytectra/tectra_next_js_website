type PlaceholderBoxProps = {
  className?: string;
  label?: string;
};

export default function PlaceholderBox({
  className = "",
  label,
}: PlaceholderBoxProps) {
  return (
    <div
      className={`flex items-center justify-center bg-color-neutral-700/40 ${className}`}
      aria-hidden={!label}
    >
      {label ? (
        <span className="font-dm-sans text-sm text-color-neutral-500">{label}</span>
      ) : null}
    </div>
  );
}
