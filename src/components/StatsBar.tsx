import { STATS } from "@/lib/content";
import { AppIcon } from "@/components/icons";

export function StatsBar() {
  return (
    <section className="border-y border-border bg-card/60">
      <div className="container-wide grid grid-cols-2 gap-6 py-10 md:grid-cols-4">
        {STATS.map((stat) => (
          <div key={stat.label} className="reveal flex items-center gap-3">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-accent/12 text-accent">
              <AppIcon name={stat.icon} className="h-5 w-5" />
            </span>
            <div className="min-w-0">
              <div className="text-xl font-extrabold tracking-tight text-foreground">
                {stat.value}
              </div>
              <div className="truncate text-xs text-muted-foreground">{stat.label}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}