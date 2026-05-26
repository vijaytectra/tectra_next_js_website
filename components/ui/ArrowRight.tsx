import Image from "next/image";
import { icons } from "@/lib/images";

type ArrowRightProps = {
  /** Light = dark stroke on white/light buttons. Dark = white arrow on black buttons. */
  tone?: "light" | "dark";
  className?: string;
  size?: number;
};

export default function ArrowRight({
  tone = "light",
  className = "",
  size = 20,
}: ArrowRightProps) {
  const src = tone === "light" ? icons.arrowRightLight : icons.arrowRight;

  return (
    <Image
      src={src}
      alt=""
      width={size}
      height={size}
      unoptimized
      className={`shrink-0 ${tone === "dark" ? "invert" : ""} ${className}`}
      style={{ width: size, height: size }}
      aria-hidden
    />
  );
}
