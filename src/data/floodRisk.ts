/**
 * Flood-risk dataset for the 27 municipalities of Abra.
 * `chance` is the current flood probability (0-100); the risk level is
 * derived from it. Seed data — extend with a real API/DB feed in production.
 */
export type RiskLevel = "Low" | "Moderate" | "High" | "Critical";

export type FloodRisk = {
  chance: number;
  riverBasin: string;
  evacuationCenters: number;
  advisory?: string;
};

export function riskLevelOf(chance: number): RiskLevel {
  if (chance >= 80) return "Critical";
  if (chance >= 60) return "High";
  if (chance >= 35) return "Moderate";
  return "Low";
}

export const FLOOD_RISK: Record<string, FloodRisk> = {
  Bangued: {
    chance: 88,
    riverBasin: "Abra River",
    evacuationCenters: 6,
    advisory: "Abra River at alert level. Begin pre-emptive evacuation in low-lying barangays.",
  },
  "Peñarrubia": {
    chance: 85,
    riverBasin: "Abra River",
    evacuationCenters: 5,
    advisory: "River bend flooding is imminent. Move to higher ground now.",
  },
  Tayum: { chance: 78, riverBasin: "Abra River", evacuationCenters: 4 },
  Pidigan: { chance: 74, riverBasin: "Abra River", evacuationCenters: 4 },
  Langiden: { chance: 70, riverBasin: "Abra River", evacuationCenters: 2 },
  Danglas: { chance: 66, riverBasin: "Abra River", evacuationCenters: 3 },
  "La Paz": { chance: 62, riverBasin: "Abra River", evacuationCenters: 5 },
  Bucay: { chance: 60, riverBasin: "Banao River", evacuationCenters: 4 },
  Lagayan: { chance: 58, riverBasin: "Abra River", evacuationCenters: 2 },
  Lagangilang: { chance: 55, riverBasin: "Abra River", evacuationCenters: 3 },
  Dolores: { chance: 52, riverBasin: "Abra River", evacuationCenters: 4 },
  Villaviciosa: { chance: 50, riverBasin: "Abra River", evacuationCenters: 2 },
  "San Isidro": { chance: 48, riverBasin: "Abra River", evacuationCenters: 3 },
  "San Quintin": { chance: 45, riverBasin: "Abra River", evacuationCenters: 2 },
  Pilar: { chance: 44, riverBasin: "Abra River", evacuationCenters: 2 },
  Boliney: { chance: 44, riverBasin: "Sinalang River", evacuationCenters: 1 },
  Manabo: { chance: 42, riverBasin: "Abra River", evacuationCenters: 3 },
  Daguioman: { chance: 40, riverBasin: "Malibleng River", evacuationCenters: 1 },
  Luba: { chance: 38, riverBasin: "Abra River", evacuationCenters: 3 },
  Bucloc: { chance: 36, riverBasin: "Tinej River", evacuationCenters: 1 },
  Sallapadan: { chance: 35, riverBasin: "Sallapadan River", evacuationCenters: 2 },
  "Licuan-Baay": { chance: 33, riverBasin: "Baay River", evacuationCenters: 1 },
  "San Juan": { chance: 30, riverBasin: "Oaig-Daya River", evacuationCenters: 2 },
  Malibcong: { chance: 30, riverBasin: "Malibcong River", evacuationCenters: 1 },
  Tubo: { chance: 28, riverBasin: "Tubo River", evacuationCenters: 1 },
  Tineg: { chance: 25, riverBasin: "Tineg River", evacuationCenters: 1 },
  Lacub: { chance: 22, riverBasin: "Tineg River", evacuationCenters: 1 },
};

export const RISK_LEVELS: readonly { level: RiskLevel; color: string }[] = [
  { level: "Low", color: "#28A858" },
  { level: "Moderate", color: "#BE9C14" },
  { level: "High", color: "#CA6A20" },
  { level: "Critical", color: "#B32F2B" },
];

export function riskColor(level: RiskLevel): string {
  return RISK_LEVELS.find((r) => r.level === level)?.color ?? "#22c55e";
}

/** Default advisory shown when a municipality has no custom advisory. */
export const RISK_ADVISORY: Record<RiskLevel, string> = {
  Low: "Conditions are stable. Continue to monitor weather bulletins from PAGASA.",
  Moderate: "Monitoring closely. River levels are elevated — stay alert for updates.",
  High: "High flood potential. Prepare to evacuate and follow LGU announcements.",
  Critical: "Critical flood potential. Pre-emptive evacuation is underway.",
};

/** Recommended action shown in the municipality flood report. */
export const RISK_ADVICE: Record<RiskLevel, string> = {
  Low: "Stay informed. You may safely continue daily activities near the river.",
  Moderate: "Keep a go-bag ready, move valuables to higher ground, and monitor alerts.",
  High: "Prepare to evacuate. Charge devices and follow your Barangay or MDRRMO guidance.",
  Critical: "EVACUATE NOW. Proceed to your designated evacuation center immediately.",
};

/**
 * Landslide-risk dataset for the 27 municipalities of Abra.
 * `chance` is the current landslide probability (0-100); the risk level is
 * derived from it. Seed data — extend with a real API/DB feed in production.
 */
export type LandslideRisk = {
  chance: number;
  trigger: string;
  exposedAreas: number;
  advisory?: string;
};

export const LANDSLIDE_RISK: Record<string, LandslideRisk> = {
  Tineg: { chance: 82, trigger: "Prolonged rainfall", exposedAreas: 14 },
  Lacub: { chance: 78, trigger: "Prolonged rainfall", exposedAreas: 9 },
  Malibcong: { chance: 74, trigger: "Prolonged rainfall", exposedAreas: 8 },
  "Licuan-Baay": { chance: 72, trigger: "Prolonged rainfall", exposedAreas: 10 },
  Daguioman: { chance: 70, trigger: "Prolonged rainfall", exposedAreas: 6 },
  Boliney: { chance: 68, trigger: "Prolonged rainfall", exposedAreas: 7 },
  Bucloc: { chance: 66, trigger: "Prolonged rainfall", exposedAreas: 4 },
  Tubo: { chance: 64, trigger: "Heavy downpour", exposedAreas: 8 },
  "San Juan": { chance: 62, trigger: "Prolonged rainfall", exposedAreas: 5 },
  Danglas: { chance: 60, trigger: "Prolonged rainfall", exposedAreas: 6 },
  Lagayan: { chance: 58, trigger: "Prolonged rainfall", exposedAreas: 5 },
  Lagangilang: { chance: 55, trigger: "Prolonged rainfall", exposedAreas: 6 },
  Villaviciosa: { chance: 52, trigger: "Prolonged rainfall", exposedAreas: 5 },
  Luba: { chance: 50, trigger: "Heavy downpour", exposedAreas: 4 },
  Manabo: { chance: 48, trigger: "Heavy downpour", exposedAreas: 5 },
  Sallapadan: { chance: 46, trigger: "Heavy downpour", exposedAreas: 4 },
  Bucay: { chance: 44, trigger: "Heavy downpour", exposedAreas: 5 },
  Dolores: { chance: 42, trigger: "Heavy downpour", exposedAreas: 4 },
  "La Paz": { chance: 40, trigger: "Heavy downpour", exposedAreas: 4 },
  Pidigan: { chance: 38, trigger: "Heavy downpour", exposedAreas: 3 },
  Tayum: { chance: 36, trigger: "Heavy downpour", exposedAreas: 3 },
  Peñarrubia: { chance: 30, trigger: "Heavy downpour", exposedAreas: 2 },
  Bangued: { chance: 28, trigger: "Heavy downpour", exposedAreas: 3 },
  Langiden: { chance: 26, trigger: "Heavy downpour", exposedAreas: 1 },
  "San Quintin": { chance: 24, trigger: "Heavy downpour", exposedAreas: 2 },
  Pilar: { chance: 22, trigger: "Heavy downpour", exposedAreas: 2 },
  "San Isidro": { chance: 20, trigger: "Heavy downpour", exposedAreas: 2 },
};

/** Default advisory shown when a municipality has no custom landslide advisory. */
export const LANDSLIDE_ADVISORY: Record<RiskLevel, string> = {
  Low: "Slopes are stable. Continue monitoring PAGASA rainfall advisories.",
  Moderate: "Heavy rain may loosen soil on steep slopes. Stay alert for small slides.",
  High: "High landslide potential on rain-saturated slopes. Avoid hillsides and prepare to evacuate.",
  Critical: "Critical landslide potential. Active movement reported — move to stable ground now.",
};

/** Recommended action shown in the municipality landslide report. */
export const LANDSLIDE_ADVICE: Record<RiskLevel, string> = {
  Low: "Stay informed and keep an eye on nearby slopes after heavy rain.",
  Moderate: "Watch for cracks or new water seepage on slopes and keep drainage clear.",
  High: "Prepare to evacuate. Avoid ravines, cuts, and steep hillsides; follow MDRRMO guidance.",
  Critical: "EVACUATE NOW. Move to high, stable ground away from slopes and waterways.",
};