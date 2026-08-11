import * as React from "react";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { StatsBar } from "@/components/StatsBar";
import { Features } from "@/components/Features";
import { AppPreview } from "@/components/AppPreview";
import { HowItWorks } from "@/components/HowItWorks";
import { MapSection } from "@/components/MapSection";
import { Community } from "@/components/Community";
import { Sustainability } from "@/components/Sustainability";
import { Download } from "@/components/Download";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { LoadingScreen } from "@/components/LoadingScreen";
import { PublishingDialog } from "@/components/PublishingDialog";
import { ContactDialog } from "@/components/ContactDialog";
import { LegalDialog } from "@/components/LegalDialog";
import { useRevealAnimation } from "@/lib/useReveal";
import { PRIVACY_SECTIONS, PRIVACY_UPDATED, TERMS_SECTIONS, TERMS_UPDATED } from "@/lib/legal";

function Home() {
  useRevealAnimation();

  const [aboutOpen, setAboutOpen] = React.useState(false);
  const [publishingOpen, setPublishingOpen] = React.useState(false);
  const [contactOpen, setContactOpen] = React.useState(false);
  const [privacyOpen, setPrivacyOpen] = React.useState(false);
  const [termsOpen, setTermsOpen] = React.useState(false);

  const openPublishing = React.useCallback(() => setPublishingOpen(true), []);

  return (
    <div className="bg-background text-foreground">
      <Navbar
        aboutOpen={aboutOpen}
        setAboutOpen={setAboutOpen}
        contactOpen={contactOpen}
        setContactOpen={setContactOpen}
        onPublishingOpen={setPublishingOpen}
      />
      <main>
        <Hero onPublishingOpen={openPublishing} />
        <StatsBar />
        <Features />
        <AppPreview />
        <HowItWorks />
        <MapSection />
        <Community />
        <Sustainability />
        <Download onPublishingOpen={openPublishing} />
        <FAQ />
      </main>
      <Footer
        onPublishingOpen={openPublishing}
        onAboutOpen={() => setAboutOpen(true)}
        onContactOpen={() => setContactOpen(true)}
        onPrivacyOpen={() => setPrivacyOpen(true)}
        onTermsOpen={() => setTermsOpen(true)}
      />
      <PublishingDialog open={publishingOpen} onOpenChange={setPublishingOpen} />
      <ContactDialog open={contactOpen} onOpenChange={setContactOpen} />
      <LegalDialog
        open={privacyOpen}
        onOpenChange={setPrivacyOpen}
        title="Privacy Policy"
        updated={PRIVACY_UPDATED}
        sections={PRIVACY_SECTIONS}
      />
      <LegalDialog
        open={termsOpen}
        onOpenChange={setTermsOpen}
        title="Terms of Service"
        updated={TERMS_UPDATED}
        sections={TERMS_SECTIONS}
      />
    </div>
  );
}

export default function App() {
  const [ready, setReady] = React.useState(false);

  return ready ? <Home /> : <LoadingScreen onComplete={() => setReady(true)} />;
}