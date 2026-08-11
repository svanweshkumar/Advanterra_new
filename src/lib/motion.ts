import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

let registered = false;
export function ensureGsap() {
  if (typeof window === "undefined") return;
  if (!registered) {
    gsap.registerPlugin(ScrollTrigger);
    registered = true;
  }
}

export const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export function useSmoothScroll() {
  useEffect(() => {
    if (prefersReducedMotion()) return;
    ensureGsap();
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    lenis.on("scroll", ScrollTrigger.update);
    const raf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);
    ScrollTrigger.refresh();
    return () => {
      gsap.ticker.remove(raf);
      lenis.destroy();
    };
  }, []);
}

/** Fade + rise for any [data-reveal] descendant of the scope element. */
export function useReveal(scope: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    const el = scope.current;
    if (!el) return;
    if (prefersReducedMotion()) return;
    ensureGsap();
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>("[data-reveal]");
      items.forEach((item) => {
        gsap.fromTo(
          item,
          { y: 34, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.1,
            ease: "power3.out",
            delay: Number(item.dataset['revealDelay'] ?? 0),
            scrollTrigger: { trigger: item, start: "top 88%" },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-mask]").forEach((item) => {
        gsap.fromTo(
          item,
          { yPercent: 110 },
          {
            yPercent: 0,
            duration: 1.2,
            ease: "power4.out",
            delay: Number(item.dataset['maskDelay'] ?? 0),
            scrollTrigger: { trigger: item, start: "top 92%" },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((item) => {
        gsap.fromTo(
          item,
          { yPercent: -6 },
          {
            yPercent: 6,
            ease: "none",
            scrollTrigger: {
              trigger: item.parentElement ?? item,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-rule]").forEach((item) => {
        gsap.fromTo(
          item,
          { scaleX: 0 },
          {
            scaleX: 1,
            transformOrigin: "left center",
            duration: 1.4,
            ease: "power3.out",
            scrollTrigger: { trigger: item, start: "top 92%" },
          },
        );
      });
    }, el);
    return () => ctx.revert();
  }, [scope]);
}