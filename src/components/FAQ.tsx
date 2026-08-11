import * as React from "react";
import { ChevronDown } from "lucide-react";

import { FAQS } from "@/lib/content";
import { cn } from "@/lib/utils";

export function FAQ() {
  const [open, setOpen] = React.useState<number | null>(0);

  return (
    <section id="faq" className="py-24">
      <div className="container-wide max-w-3xl">
        <div className="reveal text-center">
          <span className="chip">FAQ</span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Frequently asked questions
          </h2>
        </div>
        <div className="mt-10 space-y-3">
          {FAQS.map((item, index) => {
            const isOpen = open === index;
            return (
              <div key={item.q} className="reveal overflow-hidden rounded-2xl border border-border bg-card">
                <button
                  onClick={() => setOpen(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left cursor-pointer"
                >
                  <span className="font-semibold">{item.q}</span>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 shrink-0 text-muted-foreground transition-transform",
                      isOpen && "rotate-180"
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "grid transition-all duration-300 ease-out",
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}