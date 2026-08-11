import { FEATURES } from "@/lib/content";
import { AppIcon, AiIcon } from "@/components/icons";

export function Features() {
  return (
    <section id="features" className="py-24">
      <div className="container-wide">
        <div className="reveal max-w-2xl">
          <span className="chip">
            <AiIcon className="h-3.5 w-3.5" />
            Features
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Everything you need to <span className="italic text-forest">stay safe</span>
          </h2>
          <p className="mt-3 text-muted-foreground">
            From live flood probabilities to real-time alerts and community reports, BantAI keeps
            you one step ahead of the storm.
          </p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => (
            <div key={feature.title} className="feature-card reveal">
              <span
                className="grid h-12 w-12 place-items-center rounded-2xl text-primary-foreground"
                style={{ background: "var(--gradient-primary)" }}
              >
                <AppIcon name={feature.icon} className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-lg font-bold">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}