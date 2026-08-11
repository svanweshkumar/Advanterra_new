import { Compass, PenLine, Layers, KeyRound } from "lucide-react";
import { APPROACH } from "@/data/site";

const ICONS = [Compass, PenLine, Layers, KeyRound];

export function Approach() {
  return (
    <section className="bg-paper py-24 text-ink md:py-32">
      <div className="shell">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
          <div className="min-w-0 lg:col-span-7">
            <p data-reveal className="origin-left eyebrow flex items-center gap-4 text-[13px] text-bronze transition-transform duration-300 hover:scale-[1.08]">
              <span className="inline-block h-px w-10 bg-bronze" />
              Our approach
            </p>
            <h2
              data-reveal
              className="mt-8 max-w-[18ch] text-[clamp(2rem,3.6vw,3.5rem)] font-light leading-[1.08] tracking-[-0.035em]"
            >
              Four stages, one continuous conversation.
            </h2>
          </div>
          <p data-reveal className="origin-left text-[17px] leading-[1.7] text-muted-gray transition-transform duration-300 hover:scale-[1.03] lg:col-span-4 lg:col-start-9">
            Every project moves through the same disciplined process — from listening, to drawing,
            to detailing, to handover.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          {APPROACH.map((step, i) => {
            const Icon = ICONS[i]!;
            return (
              <div
                key={step.index}
                data-reveal
                data-reveal-delay={i * 0.08}
                className="group relative border-t-2 border-ink/20 py-10 pr-8 transition-colors duration-500 hover:border-bronze xl:border-t-2"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="text-[clamp(2.5rem,4vw,4rem)] font-light leading-none tracking-[-0.04em] text-ink/15 transition-colors duration-500 group-hover:text-bronze">
                    {step.index}
                  </span>
                  <Icon
                    className="size-6 shrink-0 text-ink/60 transition-colors duration-500 group-hover:text-bronze"
                    strokeWidth={0.9}
                  />
                </div>
                <h3 className="mt-8 break-words text-[clamp(1.25rem,2vw,1.5rem)] font-normal uppercase tracking-[0.02em] transition-transform duration-500 group-hover:translate-x-1">
                  {step.title}
                </h3>
                <p className="origin-left mt-4 max-w-xs text-[17px] leading-[1.7] text-muted-gray transition-transform duration-300 group-hover:scale-[1.03]">{step.body}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
