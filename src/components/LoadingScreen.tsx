import * as React from "react";

import { ASSETS } from "@/lib/content";
import { cn } from "@/lib/utils";

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = React.useState<"loading" | "exit">("loading");

  React.useEffect(() => {
    const timer = window.setTimeout(() => setPhase("exit"), 2200);
    return () => window.clearTimeout(timer);
  }, []);

  React.useEffect(() => {
    if (phase !== "exit") return;
    const timer = window.setTimeout(onComplete, 650);
    return () => window.clearTimeout(timer);
  }, [phase, onComplete]);

  return (
    <div
      className={cn("loading-screen", phase === "exit" && "loading-screen--exit")}
      aria-live="polite"
      aria-busy={phase === "loading"}
      aria-label="Loading BantAI"
    >
      <div
        className="loading-screen__glow"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--leaf) 40%, transparent), transparent 70%)",
        }}
        aria-hidden
      />
      <img src={ASSETS.splashLogo} alt="BantAI" className="loading-screen__logo" width={320} height={320} />
      <p className="loading-screen__tagline">
        <span className="text-foreground">Bant</span>
        <span className="text-accent">AI</span>
      </p>
      <div className="loading-screen__bar" aria-hidden>
        <span className="loading-screen__bar-fill" />
      </div>
    </div>
  );
}