import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { AiIcon } from "@/components/icons";
import { CONTACT_EMAIL } from "@/lib/content";

/** The aerobic "Bantay + AI" logo used across the app. */
export function BrandLogo({ className }: { className?: string }) {
  return (
    <span className="text-xl font-extrabold tracking-tight">
      <span className="text-foreground">Bant</span>
      <span className="text-accent">AI</span>
    </span>
  );
}

/**
 * "Publishing Soon!" dialog — shown from every Store / Download trigger.
 * Mirrors the live site: play logo, contact & support card and a "Got it" CTA.
 */
export function PublishingDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md border-border text-center p-6 sm:p-7">
        <DialogHeader className="items-center space-y-5">
          <div className="relative">
            <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-secondary/80 border border-border/60 shadow-sm">
              <PlayLogo />
            </div>
            <span
              className="absolute -bottom-1.5 -right-1.5 flex h-7 w-7 items-center justify-center rounded-xl bg-amber-500 text-white shadow-glow border-2 border-card"
              style={{ animation: "spin 5s linear infinite" }}
            >
              <SettingsGlyph />
            </span>
          </div>
          <div className="space-y-2">
            <DialogTitle className="text-2xl font-extrabold tracking-tight text-foreground">
              Publishing Soon!
            </DialogTitle>
            <DialogDescription className="text-sm text-muted-foreground leading-relaxed">
              BantAI is currently in active development. We are preparing our release and will
              publish on the Google Play Store very soon.
            </DialogDescription>
          </div>
        </DialogHeader>

        <div className="mt-5 rounded-2xl border border-border bg-secondary/30 p-4 text-left space-y-2.5">
          <div className="text-[10px] font-extrabold uppercase tracking-wider text-muted-foreground">
            Contact &amp; Support
          </div>
          <p className="text-xs text-muted-foreground leading-normal">
            For early access, partnership inquiries, or general questions, you can contact us
            directly:
          </p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="group flex items-center gap-3 rounded-xl border border-border/80 bg-card p-2.5 text-sm font-semibold text-foreground transition-all duration-200 hover:border-forest/40 hover:bg-forest/5 hover:text-forest"
          >
            <div className="grid h-8 w-8 place-items-center rounded-lg bg-forest/10 text-forest shrink-0">
              <AiIcon className="h-4.5 w-4.5" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-[10px] text-muted-foreground font-medium">Email Address</div>
              <div className="text-xs font-bold truncate group-hover:text-forest">
                {CONTACT_EMAIL}
              </div>
            </div>
            <ArrowGlyph />
          </a>
        </div>

        <div className="mt-6 flex flex-col gap-2">
          <button
            type="button"
            onClick={() => onOpenChange(false)}
            className="btn-primary w-full py-2.5 rounded-xl font-semibold cursor-pointer"
          >
            Got it
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function PlayLogo() {
  return (
    <svg className="h-12 w-12" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask id="play-mask" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="7" y="3" width="24" height="26">
        <path
          d="M30.0484 14.4004C31.3172 15.0986 31.3172 16.9014 30.0484 17.5996L9.75627 28.7659C8.52052 29.4459 7 28.5634 7 27.1663L7 4.83374C7 3.43657 8.52052 2.55415 9.75627 3.23415L30.0484 14.4004Z"
          fill="#C4C4C4"
        />
      </mask>
      <g mask="url(#play-mask)">
        <path
          d="M7.63473 28.5466L20.2923 15.8179L7.84319 3.29883C7.34653 3.61721 7 4.1669 7 4.8339V27.1664C7 27.7355 7.25223 28.2191 7.63473 28.5466Z"
          fill="url(#p0)"
        />
        <path
          d="M30.048 14.4003C31.3169 15.0985 31.3169 16.9012 30.048 17.5994L24.9287 20.4165L20.292 15.8175L24.6923 11.4531L30.048 14.4003Z"
          fill="url(#p1)"
        />
        <path
          d="M24.9292 20.4168L20.2924 15.8179L7.63477 28.5466C8.19139 29.0232 9.02389 29.1691 9.75635 28.766L24.9292 20.4168Z"
          fill="url(#p2)"
        />
        <path
          d="M7.84277 3.29865L20.2919 15.8177L24.6922 11.4533L9.75583 3.23415C9.11003 2.87878 8.38646 2.95013 7.84277 3.29865Z"
          fill="url(#p3)"
        />
      </g>
      <defs>
        <linearGradient id="p0" x1="15.6769" y1="10.874" x2="7.07106" y2="19.5506" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00C3FF" />
          <stop offset="1" stopColor="#1BE2FA" />
        </linearGradient>
        <linearGradient id="p1" x1="20.292" y1="15.8176" x2="31.7381" y2="15.8176" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFCE00" />
          <stop offset="1" stopColor="#FFEA00" />
        </linearGradient>
        <linearGradient id="p2" x1="7.36932" y1="30.1004" x2="22.595" y2="17.8937" gradientUnits="userSpaceOnUse">
          <stop stopColor="#DE2453" />
          <stop offset="1" stopColor="#FE3944" />
        </linearGradient>
        <linearGradient id="p3" x1="8.10725" y1="1.90137" x2="22.5971" y2="13.7365" gradientUnits="userSpaceOnUse">
          <stop stopColor="#11D574" />
          <stop offset="1" stopColor="#01F176" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function SettingsGlyph() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function ArrowGlyph() {
  return (
    <svg
      className="h-4 w-4 text-muted-foreground shrink-0 group-hover:translate-x-0.5 group-hover:text-forest transition-all"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  );
}