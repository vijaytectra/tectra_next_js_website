/** URL-safe paths for assets with spaces in filenames */
function asset(path: string): string {
  return `/${path.split("/").map(encodeURIComponent).join("/")}`;
}

export const images = {
  clientWork: (index: 1 | 2 | 3 | 4) =>
    asset(`images/client work ${index}.jpg`),
  joinOurTeam: asset("images/join_our_team.jpg"),
  ourVision: asset("images/our vision image.jpg"),
  ourProducts: asset("images/our products image.png"),
  whatWeDoDesign: asset("images/design.png"),
  whatWeDoDevelop: asset("images/develop.png"),
  whatWeDoGrow: asset("images/grow.png"),
  blog: [
    asset("images/c6531fcbbac6b10d71f65483a3671060249f73a4.png"),
    asset("images/d054aa3f9e542cb7d7197f95067432bbbd4bfe45.png"),
    asset("images/f9a40d23ddce07931956897f2fcb7f37996390a2.png"),
  ] as const,
  productMotherly: asset("images/image 115.png"),
  productElderly: asset("images/ChatGPT Image May 30, 2026, 06_27_07 PM_upscayl_4x_ultrasharp-4x 1.png"),
  clientLogo: (index: number) => {
    if (index === 1) return asset("logo/image 49.png");
    if (index === 2) return asset("logo/image 50.png");
    if (index === 3) return asset("logo/image 51.png");
    if (index === 4) return asset("logo/image 53.png");
    if (index === 5) return asset("logo/image 55.png");
    if (index === 6) return asset("logo/image 56.png");
    if (index === 7) return asset("logo/image 60.png");
    if (index === 8) return asset("logo/image 77.png");
    if (index === 9) return asset("logo/image 75.png");
    if (index === 10) return asset("logo/image 78.png");
    if (index === 11) return asset("logo/image 79.png");
    return asset(`logo/clients/${index}.png`);
  },
} as const;

export const serviceIcons = {
  software: asset("software solutions.svg"),
  marketing: asset("digital marketing.svg"),
  branding: asset("branding.svg"),
  experience: asset("experience designing.svg"),
} as const;

export const icons = {
  arrowRight: "/logo/arrow-left.svg",
  arrowRightLight: "/logo/talk%20to%20us.svg",
  arrowUpRight: "/logo/arrow-up-right.svg",
} as const;
