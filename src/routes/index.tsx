import { useRef } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Approach } from "@/components/site/Approach";
import { Projects } from "@/components/site/Projects";
import { Services } from "@/components/site/Services";
import { Testimonials } from "@/components/site/Testimonials";
import { Founders } from "@/components/site/Founders";
import { Stats } from "@/components/site/Stats";
import { Contact } from "@/components/site/Contact";
import { LocationMap } from "@/components/site/LocationMap";
import { Footer } from "@/components/site/Footer";
import { useReveal, useSmoothScroll } from "@/lib/motion";
import hero from "@/assets/Home.png";

const TITLE = "Advanterra Construction — Architecture & Build Studio, Bengaluru";
const DESC =
  "Advanterra Construction designs and builds thoughtful, timeless spaces — custom homes, interiors and contracting across Bengaluru and beyond.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preload", as: "image", href: hero },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "GeneralContractor",
          name: "Advanterra Construction",
          description: DESC,
          telephone: "+91 8970092228",
          address: {
            "@type": "PostalAddress",
            streetAddress: "672A, Hosakerehalli Layout, Banashankari 3rd Stage",
            addressLocality: "Bengaluru",
            addressRegion: "Karnataka",
            postalCode: "560085",
            addressCountry: "IN",
          },
        }),
      },
    ],
  }),
});

function Index() {
  const root = useRef<HTMLDivElement>(null);
  useSmoothScroll();
  useReveal(root);

  return (
    <div ref={root} className="bg-ink font-sans antialiased">
      <Nav />
      <main>
        <Hero />
        <About />
        <Approach />
        <Projects />
        <Services />
        <Testimonials />
        <Founders />
        <Stats />
        <Contact />
        <LocationMap />
      </main>
      <Footer />
    </div>
  );
}
