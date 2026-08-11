import { FacebookIcon, InstagramIcon } from "@/components/site/SocialIcons";
import ashwin from "@/assets/Ashwin.png";
import himanth from "@/assets/Himanth.png";

const FOUNDERS = [
  {
    name: "Ashwin Kumar S V",
    role: "Co-Founder",
    tagline: "Thoughtful spaces, shaped by light and proportion.",
    qualification: "B.E. · M.Tech. — Civil & Structural Engineering",
    image: ashwin,
    instagramUrl: "https://www.instagram.com/ashwin_sv",
    facebookUrl: "https://www.facebook.com/ashwin.sv.1",
  },
  {
    name: "Himanth H S",
    role: "Co-Founder",
    tagline: "Strong foundations, finished with care and precision.",
    qualification: "B.E. · M.Tech. — Civil & Structural Engineering",
    image: himanth,
    instagramUrl: "https://www.instagram.com/hshimanth",
    facebookUrl: "https://www.facebook.com/himanth.hs",
  },
];

export function Founders() {
  return (
    <section className="bg-paper py-28 text-ink md:py-40">
      <div className="shell">
        <p data-reveal className="eyebrow flex items-center gap-4 text-muted-gray">
          <span className="inline-block h-px w-10 bg-bronze" />
          The founders
        </p>

        <div className="mt-16 grid grid-cols-1 items-start gap-16 md:grid-cols-2 md:gap-10">
          {FOUNDERS.map((f, i) => (
            <div key={f.name} data-reveal data-reveal-delay={i * 0.1} className="flex h-full flex-col">
              <div className="founder-image-depth relative aspect-[4/5] w-full overflow-hidden bg-charcoal">
                <img
                  src={f.image}
                  alt={`Portrait of ${f.name}`}
                  width={1000}
                  height={1250}
                  loading="lazy"
                  className="founder-image object-cover object-top grayscale transition-all duration-[1200ms] ease-out hover:scale-[1.03] hover:grayscale-0"
                />
              </div>
              <div className="mt-8 flex flex-1 flex-col border-t border-ink/15 pt-6">
                <h3 className="text-[clamp(1.4rem,2vw,1.9rem)] font-light tracking-[-0.03em]">{f.name}</h3>
                <p className="eyebrow mt-3 text-bronze">{f.role}</p>
                <p className="eyebrow mt-5 text-muted-gray">{f.qualification}</p>
                <p className="mt-4 flex-1 max-w-md text-[15px] leading-[1.7] text-muted-gray">{f.tagline}</p>
                <div className="mt-8 flex items-center gap-8">
                  <a
                    href={f.instagramUrl}
                    aria-label={`${f.name} on Instagram`}
                    className="text-muted-gray transition-colors duration-500 hover:text-bronze"
                  >
                    <InstagramIcon className="size-4" strokeWidth={1.25} />
                  </a>
                  <a
                    href={f.facebookUrl}
                    aria-label={`${f.name} on Facebook`}
                    className="text-muted-gray transition-colors duration-500 hover:text-bronze"
                  >
                    <FacebookIcon className="size-4" strokeWidth={1.25} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
