import { useState, type FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import { CONTACT } from "@/data/site";

const FIELD =
  "w-full border-b border-line bg-transparent py-4 text-[15px] text-bone placeholder:text-concrete/70 outline-none transition-colors duration-500 focus:border-bronze";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");

    try {
      const response = await fetch("/.netlify/functions/send-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });

      if (!response.ok) {
        setStatus("error");
        return;
      }

      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="bg-ink text-bone">
      <div className="shell grid grid-cols-1 gap-16 py-28 lg:grid-cols-2 lg:gap-24 md:py-40">
        <div>
          <p data-reveal className="eyebrow flex items-center gap-4 text-concrete">
            <span className="inline-block h-px w-10 bg-bronze" />
            Contact
          </p>
          <h2 className="mt-10 text-[clamp(2rem,3.8vw,3.6rem)] font-light leading-[1.08] tracking-[-0.04em]">
            {["Let's create", "something", "extraordinary", "together."].map((l, i) => (
              <span key={l} className="reveal-line">
                <span data-mask data-mask-delay={i * 0.06} className="block">
                  {l}
                </span>
              </span>
            ))}
          </h2>

          <dl className="mt-16 space-y-8">
            <div data-reveal className="border-t border-line pt-5">
              <dt className="eyebrow text-concrete">Email</dt>
              <dd className="mt-3 text-[17px] font-light">
                <a href={`mailto:${CONTACT.email}`} className="transition-colors duration-500 hover:text-bronze">
                  {CONTACT.email}
                </a>
              </dd>
            </div>
            <div data-reveal className="border-t border-line pt-5">
              <dt className="eyebrow text-concrete">Phone</dt>
              <dd className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-[17px] font-light">
                <a href="tel:+918970092228" className="transition-colors duration-500 hover:text-bronze">
                  {CONTACT.phone}
                </a>
                <a href="tel:+919964566801" className="transition-colors duration-500 hover:text-bronze">
                  {CONTACT.phoneAlt}
                </a>
              </dd>
            </div>
            <div data-reveal className="border-t border-line pt-5">
              <dt className="eyebrow text-concrete">Office</dt>
              <dd className="mt-3 max-w-sm text-[17px] font-light leading-[1.6] text-bone/80">
                {CONTACT.address}
              </dd>
            </div>
          </dl>
        </div>

        <form data-reveal onSubmit={onSubmit} className="relative overflow-hidden border border-line bg-charcoal/60 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.28)] sm:p-10 lg:mt-12">
          <span aria-hidden className="absolute right-0 top-0 h-px w-24 bg-bronze" />
          <p className="eyebrow mb-10 text-bronze">Start your project</p>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <label className="block">
              <span className="eyebrow text-concrete">Name</span>
              <input required name="name" className={FIELD} placeholder="Your full name" />
            </label>
            <label className="block">
              <span className="eyebrow text-concrete">Email</span>
              <input required type="email" name="email" className={FIELD} placeholder="you@email.com" />
            </label>
            <label className="block">
              <span className="eyebrow text-concrete">Phone</span>
              <input
                required
                type="tel"
                name="phone"
                inputMode="tel"
                pattern="[0-9+\-\s()]{7,}"
                className={FIELD}
                placeholder="+91 00000 00000"
              />
            </label>
            <label className="block">
              <span className="eyebrow text-concrete">Project type</span>
              <select required name="type" defaultValue="" className={`${FIELD} appearance-none`}>
                <option value="" disabled className="bg-ink">
                  Select a project type
                </option>
                {["Custom Home Design", "General Contracting", "Interior Renovation", "Project Management"].map(
                  (o) => (
                    <option key={o} value={o} className="bg-ink">
                      {o}
                    </option>
                  ),
                )}
              </select>
            </label>
          </div>

          <label className="mt-8 block">
            <span className="eyebrow text-concrete">Message</span>
            <textarea required name="message" rows={4} className={`${FIELD} resize-none`} placeholder="Tell us about your project" />
          </label>

          <button
            type="submit"
            disabled={status === "sending"}
            className="navlink group mt-12 inline-flex items-center gap-3 bg-bronze px-8 py-4 text-ink transition-all duration-500 hover:bg-bone hover:shadow-[0_0_32px_rgba(184,154,106,0.3)] disabled:pointer-events-none disabled:opacity-60"
          >
            {status === "sending" ? "Sending inquiry" : status === "sent" ? "Inquiry received" : "Send inquiry"}
            <ArrowUpRight
              className="size-4 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1"
              strokeWidth={1.25}
            />
          </button>
          <p aria-live="polite" className="eyebrow mt-6 h-4 text-bronze">
            {status === "sent"
              ? "Thank you — we'll be in touch within one business day."
              : status === "error"
                ? "We couldn't send your inquiry. Please try again."
                : status === "sending"
                  ? "Sending your inquiry..."
                  : ""}
          </p>
        </form>
      </div>
    </section>
  );
}
