import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/data/site";
import { ensureGsap, prefersReducedMotion } from "@/lib/motion";

function Card({ p }: { p: (typeof PROJECTS)[number] }) {
  return (
    <article className="group relative w-[80vw] shrink-0 snap-start md:w-[44vw] xl:w-[32vw]">
      <div className="project-image-depth relative w-full overflow-hidden bg-charcoal">
        <img
          src={p.image}
          alt={`${p.title} — ${p.type} project in ${p.location}`}
          loading="lazy"
          className="project-image block h-auto w-full object-contain transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-ink/0 transition-colors duration-700 group-hover:bg-ink/25" />
        <span className="eyebrow absolute left-6 top-6 text-bronze">{p.index}</span>
      </div>
      <div className="mt-6 flex items-start justify-between gap-4">
        <div className="min-w-0 flex-1 transition-transform duration-700 ease-out group-hover:translate-x-2">
          <p className="eyebrow mt-3 flex max-w-[20rem] flex-wrap gap-x-2 gap-y-1 text-concrete">
            <span>{p.type}</span>
            <span aria-hidden>—</span>
            <span>{p.location}</span>
            <span aria-hidden>—</span>
            <span>{p.year}</span>
          </p>
        </div>
        <ArrowUpRight
          className="mt-2 size-5 text-concrete transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-bronze"
          strokeWidth={1}
        />
      </div>
    </article>
  );
}

export function Projects() {
  const section = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    ensureGsap();
    const mm = gsap.matchMedia();
    mm.add("(min-width: 768px)", () => {
      const el = track.current;
      const wrap = section.current;
      if (!el || !wrap) return;
      const distance = () => el.scrollWidth - window.innerWidth + 96;
      const tween = gsap.to(el, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          trigger: wrap,
          start: "top top",
          end: () => `+=${distance()}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });
      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    });
    ScrollTrigger.refresh();
    return () => mm.revert();
  }, []);


  return (
    <section id="projects" ref={section} className="relative overflow-hidden bg-ink py-24 text-bone md:h-[100svh] md:py-0">
      <div className="flex h-full flex-col justify-center gap-10 md:gap-0">
        <div className="shell flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow flex items-center gap-4 text-concrete">
              <span className="inline-block h-px w-10 bg-bronze" />
              Selected work
            </p>
            <h2 className="mt-6 text-[clamp(2rem,3.6vw,3.5rem)] font-light leading-[1.1] tracking-[-0.04em]">
              Featured projects
            </h2>
          </div>
          <p className="eyebrow hidden text-concrete md:block">Scroll horizontally →</p>
          <p className="eyebrow carousel-hint flex items-center gap-3 text-bronze md:hidden">
            Swipe to explore <ArrowRight className="carousel-hint-arrow size-3.5" strokeWidth={1.25} />
          </p>
        </div>

        <div className="relative mt-10 md:mt-10">
          <div className="touch-carousel snap-x snap-mandatory overflow-x-auto no-scrollbar md:overflow-visible">
            <div
              ref={track}
              className="flex w-max gap-6 px-6 pr-16 md:gap-10 md:px-12 md:pr-24 xl:px-16"
            >
              {PROJECTS.map((p) => (
                <Card key={p.index} p={p} />
              ))}
            </div>
          </div>
          <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-ink via-ink/80 to-transparent lg:hidden" />
        </div>
      </div>
    </section>
  );
}
