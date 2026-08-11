import { BrandLogo } from "@/components/PublishingDialog";
import { SocialLinks } from "@/components/SocialLinks";
import { StoreBadge } from "@/components/StoreBadge";
import { FOOTER_LINKS, SOCIALS } from "@/lib/content";

const CONNECT = [...SOCIALS].map(({ label, href }) => ({ label, href }));

const COMPANY_LINKS: { label: string; action: "about" | "contact" | "privacy" | "terms" }[] = [
  { label: "About", action: "about" },
  { label: "Contact", action: "contact" },
  { label: "Privacy", action: "privacy" },
  { label: "Terms", action: "terms" },
];

export function Footer({
  onPublishingOpen,
  onAboutOpen,
  onContactOpen,
  onPrivacyOpen,
  onTermsOpen,
}: {
  onPublishingOpen: (open: boolean) => void;
  onAboutOpen: () => void;
  onContactOpen: () => void;
  onPrivacyOpen: () => void;
  onTermsOpen: () => void;
}) {
  const handleCompany = (action: (typeof COMPANY_LINKS)[number]["action"]) => {
    switch (action) {
      case "about":
        onAboutOpen();
        break;
      case "contact":
        onContactOpen();
        break;
      case "privacy":
        onPrivacyOpen();
        break;
      case "terms":
        onTermsOpen();
        break;
    }
  };

  return (
    <footer className="border-t border-border bg-card">
      <div className="container-wide py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <BrandLogo />
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Your 24/7 flood warning companion for Abra, Philippines.
            </p>
            <SocialLinks className="mt-5" />
            <div className="mt-5 flex flex-wrap gap-2">
              <StoreBadge onClick={() => onPublishingOpen(true)} />
            </div>
          </div>
          <FooterColumn title="Product" links={FOOTER_LINKS.Product} />
          <div>
            <div className="text-sm font-bold text-foreground">Company</div>
            <ul className="mt-4 space-y-2">
              {COMPANY_LINKS.map((link) => (
                <li key={link.action}>
                  <button
                    type="button"
                    onClick={() => handleCompany(link.action)}
                    className="text-sm text-muted-foreground hover:text-forest transition-colors cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <FooterColumn title="Connect" links={CONNECT} />
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <span>© 2026 BantAI. Made with care for Abra, Philippines.</span>
          <span className="italic">Bantay + AI</span>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: readonly { label: string; href: string }[];
}) {
  return (
    <div>
      <div className="text-sm font-bold text-foreground">{title}</div>
      <ul className="mt-4 space-y-2">
        {links.map((link) => (
          <li key={link.label}>
            <a href={link.href} className="text-sm text-muted-foreground hover:text-forest">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}