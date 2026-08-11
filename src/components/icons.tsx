import * as React from "react";
import {
  Compass,
  Map as MapIcon,
  CarFront,
  ShieldCheck,
  Leaf,
  Sparkles,
  Users,
  Send,
} from "lucide-react";

import { ASSETS } from "@/lib/content";

/** Renders an SVG asset as a CSS mask so it inherits `currentColor`. */
export function MaskIcon({
  src,
  className,
}: {
  src: string;
  className?: string;
}) {
  return (
    <span
      aria-hidden
      className={`inline-block shrink-0 bg-current ${className ?? ""}`}
      style={{
        WebkitMaskImage: `url(${src})`,
        maskImage: `url(${src})`,
        maskRepeat: "no-repeat",
        maskPosition: "center",
        maskSize: "contain",
        WebkitMaskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        WebkitMaskSize: "contain",
      }}
    />
  );
}

/** The "AI" sparkle glyph used across chips and buttons. */
export function AiIcon({ className }: { className?: string }) {
  return <MaskIcon src={ASSETS.aiIcon} className={className} />;
}

type IconName =
  | "compass"
  | "map"
  | "ai"
  | "car"
  | "shield"
  | "leaf"
  | "sparkles"
  | "users";

const registry: Record<IconName, React.ComponentType<{ className?: string }>> = {
  compass: Compass,
  map: MapIcon,
  ai: AiIcon,
  car: CarFront,
  shield: ShieldCheck,
  leaf: Leaf,
  sparkles: Sparkles,
  users: Users,
};

export function AppIcon({
  name,
  className,
}: {
  name: IconName;
  className?: string;
}) {
  const Cmp = registry[name];
  return <Cmp className={className} />;
}

/* ---- Social platform icons (unique paths) ---- */

const facebookPath =
  "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z";

const instagramOutline = (
  <>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </>
);

const tiktokPath =
  "M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z";

const twitterPath =
  "M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z";

function Svg({
  viewBox,
  className,
  children,
}: {
  viewBox: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <svg viewBox={viewBox} className={className} aria-hidden fill="none" xmlns="http://www.w3.org/2000/svg">
      {children}
    </svg>
  );
}

export function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d={facebookPath} />
    </svg>
  );
}

export function InstagramIcon({ className }: { className?: string }) {
  return (
    <Svg viewBox="0 0 24 24" className={className}>
      {instagramOutline}
    </Svg>
  );
}

export function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d={tiktokPath} />
    </svg>
  );
}

export function LinkedInIcon({ className }: { className?: string }) {
  return (
    <Svg viewBox="0 0 24 24" className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </Svg>
  );
}

/* Map social labels from content to components. */
export const SOCIAL_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Facebook: FacebookIcon,
  Instagram: InstagramIcon,
  TikTok: TikTokIcon,
  LinkedIn: LinkedInIcon,
  Gmail: Send,
};

export { Sparkles, Users };
export type { IconName };