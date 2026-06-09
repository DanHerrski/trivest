// Official Haveli Investments logo. White variant is used because the site
// runs on a dark theme (header, card, and footer all sit on dark surfaces).
import haveliLogo from "@/assets/haveli-logo-white.png";

export function HaveliMark({ className = "" }: { className?: string }) {
  return (
    <img
      src={haveliLogo}
      alt="Haveli Investments"
      className={`h-7 w-auto ${className}`}
    />
  );
}
