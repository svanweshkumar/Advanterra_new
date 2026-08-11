import { STATS } from "@/data/site";

export function Stats() {
  return (
    <section className="bg-ink py-24 text-bone md:py-32 grain">
      <div className="shell grid grid-cols-3 gap-x-4 gap-y-14 text-center lg:text-left">
        {STATS.map((s, i) => (
          <div
            key={s.label}
            data-reveal
            data-reveal-delay={i * 0.08}
            className="border-t border-line pt-8 pr-0 sm:pr-6"
          >
            <p className="text-[clamp(2.75rem,6vw,5.5rem)] font-extralight leading-none tracking-[-0.05em]">
              {s.value}
            </p>
            <p className="eyebrow mt-6 text-concrete">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
