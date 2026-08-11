import { MapPin, ArrowUpRight } from "lucide-react";
import { CONTACT } from "@/data/site";

export function LocationMap() {
  return (
    <section aria-label="Studio location" className="group relative h-[70svh] w-full overflow-hidden bg-ink-soft">
      <iframe
        title="Map showing Advanterra Construction studio in Banashankari, Bengaluru"
        allowFullScreen
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5923124678698!2d77.53790537495524!3d12.933904087378057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3f004da9553d%3A0x5c9817286f2b6925!2sADVANTERRA%20CONSTRUCTION!5e0!3m2!1sen!2sin!4v1786428379725!5m2!1sen!2sin"
        className="absolute inset-0 size-full grayscale-[1] invert-[0.92] contrast-[1.1] opacity-45 transition-[filter,opacity,transform] duration-[1500ms] ease-out group-hover:scale-[1.03] group-hover:grayscale-0 group-hover:invert-0 group-hover:contrast-125 group-hover:opacity-80"
      />
      <div className="pointer-events-none absolute inset-0 bg-ink/50 transition-opacity duration-1000 group-hover:opacity-25" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-ink to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink to-transparent" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <span className="absolute inset-0 -m-8 animate-ping rounded-full border border-bronze/40" />
        <MapPin className="size-8 text-bronze transition-transform duration-700 group-hover:-translate-y-2 group-hover:scale-110" strokeWidth={1} />
      </div>

      <div className="shell absolute inset-x-0 bottom-10">
        <div className="max-w-sm border-t border-line pt-6">
          <p className="eyebrow text-bronze">Studio</p>
          <p className="mt-4 text-[15px] leading-[1.7] text-bone/80">{CONTACT.address}</p>
          <a
            href={CONTACT.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="navlink group mt-6 inline-flex items-center gap-2 text-bone transition-colors duration-500 hover:text-bronze"
          >
            Get directions
            <ArrowUpRight className="size-3.5 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={1.25} />
          </a>
        </div>
      </div>
    </section>
  );
}
