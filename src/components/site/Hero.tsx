import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowUpRight } from "lucide-react";
import { FacebookIcon, InstagramIcon } from "@/components/site/SocialIcons";
import hero from "@/assets/Home.png";
import { ensureGsap, prefersReducedMotion } from "@/lib/motion";

export function Hero() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    ensureGsap();
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      tl.fromTo(
        ".hero-img",
        { scale: 1.16, opacity: 0 },
        { scale: 1, opacity: 1, duration: 2.4, ease: "power2.out" },
      )
        .fromTo(".hero-eyebrow", { yPercent: 120 }, { yPercent: 0, duration: 1 }, 0.5)
        .fromTo(
          ".hero-line",
          { yPercent: 115 },
          { yPercent: 0, duration: 1.25, stagger: 0.09 },
          0.65,
        )
        .fromTo(
          ".hero-fade",
          { y: 22, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, stagger: 0.12 },
          1.25,
        );

      gsap.to(".hero-img", {
        scale: 1.08,
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="home" ref={root} className="relative h-[100svh] w-full overflow-hidden bg-ink grain">
      <img
        src={hero}
        alt="Contemporary hillside residence in concrete, timber and glass under an overcast sky"
        width={1568}
        height={987}
        fetchPriority="high"
        decoding="async"
        className="hero-img absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-ink/45" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/60 to-transparent md:to-ink/0 md:via-ink/35" />
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink to-transparent" />

      <div className="shell relative flex h-full flex-col justify-end pb-24 pt-32 md:justify-center md:pb-0">
        <div className="max-w-[38rem]">
          <h1 className="display mt-8 leading-[1.05] text-[clamp(2.35rem,6vw,5.75rem)] text-bone">
            {["Spaces that", "inspire.", "Design that", "lasts."].map((line) => (
              <span key={line} className="reveal-line">
                <span className="hero-line block">{line}</span>
              </span>
            ))}
          </h1>


          <div className="hero-fade mt-10 flex max-w-[34rem] flex-col items-start gap-6 md:flex-row md:items-end md:gap-8">
            <p className="max-w-[19rem] border-l border-bronze/70 pl-4 text-[13px] uppercase tracking-[0.12em] leading-[1.7] text-bone/70">
              Architecture, construction and interiors — Bengaluru
            </p>
            <a
              href="#projects"
              className="group inline-flex shrink-0 items-center gap-3 border-b border-bone/30 pb-3 navlink text-bone transition-colors duration-500 hover:border-bronze hover:text-bronze"
            >
              View projects
              <ArrowUpRight
                className="size-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                strokeWidth={1.25}
              />
            </a>
          </div>
        </div>
      </div>

      <div className="hero-fade pointer-events-auto absolute right-8 top-1/2 hidden -translate-y-1/2 flex-col items-end gap-5 xl:flex">
        <p className="eyebrow text-bone/50">Follow our work</p>
        <div className="flex flex-col items-end gap-3">
          <a href="https://instagram.com/advanterra" aria-label="Instagram" className="group inline-flex items-center gap-3 text-bone/70 transition-colors duration-500 hover:text-bronze">
            <span className="navlink">Instagram</span>
            <InstagramIcon className="size-4 transition-transform duration-500 group-hover:scale-110" strokeWidth={1.25} />
          </a>
          <a href="https://www.facebook.com/people/Advanterra-Construction/100070238443495/?rdid=i4Y1aw74AwvpWklj&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F188zUPvJ2d%2F" aria-label="Facebook" className="group inline-flex items-center gap-3 text-bone/70 transition-colors duration-500 hover:text-bronze">
            <span className="navlink">Facebook</span>
            <FacebookIcon className="size-4 transition-transform duration-500 group-hover:scale-110" strokeWidth={1.25} />
          </a>
        </div>
        <span className="mt-1 h-12 w-px bg-bone/25" />
      </div>

    </section>
  );
}
