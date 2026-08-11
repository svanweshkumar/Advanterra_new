import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIALS } from "@/data/site";

const TRACK_TRANSLATES = [
  "translate-x-0",
  "-translate-x-full",
  "-translate-x-[200%]",
  "-translate-x-[300%]",
] as const;

export function Testimonials() {
  const [active, setActive] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleChange = (index: number) => {
    if (index === active || isTransitioning) return;
    setActive(index);
    setIsTransitioning(true);
    window.setTimeout(() => setIsTransitioning(false), 700);
  };

  const handlePrev = () => {
    const nextIndex = active === 0 ? TESTIMONIALS.length - 1 : active - 1;
    handleChange(nextIndex);
  };

  const handleNext = () => {
    const nextIndex = active === TESTIMONIALS.length - 1 ? 0 : active + 1;
    handleChange(nextIndex);
  };

  return (
    <section className="bg-bone py-28 text-ink md:py-40">
      <div className="shell">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <p data-reveal className="eyebrow flex items-center gap-4 text-muted-gray">
            <span className="inline-block h-px w-10 bg-bronze" />
            Client voices
          </p>
          <h2 data-reveal className="max-w-[14ch] text-[clamp(2rem,3.6vw,3.5rem)] font-light leading-[1.03] tracking-[-0.035em]">
            Trusted by those who live in our work.
          </h2>
        </div>

        <div className="editorial-testimonial mt-16 lg:mt-24">
          <div className="overflow-hidden">
            <div className={`flex touch-pan-y transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${TRACK_TRANSLATES[active]}`}>
              {TESTIMONIALS.map((testimonial, index) => {
                const initials = testimonial.name
                  .split(" ")
                  .map((name) => name[0])
                  .join("")
                  .slice(0, 2);

                return (
                  <article key={testimonial.name} aria-hidden={index !== active} className="flex w-full shrink-0 items-start gap-5 md:gap-10 lg:gap-16">
                    <span aria-hidden className="editorial-testimonial-index select-none text-[clamp(5rem,14vw,8rem)] font-light leading-none tracking-[-0.08em] text-ink/10">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="min-w-0 flex-1 pt-2 md:pt-5">
                      <blockquote className="max-w-3xl text-[clamp(1.4rem,3vw,2.65rem)] font-light leading-[1.3] tracking-[-0.035em]">
                        “{testimonial.quote}”
                      </blockquote>
                      <div className="mt-10 flex items-center gap-4">
                        <div className="editorial-testimonial-avatar flex size-12 shrink-0 items-center justify-center rounded-full bg-ink text-[12px] tracking-[0.12em] text-bone">
                          {initials}
                        </div>
                        <div>
                          <p className="font-medium">{testimonial.name}</p>
                          <p className="mt-1 text-sm text-muted-gray">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          <div className="mt-14 flex flex-wrap items-center justify-between gap-6 border-t border-ink/15 pt-5 md:mt-20">
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-3" aria-label="Choose testimonial">
                {TESTIMONIALS.map((testimonial, index) => (
                  <button
                    key={testimonial.name}
                    type="button"
                    aria-label={`Show testimonial ${index + 1}`}
                    aria-pressed={index === active}
                    onClick={() => handleChange(index)}
                    className="group flex min-h-8 items-center py-2"
                  >
                    <span className={`block h-px transition-all duration-500 ${index === active ? "w-12 bg-ink" : "w-6 bg-ink/20 group-hover:w-8 group-hover:bg-ink/50"}`} />
                  </button>
                ))}
              </div>
              <span className="eyebrow text-muted-gray">
                {String(active + 1).padStart(2, "0")} / {String(TESTIMONIALS.length).padStart(2, "0")}
              </span>
            </div>

            <div className="flex items-center gap-1">
              <button
                type="button"
                aria-label="Previous testimonial"
                onClick={handlePrev}
                className="rounded-full p-2 text-ink/40 transition-colors duration-300 hover:bg-ink/5 hover:text-ink"
              >
                <ChevronLeft className="size-5" strokeWidth={1.25} />
              </button>
              <button
                type="button"
                aria-label="Next testimonial"
                onClick={handleNext}
                className="rounded-full p-2 text-ink/40 transition-colors duration-300 hover:bg-ink/5 hover:text-ink"
              >
                <ChevronRight className="size-5" strokeWidth={1.25} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
