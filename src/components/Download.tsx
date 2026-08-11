import * as React from "react";
import { QRCodeSVG } from "qrcode.react";

import { StoreBadge } from "@/components/StoreBadge";
import { AiIcon } from "@/components/icons";
import { ASSETS } from "@/lib/content";

export function Download({ onPublishingOpen }: { onPublishingOpen: (open: boolean) => void }) {
  const [email, setEmail] = React.useState("");
  const [subscribed, setSubscribed] = React.useState(false);

  const qrValue = React.useMemo(
    () => `${typeof window !== "undefined" ? window.location.origin : ""}/?qr=1`,
    []
  );

  // The printed QR code points back to /?qr=1 — open the publishing dialog when scanned.
  React.useEffect(() => {
    if (typeof window === "undefined") return;
    if (new URLSearchParams(window.location.search).get("qr") === "1") {
      onPublishingOpen(true);
      const url = new URL(window.location.href);
      url.searchParams.delete("qr");
      window.history.replaceState({}, "", url.pathname + url.hash);
    }
  }, [onPublishingOpen]);

  return (
    <section id="download" className="py-24">
      <div className="container-wide">
        <div className="grid items-center gap-12 rounded-[2rem] border border-border bg-card p-8 shadow-card md:p-12 lg:grid-cols-[1.1fr_1fr]">
          <div className="reveal">
            <span className="chip">
              <AiIcon className="h-3.5 w-3.5" />
              Free download · Android
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-5xl">
              Stay ready. <span className="text-[#053C26]">Stay safe.</span>
            </h2>
            <p className="mt-4 max-w-lg text-muted-foreground">
              BantAI is free for citizens. Available on Android via APK download — with offline SMS
              alerts so warnings reach everyone.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <StoreBadge onClick={() => onPublishingOpen(true)} />
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-[auto_1fr]">
              <div className="grid h-24 w-24 place-items-center rounded-2xl border border-border bg-background p-2">
                <QRCodeSVG
                  value={qrValue}
                  size={72}
                  level="M"
                  bgColor="transparent"
                  fgColor="var(--foreground, #1a1a1a)"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              <div>
                <div className="text-sm font-semibold">Scan to download</div>
                <p className="mt-1 text-sm text-muted-foreground">
                  Or get launch updates straight to your inbox.
                </p>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (email) setSubscribed(true);
                  }}
                  className="mt-3 flex flex-col gap-2 sm:flex-row"
                >
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="min-w-0 flex-1 rounded-full border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/30"
                  />
                  <button type="submit" className="btn-primary !py-2.5 cursor-pointer">
                    {subscribed ? "Thanks! 🎉" : "Notify me"}
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="reveal relative mx-auto w-full max-w-xs">
            <div
              className="absolute inset-0 -z-10 rounded-full blur-3xl opacity-60"
              style={{
                background:
                  "radial-gradient(circle, color-mix(in oklab, var(--leaf) 35%, transparent), transparent 70%)",
              }}
              aria-hidden
            />
          <img
            src={ASSETS.phoneHero}
            alt="BantAI app on Android"
            width={1419}
            height={2796}
            loading="lazy"
            className="mx-auto w-[82%] animate-float drop-shadow-2xl"
          />
          </div>
        </div>
      </div>
    </section>
  );
}