export const ASSETS = {
  splashLogo: "/splash-logo.png",
  logo: "/logo.png",
  aiIcon: "/ai.svg",
  phoneHero: "/phone.png",
  phoneShowcase: "/phone-showcase.png",
  landscape: "/abra-landscape.jpg",
  abraMap: "/abra-map.svg",
} as const;

export const SOCIALS = [
  {
    label: "Gmail",
    href: "mailto:uateentech@gmail.com",
  },
] as const;

export const CONTACT_EMAIL = "uateentech@gmail.com";

export const NAV_LINKS = [
  { href: "#features", label: "Features" },
  { href: "#map", label: "Risk Map" },
  { href: "#how", label: "How It Works" },
  { href: "#community", label: "For Everyone" },
  { href: "#faq", label: "FAQ" },
  { href: "#download", label: "Download" },
] as const;

export const FEATURES = [
  {
    icon: "map" as const,
    title: "Interactive Risk Map",
    desc: "Live flood probabilities, river water levels, and designated safe zones across all 27 municipalities.",
  },
  {
    icon: "ai" as const,
    title: "AI Flood Predictor",
    desc: "Analyzes historical weather data, topography, and real-time rainfall to forecast flood risks hours in advance.",
  },
  {
    icon: "users" as const,
    title: "Community Reporting",
    desc: "Locals report rising water levels, blocked drainages, or landslides with photo proof and geolocation.",
  },
  {
    icon: "shield" as const,
    title: "Emergency Routing",
    desc: "Suggests safe evacuation routes that avoid predicted flood paths and hazards.",
  },
] as const;

export const STATS = [
  { value: "27", label: "Municipalities Monitored", icon: "map" as const },
  { value: "AI-Powered", label: "Flood prediction", icon: "ai" as const },
  { value: "Real-time", label: "Alerts & reports", icon: "shield" as const },
  { value: "Community", label: "Driven safety", icon: "users" as const },
] as const;

export const HOW_STEPS = [
  { n: "01", title: "Monitor", desc: "AI analyzes weather, river, and rainfall data from PAGASA and local sensors." },
  { n: "02", title: "Predict", desc: "The system maps high-risk areas and forecasts flood levels hours ahead." },
  { n: "03", title: "Alert", desc: "Users and LGUs receive localized notifications before the water rises." },
  { n: "04", title: "Act", desc: "Evacuate using safe routes or report on-ground conditions in real time." },
] as const;

export const COMMUNITY = [
  {
    icon: "users" as const,
    title: "Citizens",
    desc: "Receive life-saving alerts, flood risk updates, and safe evacuation routes.",
  },
  {
    icon: "shield" as const,
    title: "LGUs & MDRRMOs",
    desc: "Get a command center dashboard to allocate rescue resources efficiently.",
    link: "Request LGU access",
  },
  {
    icon: "compass" as const,
    title: "Communities",
    desc: "Stronger preparedness in every barangay with shared data and early warnings.",
  },
] as const;

export const FAQS = [
  {
    q: "What is BantAI?",
    a: "BantAI is an AI-powered flood prediction and disaster preparedness platform for Abra, Philippines. It predicts flood risk hours in advance, sends real-time alerts, and guides communities to safety. (Bantay + AI.)",
  },
  {
    q: "Is BantAI free for citizens?",
    a: "Yes. Real-time alerts, flood risk maps, and safety features are completely free for citizens of Abra.",
  },
  {
    q: "How does the AI predict floods?",
    a: "BantAI combines historical weather data, topography, and real-time rainfall from sources like PAGASA and local river sensors to forecast floods hours before they hit.",
  },
  {
    q: "Do LGUs get a dashboard?",
    a: "Yes. Provincial and municipal LGUs and MDRRMOs get a dedicated command center dashboard to monitor risk levels and coordinate rescue and response efforts.",
  },
  {
    q: "Will alerts work without internet?",
    a: "Yes. BantAI supports offline SMS alerts so that even communities without reliable internet still receive critical warnings.",
  },
  {
    q: "Does BantAI cover all of Abra?",
    a: "Yes. All 27 municipalities of Abra are monitored. Expanded coverage for the Cordillera region is on the roadmap.",
  },
  {
    q: "Will an iOS version be available?",
    a: "An iOS version is on our roadmap. For now, BantAI is available exclusively on Android via APK download.",
  },
] as const;

export const FOOTER_LINKS = {
  Product: [
    { label: "Features", href: "#features" },
    { label: "How it works", href: "#how" },
    { label: "Download", href: "#download" },
    { label: "FAQ", href: "#faq" },
  ],
} as const;