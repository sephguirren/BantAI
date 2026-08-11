import { SOCIALS } from "@/lib/content";
import { SOCIAL_ICONS } from "@/components/icons";
import { cn } from "@/lib/utils";

export function SocialLinks({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      {SOCIALS.map(({ label, href }) => {
        const Icon = SOCIAL_ICONS[label] ?? SOCIAL_ICONS.Gmail;
        const isExternal = href.startsWith("http");
        return (
          <a
            key={label}
            href={href}
            {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            aria-label={label === "Gmail" ? "Email BantAI on Gmail" : `Follow BantAI on ${label}`}
            className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-background text-muted-foreground transition-colors hover:border-forest/30 hover:bg-forest/5 hover:text-forest"
          >
            <Icon className="h-4 w-4" />
          </a>
        );
      })}
    </div>
  );
}