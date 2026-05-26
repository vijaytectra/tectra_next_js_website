import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  className?: string;
};

export default function Logo({ className = "" }: LogoProps) {
  return (
    <Link
      href="/"
      className={`relative block shrink-0 transition-opacity hover:opacity-85 ${className}`}
      aria-label="Tectra Technologies home"
    >
      <span className="relative block h-10 w-[220px] sm:h-11 sm:w-[260px] lg:h-12 lg:w-[300px]">
        <Image
          src="/logo/tectra_full_logo.png"
          alt="Tectra Technologies"
          fill
          priority
          className="object-contain object-left"
          sizes="(max-width: 1024px) 260px, 300px"
        />
      </span>
    </Link>
  );
}
