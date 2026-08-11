# BantAI — Abra, PH

**Predict. Prepare. Protect.** BantAI (Bantay + AI) is an AI-powered flood prediction and disaster
preparedness web app built for the province of **Abra, Philippines**. It forecasts flood and
landslide risk across all 27 municipalities, delivers real-time alerts, and guides communities to
safety — before the water rises.

---

## ✨ Features

- **Interactive Risk Map** — An SVG map of all 27 Abra municipalities colored by live risk level
  (Low / Moderate / High / Critical), rebuilt from the official reference map design.
- **Flood & Landslide Toggle** — Switch between flood and landslide hazards; hover any municipality
  for a live probability tooltip and click for a full risk report (advisory, exposed areas,
  trigger, and what-to-do).
- **Evacuation & River Basin Layers** — Overlay evacuation-center and river-basin markers on demand.
- **AI Forecast Messaging** — Hero dashboard communicates predicted conditions (e.g., *"Heavy rain
  in 2 hrs"*) for high-risk areas like Bangued.
- **Download Section** — QR code linking to the app download, plus an email notify-me form.
- **FAQ & Community** — Expandable FAQ and audience sections for citizens, LGUs/MDRRMOs, and
  communities.
- **Contact Form** — Front-end form wired to [Web3Forms](https://web3forms.com) so submissions are
  delivered straight to `uateentech@gmail.com`.
- **Legal Dialogs** — About, Privacy Policy, and Terms of Service dialogs accessible from the
  footer.

## 🧰 Tech Stack

| Layer       | Technology                                      |
| ----------- | ----------------------------------------------- |
| Framework   | [React](https://react.dev) 19                    |
| Build Tool  | [Vite](https://vitejs.dev) 6                     |
| Language    | [TypeScript](https://www.typescriptlang.org) 5.7 |
| Styling     | [Tailwind CSS](https://tailwindcss.com) 4        |
| UI          | [Radix UI](https://www.radix-ui.com) Dialog, [lucide-react](https://lucide.dev) icons |
| Misc        | [qrcode.react](https://www.npmjs.com/package/qrcode.react) |

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) 18+ (npm 9+)

### Installation

```bash
# 1. Clone the repository
git clone <your-repo-url>
cd reactnetib

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Open the printed local URL (default `http://localhost:5173`).

### Build for production

```bash
npm run build   # type-checks, then bundles to dist/
npm run preview # serve the production build locally
```

## 🔑 Environment Variables

Copy the example and fill in your values:

```bash
# .env
VITE_WEB3FORMS_ACCESS_KEY=your_access_key_here
```

| Variable                   | Required | Description                                                                 |
| -------------------------- | -------- | --------------------------------------------------------------------------- |
| `VITE_WEB3FORMS_ACCESS_KEY`| Yes*     | Access key from [Web3Forms](https://web3forms.com) used by the contact form. |

> `*` The contact form needs a real key to deliver messages. Without it, the app runs fine but
> submissions will fail. Register with `uateentech@gmail.com`, create a form, and paste its key.

`.env` is git-ignored — never commit real secrets.

## 📁 Project Structure

```
src/
├── components/          # UI sections & dialogs (Hero, MapSection, Footer, …)
│   └── ui/              # Reusable primitives (Radix dialog)
├── data/                # Municipality shapes, flood & landslide risk datasets
├── lib/                 # Site content, legal text, and shared utilities
├── App.tsx              # Page composition & global dialog state
├── main.tsx             # Entry point
└── index.css            # Tailwind + theme tokens
```

## 📜 Scripts

| Command              | Description                            |
| -------------------- | -------------------------------------- |
| `npm run dev`        | Start the Vite dev server              |
| `npm run build`      | Type-check with `tsc`, then build      |
| `npm run lint`       | Type-check only (`tsc --noEmit`)       |
| `npm run preview`    | Preview the production build           |

## 🤝 Contact

BantAI is built with care for the people of Abra. For questions, feedback, or partnership
opportunities, reach us at **uateentech@gmail.com**.
