// Official Trivest Partners wordmark (navy + teal). The colored variant reads
// cleanly on the site's light surfaces (white header, cards, and footer).
import trivestLogo from "@/assets/trivest/Trivest-logo-colored.svg";

export function TrivestMark({ className = "" }: { className?: string }) {
  return <img src={trivestLogo} alt="Trivest Partners" className={`h-8 w-auto ${className}`} />;
}
