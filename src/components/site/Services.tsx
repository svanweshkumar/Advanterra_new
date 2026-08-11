import { SERVICES } from "@/data/site";
import { ArrowUpRight } from "lucide-react";

export function Services() {
  return (
    <section id="services" className="bg-ink py-28 text-bone md:py-40">
      <div className="shell grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p data-reveal className="eyebrow flex items-center gap-4 text-bronze">
            <span className="inline-block h-px w-10 bg-bronze" />
            What we do
          </p>
          <h2 data-reveal className="mt-8 text-[clamp(2rem,3.6vw,3.5rem)] font-light leading-[1.1] tracking-[-0.035em]">
            Design and build,
            <br />
            under one roof.
          </h2>
          <p data-reveal className="mt-8 max-w-sm text-[15px] leading-[1.7] text-concrete">
            Four services, delivered by one team — so intent survives from the first sketch to the
            last fitting.
          </p>
        </div>

        <div className="lg:col-span-8 lg:pt-4">
          {SERVICES.map((s, i) => (
            <a
              key={s.index}
              href="#contact"
              data-reveal
              data-reveal-delay={i * 0.06}
              className="group grid grid-cols-[auto_1fr_auto] items-baseline gap-6 border-t border-line py-8 transition-colors duration-500 last:border-b hover:border-bronze md:gap-10 md:py-10"
            >
              <span className="text-[15px] font-light tracking-[0.08em] text-bronze">{s.index}</span>
              <div>
                <h3 className="text-[clamp(1.4rem,2.6vw,2.25rem)] font-light tracking-[-0.03em] transition-transform duration-700 ease-out group-hover:translate-x-2">
                  {s.title}
                </h3>
                <p className="mt-3 max-w-lg text-[15px] leading-[1.7] text-concrete">{s.body}</p>
              </div>
              <ArrowUpRight
                className="size-5 self-center text-concrete transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-bronze"
                strokeWidth={1}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}