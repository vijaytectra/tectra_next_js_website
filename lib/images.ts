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
  whatWeDoDesign: asset("images/what we do design and for develop.jpg"),
  blog: [
    asset("images/c6531fcbbac6b10d71f65483a3671060249f73a4.png"),
    asset("images/d054aa3f9e542cb7d7197f95067432bbbd4bfe45.png"),
    asset("images/f9a40d23ddce07931956897f2fcb7f37996390a2.png"),
  ] as const,
  productMotherly: asset("images/motherly.png"),
  productElderly: asset("images/elderly.png"),
  clientLogo: (index: number) => asset(`logo/clients/${index}.png`),
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
