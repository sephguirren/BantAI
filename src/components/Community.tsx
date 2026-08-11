import { ArrowRight } from "lucide-react";

import { COMMUNITY } from "@/lib/content";
import { AppIcon, AiIcon } from "@/components/icons";

export function Community() {
  return (
    <section id="community" className="py-24 bg-secondary/40">
      <div className="container-wide">
        <div className="reveal max-w-2xl">
          <span className="chip">
            <AiIcon className="h-3.5 w-3.5" />
            For everyone in Abra
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
            One platform, a safer Abra
          </h2>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {COMMUNITY.map((card) => (
            <div key={card.title} className="feature-card reveal">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-accent/12 text-accent">
                <AppIcon name={card.icon} className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-lg font-bold">{card.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.desc}</p>
              {"link" in card && card.link && (
                <a
                  href="#download"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-forest hover:underline"
                >
                  {card.link} <ArrowRight className="h-3.5 w-3.5" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}