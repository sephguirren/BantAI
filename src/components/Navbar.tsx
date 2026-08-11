import * as React from "react";
import { Menu, X, Map, Rocket, Users, Download, Send } from "lucide-react";

import { AboutDialog } from "@/components/AboutDialog";
import { BrandLogo } from "@/components/PublishingDialog";
import { ContactDialog } from "@/components/ContactDialog";
import { ASSETS, NAV_LINKS } from "@/lib/content";

const NAV_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  "#features": Rocket,
  "#map": Map,
  "#how": Rocket,
  "#community": Users,
  "#download": Download,
};

function BackToTopLogo() {
  return (
    <svg width="20" height="20" viewBox="0 0 32 32" fill="none" aria-hidden>
      <path
        d="M16 2C10 2 5 7 5 13c0 8 11 17 11 17s11-9 11-17c0-6-5-11-11-11zm0 15a4 4 0 110-8 4 4 0 010 8z"
        fill="currentColor"
      />
    </svg>
  );
}

function LogoButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex cursor-pointer items-center gap-2.5"
      aria-label="About BantAI"
    >
      <img src={ASSETS.splashLogo} alt="" className="h-9 w-9 shrink-0 object-contain" />
      <BrandLogo />
    </button>
  );
}

export function Navbar({
  aboutOpen,
  setAboutOpen,
  contactOpen,
  setContactOpen,
  onPublishingOpen,
}: {
  aboutOpen: boolean;
  setAboutOpen: (open: boolean) => void;
  contactOpen: boolean;
  setContactOpen: (open: boolean) => void;
  onPublishingOpen: (open: boolean) => void;
}) {
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top transparent bar (hidden once scrolled) */}
      <header
        className="fixed inset-x-0 top-0 z-50 bg-transparent transition-all duration-500"
        style={{
          opacity: scrolled ? 0 : 1,
          pointerEvents: scrolled ? "none" : "auto",
          transform: scrolled ? "translateY(-100%)" : "translateY(0)",
        }}
      >
        <div className="container-wide flex h-16 items-center justify-between">
          <LogoButton onClick={() => setAboutOpen(true)} />
          <nav className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => {
              const Icon = NAV_ICONS[link.href] ?? Rocket;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Icon className="h-4 w-4 opacity-80" />
                  {link.label}
                </a>
              );
            })}
          </nav>
          <div className="hidden md:block">
            <a
              href="#download"
              className="btn-primary inline-flex items-center gap-2 cursor-pointer"
            >
              <Download className="h-4 w-4" />
              Download App
            </a>
          </div>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card md:hidden cursor-pointer"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {menuOpen && (
          <div className="border-t border-border bg-background md:hidden">
            <div className="container-wide flex flex-col gap-1 py-4">
              {NAV_LINKS.map((link) => {
                const Icon = NAV_ICONS[link.href] ?? Rocket;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="inline-flex items-center gap-2.5 rounded-lg px-3 py-3 text-sm font-medium hover:bg-muted"
                  >
                    <Icon className="h-4 w-4 text-forest" />
                    {link.label}
                  </a>
                );
              })}
              <a
                href="#download"
                onClick={() => setMenuOpen(false)}
                className="btn-primary mt-2 inline-flex items-center gap-2 self-start cursor-pointer w-full justify-center"
              >
                <Download className="h-4 w-4" />
                Download App
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Floating pill navigation (appears after scroll, desktop) */}
      <nav
        className="floating-pill-nav"
        style={{
          opacity: scrolled ? 1 : 0,
          pointerEvents: scrolled ? "auto" : "none",
          transform: scrolled
            ? "translateX(-50%) translateY(0)"
            : "translateX(-50%) translateY(-20px)",
        }}
      >
        <a href="#" className="floating-pill-logo" aria-label="Back to top">
          <BackToTopLogo />
        </a>
        <span className="floating-pill-divider" />
        {NAV_LINKS.map((link) => {
          const Icon = NAV_ICONS[link.href] ?? Rocket;
          return (
            <a key={link.href} href={link.href} className="floating-pill-link">
              <Icon className="h-4 w-4" />
              <span>{link.label}</span>
            </a>
          );
        })}
        <span className="floating-pill-divider" />
        <a href="#download" className="floating-pill-link floating-pill-download">
          <Download className="h-4 w-4" />
          <span>Download App</span>
        </a>
      </nav>

      {/* Floating hamburger (mobile, after scroll) */}
      <button
        onClick={() => setMenuOpen((v) => !v)}
        className="mobile-hamburger-toggle md:hidden cursor-pointer"
        style={{
          opacity: scrolled ? 1 : 0,
          pointerEvents: scrolled ? "auto" : "none",
          transform: scrolled ? "translateY(0)" : "translateY(-20px)",
        }}
        aria-label="Toggle menu"
      >
        {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {/* Mobile sidebar */}
      <div
        className="mobile-sidebar-backdrop md:hidden"
        style={{ opacity: menuOpen ? 1 : 0, pointerEvents: menuOpen ? "auto" : "none" }}
        onClick={() => setMenuOpen(false)}
      />
      <aside
        className="mobile-sidebar md:hidden"
        style={{ transform: menuOpen ? "translateX(0)" : "translateX(100%)" }}
      >
        <div className="flex items-center justify-between p-5 border-b border-border">
          <LogoButton onClick={() => setMenuOpen(false)} />
          <button
            onClick={() => setMenuOpen(false)}
            className="grid h-10 w-10 place-items-center rounded-full border border-border bg-background hover:bg-muted transition-colors cursor-pointer"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav className="flex flex-col gap-1 p-4 flex-1">
          {NAV_LINKS.map((link, i) => {
            const Icon = NAV_ICONS[link.href] ?? Rocket;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="mobile-sidebar-link"
                style={{ animationDelay: menuOpen ? `${i * 50}ms` : "0ms" }}
              >
                <Icon className="h-5 w-5 text-forest" />
                {link.label}
              </a>
            );
          })}
        </nav>
        <div className="p-4 border-t border-border">
          <a
            href="#download"
            onClick={() => setMenuOpen(false)}
            className="btn-primary w-full inline-flex items-center gap-2 justify-center"
          >
            <Download className="h-4 w-4" />
            Download App
          </a>
        </div>
      </aside>

      {/* Floating Contact FAB */}
      <button
        type="button"
        onClick={() => setContactOpen(true)}
        className="floating-contact-fab"
        aria-label="Contact Us"
      >
        <Send className="h-5 w-5 shrink-0" />
        <span className="floating-contact-fab-label" style={{ maxWidth: undefined, opacity: 1, marginLeft: 8 }}>
          Contact Us
        </span>
      </button>

      <ContactDialog open={contactOpen} onOpenChange={setContactOpen} />
      <AboutDialog open={aboutOpen} onOpenChange={setAboutOpen} />
    </>
  );
}