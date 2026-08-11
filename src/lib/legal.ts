import type { LegalSection } from "@/components/LegalDialog";

export const PRIVACY_UPDATED = "Last updated: August 2026";

export const PRIVACY_SECTIONS: readonly LegalSection[] = [
  {
    heading: "What we collect",
    body: "BantAI collects location data, weather and river-level readings, and community reports you submit. We collect only the information needed to provide flood forecasts, alerts, and safety guidance for Abra, Philippines.",
  },
  {
    heading: "How we use it",
    body: "Your data powers AI flood prediction, localized alerts, evacuation routing, and community reporting. We use it to help you — and your barangay — prepare and respond to disasters.",
  },
  {
    heading: "Sharing",
    body: "We share anonymized hazard data with LGUs and MDRRMOs for disaster coordination. We never sell your personal information to third parties.",
  },
  {
    heading: "Offline alerts",
    body: "For offline SMS alerts, a registered phone number is used solely to deliver critical warnings. You can opt out of SMS at any time.",
  },
  {
    heading: "Contact",
    body: "For privacy questions or requests, email uateentech@gmail.com.",
  },
];

export const TERMS_UPDATED = "Last updated: August 2026";

export const TERMS_SECTIONS: readonly LegalSection[] = [
  {
    heading: "Acceptance",
    body: "By using BantAI, you agree to these terms. If you do not agree, please do not use the app.",
  },
  {
    heading: "Service",
    body: "BantAI provides AI-driven flood risk forecasts and disaster preparedness tools for Abra, Philippines. Forecasts are estimates for guidance and do not replace official warnings from PAGASA or your local government.",
  },
  {
    heading: "Not a substitute",
    body: "Always follow evacuation orders and instructions from authorities. BantAI is a decision-support tool, not a guarantee of safety.",
  },
  {
    heading: "Community reports",
    body: "You agree to submit accurate, lawful community reports. Misleading reports that endanger others may result in removal from the service.",
  },
  {
    heading: "Availability",
    body: "BantAI is provided 'as is'. We may update, suspend, or discontinue features at any time.",
  },
  {
    heading: "Contact",
    body: "For questions about these terms, email uateentech@gmail.com.",
  },
];
