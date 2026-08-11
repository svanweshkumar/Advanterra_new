import { ArrowRight } from "lucide-react";
import about from "@/assets/image.png";

export function About() {
  return (
    <section id="about" className="bg-bone py-28 text-ink md:py-40">
      <div className="shell grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-7">
          <p data-reveal className="origin-left eyebrow flex items-center gap-4 text-[13px] text-muted-gray transition-transform duration-300 hover:scale-[1.08]">
            <span className="inline-block h-px w-10 bg-bronze" />
            Our story
          </p>
          <h2 className="mt-10 max-w-[16ch] text-[clamp(2rem,4.2vw,4.25rem)] font-light leading-[1.08] tracking-[-0.035em]">
            {["We believe architecture", "has the power to improve", "lives and create a", "lasting impact."].map(
              (l, i) => (
                <span key={l} className="reveal-line">
                  <span data-mask data-mask-delay={i * 0.06} className="block">
                    {l}
                  </span>
                </span>
              ),
            )}
          </h2>

          <div className="mt-14 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2">
            <p data-reveal className="origin-left text-[17px] leading-[1.7] text-muted-gray transition-transform duration-300 hover:scale-[1.03]">
              Founded in Bengaluru, Advanterra Construction is a multidisciplinary design and build
              studio working across residential, hospitality and interior architecture.
            </p>
            <p data-reveal data-reveal-delay="0.1" className="origin-left text-[17px] leading-[1.7] text-muted-gray transition-transform duration-300 hover:scale-[1.03]">
              Our work is guided by a simple belief: great design has the power to improve lives —
              through material honesty, proportion and light.
            </p>
          </div>


          <a
            data-reveal
            href="#projects"
            className="navlink group mt-14 inline-flex items-center gap-3 border-b border-ink/20 pb-3 transition-colors duration-500 hover:border-bronze hover:text-bronze"
          >
            Discover our work
            <ArrowRight className="size-4 transition-transform duration-500 group-hover:translate-x-1.5" strokeWidth={1.25} />
          </a>
        </div>

        <div className="lg:col-span-5 lg:pt-24">
          <div className="story-image-frame relative aspect-[4/5] w-full overflow-hidden bg-charcoal">
            <img
              data-parallax
              src={about}
              alt="Curved raw concrete interior lit by a single shaft of daylight"
              width={1200}
              height={1504}
              loading="lazy"
              className="story-image absolute inset-0 size-full scale-[1.12] object-cover"
            />
            <div className="absolute inset-x-4 bottom-4 z-20 flex items-end justify-between border-t border-bone/30 pt-3 text-bone/75">
              <span className="eyebrow">Material / Light</span>
              <span className="eyebrow text-bone/50">01</span>
            </div>
          </div>
          <p data-reveal className="eyebrow mt-6 text-muted-gray">
            Material study — cast concrete, daylight
          </p>
        </div>
      </div>
    </section>
  );
}
