import { AppIcon } from "@/components/icons";
import { HOW_STEPS } from "@/lib/content";

export function HowItWorks() {
  return (
    <section id="how" className="py-24">
      <div className="container-wide">
        <div className="reveal max-w-2xl">
          <span className="chip">
            <AppIcon name="compass" className="h-3.5 w-3.5" />
            How it works
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Four steps from storm to safety
          </h2>
        </div>
        <div className="relative mt-14">
          <div
            className="absolute left-0 right-0 top-7 hidden h-px lg:block"
            style={{
              background:
                "linear-gradient(to right, transparent, color-mix(in oklab, var(--leaf) 50%, transparent), transparent)",
            }}
            aria-hidden
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {HOW_STEPS.map((step) => (
              <div key={step.n} className="reveal relative">
                <span
                  className="relative z-10 grid h-14 w-14 place-items-center rounded-full text-lg font-extrabold text-primary-foreground shadow-glow"
                  style={{ background: "var(--gradient-primary)" }}
                >
                  {step.n}
                </span>
                <h3 className="mt-5 text-lg font-bold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}