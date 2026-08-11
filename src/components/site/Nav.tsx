import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import logo from "@/assets/logo final.png";
import { NAV } from "@/data/site";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,border-color] duration-700 ${
        scrolled
          ? "border-b border-line/60 bg-ink/80 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <div className="shell flex h-20 items-center justify-between md:h-24">
        <a href="#home" className="relative z-10 flex items-center" aria-label="Advanterra home">
          <img src={logo} alt="Advanterra Construction" className="h-10 w-auto md:h-11" />
        </a>

        <nav className="hidden items-center gap-10 lg:flex" aria-label="Primary">
          {NAV.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="navlink group relative text-bone/70 transition-colors duration-500 hover:text-bone"
            >
              {item.label}
              <span className="absolute -bottom-2 left-0 h-px w-full origin-right scale-x-0 bg-bronze transition-transform duration-500 group-hover:origin-left group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="navlink hidden items-center gap-2 border border-line px-5 py-3 text-bone/80 transition-colors duration-500 hover:border-bronze hover:text-bronze lg:inline-flex"
        >
          Let's Talk
          <ArrowUpRight className="size-3.5" strokeWidth={1.25} />
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="relative z-10 text-bone lg:hidden"
        >
          <Menu className={`size-6 transition-opacity ${open ? "opacity-0" : "opacity-100"}`} strokeWidth={1} />
        </button>
      </div>

      <div
        className={`fixed inset-0 z-0 max-h-[100dvh] overflow-y-auto bg-ink transition-opacity duration-300 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Close menu"
          className="absolute right-6 top-7 text-bone"
        >
          <X className="size-6" strokeWidth={1} />
        </button>
        <nav className="shell flex min-h-[100dvh] flex-col justify-center gap-2 py-28">
          {NAV.map((item, i) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`mobile-menu-item display border-b border-line/60 py-5 text-[40px] text-bone transition-opacity duration-500 ${
                open ? "opacity-100" : "opacity-0"
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="eyebrow mt-10 inline-flex items-center gap-2 text-bronze"
          >
            Let's Talk <ArrowUpRight className="size-3.5" strokeWidth={1.25} />
          </a>
        </nav>
      </div>
    </header>
  );
}
