import logo from "@/assets/logo final.png";
import { FacebookIcon, InstagramIcon } from "@/components/site/SocialIcons";
import { NAV } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-ink pb-10 pt-24 text-bone grain">
      <div className="shell">
        <div className="grid grid-cols-1 gap-14 border-t border-line pt-14 md:grid-cols-12">
          <div className="md:col-span-4">
            <img src={logo} alt="Advanterra Construction" className="h-9 w-auto" />
            <p className="mt-8 max-w-xs text-[15px] leading-[1.7] text-concrete">
              An architecture and construction studio designing timeless spaces from Bengaluru.
            </p>
          </div>

          <nav className="md:col-span-3" aria-label="Footer">
            <p className="eyebrow text-concrete">Navigate</p>
            <ul className="mt-6 space-y-3">
              {NAV.map((n) => (
                <li key={n.label}>
                  <a href={n.href} className="navlink text-bone/70 transition-colors duration-500 hover:text-bronze">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-3">
            <p className="eyebrow text-concrete">Social</p>
            <div className="mt-6 flex items-center gap-5">
              <a
                href="https://instagram.com/advanterra"
                aria-label="Instagram"
                className="text-bone/70 transition-colors duration-500 hover:text-bronze"
              >
                <InstagramIcon className="size-4" strokeWidth={1.25} />
              </a>
              <a
                href="https://www.facebook.com/people/Advanterra-Construction/100070238443495/?rdid=i4Y1aw74AwvpWklj&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F188zUPvJ2d%2F"
                aria-label="Facebook"
                className="text-bone/70 transition-colors duration-500 hover:text-bronze"
              >
                <FacebookIcon className="size-4" strokeWidth={1.25} />
              </a>
            </div>
          </div>

        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-8">
          <p className="eyebrow text-concrete">
            © {new Date().getFullYear()} Advanterra Construction
          </p>
          <p className="eyebrow text-concrete">Bengaluru, India</p>
        </div>
      </div>
    </footer>
  );
}
