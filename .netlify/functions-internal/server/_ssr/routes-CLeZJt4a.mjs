import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as Home_default } from "./router-DLiC9FpM.mjs";
import { a as Layers, c as ChevronRight, d as ArrowRight, i as MapPin, l as ChevronLeft, n as PenLine, o as KeyRound, r as Menu, s as Compass, t as X, u as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { n as gsapWithCSS, t as ScrollTrigger } from "../_libs/gsap.mjs";
import { t as Lenis } from "../_libs/lenis.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CLeZJt4a.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var logo_final_default = "/assets/logo%20final-BBEMuefy.png";
var ID1_default = "/assets/ID1-CqHX1pt7.png";
var ID2_default = "/assets/ID2-BMNls-HK.png";
var ID3_default = "/assets/ID3-BGhHQ01o.png";
var ID4_default = "/assets/ID4-BDeGqH1b.png";
var ID5_default = "/assets/ID5-BLE46qzO.png";
var ID6_default = "/assets/ID6-C3nD4NOB.png";
var H1_default = "/assets/H1-Cl3i9XuR.png";
var NAV = [
	{
		label: "Home",
		href: "#home"
	},
	{
		label: "About",
		href: "#about"
	},
	{
		label: "Projects",
		href: "#projects"
	},
	{
		label: "Services",
		href: "#services"
	},
	{
		label: "Contact",
		href: "#contact"
	}
];
var PROJECTS = [
	{
		index: "01",
		title: "Hillside Retreat",
		type: "Residential",
		year: "2024",
		location: "Nandi Hills",
		image: ID1_default
	},
	{
		index: "02",
		title: "Lake House",
		type: "Residential",
		year: "2023",
		location: "Sakleshpur",
		image: ID2_default
	},
	{
		index: "03",
		title: "Forest Cabin",
		type: "Hospitality",
		year: "2023",
		location: "Coorg",
		image: ID3_default
	},
	{
		index: "04",
		title: "Modern Essence",
		type: "Interior",
		year: "2025",
		location: "Bengaluru",
		image: ID4_default
	},
	{
		index: "05",
		title: "Courtyard House",
		type: "Residential",
		year: "2025",
		location: "Bengaluru",
		image: ID5_default
	},
	{
		index: "06",
		title: "Lightwell Studio",
		type: "Interior",
		year: "2025",
		location: "Bengaluru",
		image: ID6_default
	},
	{
		index: "07",
		title: "H1 Residence",
		type: "Residential",
		year: "2025",
		location: "Bengaluru",
		image: H1_default
	}
];
var APPROACH = [
	{
		index: "01",
		title: "Understand",
		body: "We listen, research and truly understand your needs, context and vision before a single line is drawn."
	},
	{
		index: "02",
		title: "Design",
		body: "We create concepts that balance form, function, sustainability and emotion."
	},
	{
		index: "03",
		title: "Develop",
		body: "We refine every detail with precision, ensuring clarity, buildability and quality."
	},
	{
		index: "04",
		title: "Deliver",
		body: "We work closely with our partners to bring the vision to life — on time, on budget, with excellence."
	}
];
var SERVICES = [
	{
		index: "01",
		title: "Custom Home Design",
		body: "We turn your dreams into blueprints with our expert architectural team."
	},
	{
		index: "02",
		title: "General Contracting",
		body: "End-to-end management of residential and commercial construction projects."
	},
	{
		index: "03",
		title: "Interior Renovation",
		body: "Transforming existing spaces into modern, functional works of art."
	},
	{
		index: "04",
		title: "Project Management",
		body: "Rigorous oversight to ensure timelines, budgets and quality standards are met."
	}
];
var TESTIMONIALS = [
	{
		quote: "Advanterra Construction transformed our vision into reality with exceptional craftsmanship and attention to detail. Our new home is not just a structure; it's a masterpiece that reflects our lifestyle and values.",
		name: "K G Vijendra",
		role: "Homeowner"
	},
	{
		quote: "From the initial design consultation to the final walk-through, Advanterra exceeded our expectations in every way. Their team was professional, knowledgeable, and a pleasure to work with.",
		name: "Anup Desai",
		role: "Homeowner"
	},
	{
		quote: "The team at Advanterra delivered our project on time and within budget, without compromising on quality. Their expertise in modern architectural design truly stands out.",
		name: "Vijeth",
		role: "Homeowner"
	},
	{
		quote: "Advanterra provided innovative solutions to challenges we faced during our home build. Their commitment to excellence and customer satisfaction is unparalleled.",
		name: "Praveen",
		role: "Homeowner"
	}
];
var STATS = [
	{
		value: "120+",
		label: "Projects"
	},
	{
		value: "80+",
		label: "Clients"
	},
	{
		value: "10+",
		label: "Years"
	}
];
var CONTACT = {
	email: "advanterraconstruction@gmail.com",
	phone: "+91 89700 92228",
	phoneAlt: "+91 99645 66801",
	address: "672A, Hosakerehalli Layout, Banashankari 3rd Stage, Bengaluru, Karnataka 560085",
	mapsUrl: "https://www.google.com/maps/search/?api=1&query=Hosakerehalli+Layout+Banashankari+3rd+Stage+Bengaluru"
};
function Nav() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 40);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = open ? "hidden" : "";
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: `fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,border-color] duration-700 ${scrolled ? "border-b border-line/60 bg-ink/80 backdrop-blur-md" : "border-b border-transparent"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "shell flex h-20 items-center justify-between md:h-24",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#home",
					className: "relative z-10 flex items-center",
					"aria-label": "Advanterra home",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: logo_final_default,
						alt: "Advanterra Construction",
						className: "h-10 w-auto md:h-11"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-10 lg:flex",
					"aria-label": "Primary",
					children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: item.href,
						className: "navlink group relative text-bone/70 transition-colors duration-500 hover:text-bone",
						children: [item.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute -bottom-2 left-0 h-px w-full origin-right scale-x-0 bg-bronze transition-transform duration-500 group-hover:origin-left group-hover:scale-x-100" })]
					}, item.label))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#contact",
					className: "navlink hidden items-center gap-2 border border-line px-5 py-3 text-bone/80 transition-colors duration-500 hover:border-bronze hover:text-bronze lg:inline-flex",
					children: ["Let's Talk", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
						className: "size-3.5",
						strokeWidth: 1.25
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setOpen((v) => !v),
					"aria-label": open ? "Close menu" : "Open menu",
					"aria-expanded": open,
					className: "relative z-10 text-bone lg:hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {
						className: `size-6 transition-opacity ${open ? "opacity-0" : "opacity-100"}`,
						strokeWidth: 1
					})
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: `fixed inset-0 z-0 max-h-[100dvh] overflow-y-auto bg-ink transition-opacity duration-300 lg:hidden ${open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => setOpen(false),
				"aria-label": "Close menu",
				className: "absolute right-6 top-7 text-bone",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
					className: "size-6",
					strokeWidth: 1
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "shell flex min-h-[100dvh] flex-col justify-center gap-2 py-28",
				children: [NAV.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: item.href,
					onClick: () => setOpen(false),
					className: `mobile-menu-item display border-b border-line/60 py-5 text-[40px] text-bone transition-opacity duration-500 ${open ? "opacity-100" : "opacity-0"}`,
					children: item.label
				}, item.label)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#contact",
					onClick: () => setOpen(false),
					className: "eyebrow mt-10 inline-flex items-center gap-2 text-bronze",
					children: ["Let's Talk ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
						className: "size-3.5",
						strokeWidth: 1.25
					})]
				})]
			})]
		})]
	});
}
function InstagramIcon({ className, strokeWidth = 1.25 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		"aria-hidden": "true",
		viewBox: "0 0 24 24",
		fill: "none",
		className,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "3",
				y: "3",
				width: "18",
				height: "18",
				rx: "5",
				stroke: "currentColor",
				strokeWidth
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "12",
				cy: "12",
				r: "4",
				stroke: "currentColor",
				strokeWidth
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "17.5",
				cy: "6.5",
				r: "0.75",
				fill: "currentColor"
			})
		]
	});
}
function FacebookIcon({ className, strokeWidth = 1.25 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		"aria-hidden": "true",
		viewBox: "0 0 24 24",
		fill: "none",
		className,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M14 21v-8h3l.75-3H14V8.5c0-.9.5-1.5 1.6-1.5H18V4h-2.6C12.4 4 11 5.8 11 8.4V10H8v3h3v8h3Z",
			fill: "currentColor"
		})
	});
}
var registered = false;
function ensureGsap() {
	if (typeof window === "undefined") return;
	if (!registered) {
		gsapWithCSS.registerPlugin(ScrollTrigger);
		registered = true;
	}
}
var prefersReducedMotion = () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
function useSmoothScroll() {
	(0, import_react.useEffect)(() => {
		if (prefersReducedMotion()) return;
		ensureGsap();
		const lenis = new Lenis({
			duration: 1.15,
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
			smoothWheel: true
		});
		lenis.on("scroll", ScrollTrigger.update);
		const raf = (time) => lenis.raf(time * 1e3);
		gsapWithCSS.ticker.add(raf);
		gsapWithCSS.ticker.lagSmoothing(0);
		ScrollTrigger.refresh();
		return () => {
			gsapWithCSS.ticker.remove(raf);
			lenis.destroy();
		};
	}, []);
}
/** Fade + rise for any [data-reveal] descendant of the scope element. */
function useReveal(scope) {
	(0, import_react.useEffect)(() => {
		const el = scope.current;
		if (!el) return;
		if (prefersReducedMotion()) return;
		ensureGsap();
		const ctx = gsapWithCSS.context(() => {
			gsapWithCSS.utils.toArray("[data-reveal]").forEach((item) => {
				gsapWithCSS.fromTo(item, {
					y: 34,
					opacity: 0
				}, {
					y: 0,
					opacity: 1,
					duration: 1.1,
					ease: "power3.out",
					delay: Number(item.dataset["revealDelay"] ?? 0),
					scrollTrigger: {
						trigger: item,
						start: "top 88%"
					}
				});
			});
			gsapWithCSS.utils.toArray("[data-mask]").forEach((item) => {
				gsapWithCSS.fromTo(item, { yPercent: 110 }, {
					yPercent: 0,
					duration: 1.2,
					ease: "power4.out",
					delay: Number(item.dataset["maskDelay"] ?? 0),
					scrollTrigger: {
						trigger: item,
						start: "top 92%"
					}
				});
			});
			gsapWithCSS.utils.toArray("[data-parallax]").forEach((item) => {
				gsapWithCSS.fromTo(item, { yPercent: -6 }, {
					yPercent: 6,
					ease: "none",
					scrollTrigger: {
						trigger: item.parentElement ?? item,
						start: "top bottom",
						end: "bottom top",
						scrub: true
					}
				});
			});
			gsapWithCSS.utils.toArray("[data-rule]").forEach((item) => {
				gsapWithCSS.fromTo(item, { scaleX: 0 }, {
					scaleX: 1,
					transformOrigin: "left center",
					duration: 1.4,
					ease: "power3.out",
					scrollTrigger: {
						trigger: item,
						start: "top 92%"
					}
				});
			});
		}, el);
		return () => ctx.revert();
	}, [scope]);
}
function Hero() {
	const root = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (prefersReducedMotion()) return;
		ensureGsap();
		const ctx = gsapWithCSS.context(() => {
			gsapWithCSS.timeline({ defaults: { ease: "power4.out" } }).fromTo(".hero-img", {
				scale: 1.16,
				opacity: 0
			}, {
				scale: 1,
				opacity: 1,
				duration: 2.4,
				ease: "power2.out"
			}).fromTo(".hero-eyebrow", { yPercent: 120 }, {
				yPercent: 0,
				duration: 1
			}, .5).fromTo(".hero-line", { yPercent: 115 }, {
				yPercent: 0,
				duration: 1.25,
				stagger: .09
			}, .65).fromTo(".hero-fade", {
				y: 22,
				opacity: 0
			}, {
				y: 0,
				opacity: 1,
				duration: 1,
				stagger: .12
			}, 1.25);
			gsapWithCSS.to(".hero-img", {
				scale: 1.08,
				ease: "none",
				scrollTrigger: {
					trigger: root.current,
					start: "top top",
					end: "bottom top",
					scrub: true
				}
			});
		}, root);
		return () => ctx.revert();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "home",
		ref: root,
		className: "relative h-[100svh] w-full overflow-hidden bg-ink grain",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: Home_default,
				alt: "Contemporary hillside residence in concrete, timber and glass under an overcast sky",
				width: 1568,
				height: 987,
				fetchPriority: "high",
				decoding: "async",
				className: "hero-img absolute inset-0 size-full object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-ink/45" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-ink via-ink/60 to-transparent md:to-ink/0 md:via-ink/35" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink to-transparent" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "shell relative flex h-full flex-col justify-end pb-24 pt-32 md:justify-center md:pb-0",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-[38rem]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "display mt-8 leading-[1.05] text-[clamp(2.35rem,6vw,5.75rem)] text-bone",
						children: [
							"Spaces that",
							"inspire.",
							"Design that",
							"lasts."
						].map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "reveal-line",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hero-line block",
								children: line
							})
						}, line))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hero-fade mt-10 flex max-w-[34rem] flex-col items-start gap-6 md:flex-row md:items-end md:gap-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "max-w-[19rem] border-l border-bronze/70 pl-4 text-[13px] uppercase tracking-[0.12em] leading-[1.7] text-bone/70",
							children: "Architecture, construction and interiors — Bengaluru"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#projects",
							className: "group inline-flex shrink-0 items-center gap-3 border-b border-bone/30 pb-3 navlink text-bone transition-colors duration-500 hover:border-bronze hover:text-bronze",
							children: ["View projects", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
								className: "size-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1",
								strokeWidth: 1.25
							})]
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "hero-fade pointer-events-auto absolute right-8 top-1/2 hidden -translate-y-1/2 flex-col items-end gap-5 xl:flex",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-bone/50",
						children: "Follow our work"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col items-end gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "https://instagram.com/advanterra",
							"aria-label": "Instagram",
							className: "group inline-flex items-center gap-3 text-bone/70 transition-colors duration-500 hover:text-bronze",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "navlink",
								children: "Instagram"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InstagramIcon, {
								className: "size-4 transition-transform duration-500 group-hover:scale-110",
								strokeWidth: 1.25
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "https://www.facebook.com/people/Advanterra-Construction/100070238443495/?rdid=i4Y1aw74AwvpWklj&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F188zUPvJ2d%2F",
							"aria-label": "Facebook",
							className: "group inline-flex items-center gap-3 text-bone/70 transition-colors duration-500 hover:text-bronze",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "navlink",
								children: "Facebook"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FacebookIcon, {
								className: "size-4 transition-transform duration-500 group-hover:scale-110",
								strokeWidth: 1.25
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-1 h-12 w-px bg-bone/25" })
				]
			})
		]
	});
}
var image_default = "/assets/image-C7GJ7JOf.png";
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "about",
		className: "bg-bone py-28 text-ink md:py-40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "shell grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						"data-reveal": true,
						className: "origin-left eyebrow flex items-center gap-4 text-[13px] text-muted-gray transition-transform duration-300 hover:scale-[1.08]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "inline-block h-px w-10 bg-bronze" }), "Our story"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-10 max-w-[16ch] text-[clamp(2rem,4.2vw,4.25rem)] font-light leading-[1.08] tracking-[-0.035em]",
						children: [
							"We believe architecture",
							"has the power to improve",
							"lives and create a",
							"lasting impact."
						].map((l, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "reveal-line",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"data-mask": true,
								"data-mask-delay": i * .06,
								className: "block",
								children: l
							})
						}, l))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-14 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							"data-reveal": true,
							className: "origin-left text-[17px] leading-[1.7] text-muted-gray transition-transform duration-300 hover:scale-[1.03]",
							children: "Founded in Bengaluru, Advanterra Construction is a multidisciplinary design and build studio working across residential, hospitality and interior architecture."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							"data-reveal": true,
							"data-reveal-delay": "0.1",
							className: "origin-left text-[17px] leading-[1.7] text-muted-gray transition-transform duration-300 hover:scale-[1.03]",
							children: "Our work is guided by a simple belief: great design has the power to improve lives — through material honesty, proportion and light."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						"data-reveal": true,
						href: "#projects",
						className: "navlink group mt-14 inline-flex items-center gap-3 border-b border-ink/20 pb-3 transition-colors duration-500 hover:border-bronze hover:text-bronze",
						children: ["Discover our work", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
							className: "size-4 transition-transform duration-500 group-hover:translate-x-1.5",
							strokeWidth: 1.25
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-5 lg:pt-24",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "story-image-frame relative aspect-[4/5] w-full overflow-hidden bg-charcoal",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						"data-parallax": true,
						src: image_default,
						alt: "Curved raw concrete interior lit by a single shaft of daylight",
						width: 1200,
						height: 1504,
						loading: "lazy",
						className: "story-image absolute inset-0 size-full scale-[1.12] object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute inset-x-4 bottom-4 z-20 flex items-end justify-between border-t border-bone/30 pt-3 text-bone/75",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow",
							children: "Material / Light"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow text-bone/50",
							children: "01"
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					"data-reveal": true,
					className: "eyebrow mt-6 text-muted-gray",
					children: "Material study — cast concrete, daylight"
				})]
			})]
		})
	});
}
var ICONS = [
	Compass,
	PenLine,
	Layers,
	KeyRound
];
function Approach() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-paper py-24 text-ink md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "shell",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 lg:col-span-7",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						"data-reveal": true,
						className: "origin-left eyebrow flex items-center gap-4 text-[13px] text-bronze transition-transform duration-300 hover:scale-[1.08]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "inline-block h-px w-10 bg-bronze" }), "Our approach"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						"data-reveal": true,
						className: "mt-8 max-w-[18ch] text-[clamp(2rem,3.6vw,3.5rem)] font-light leading-[1.08] tracking-[-0.035em]",
						children: "Four stages, one continuous conversation."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					"data-reveal": true,
					className: "origin-left text-[17px] leading-[1.7] text-muted-gray transition-transform duration-300 hover:scale-[1.03] lg:col-span-4 lg:col-start-9",
					children: "Every project moves through the same disciplined process — from listening, to drawing, to detailing, to handover."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4",
				children: APPROACH.map((step, i) => {
					const Icon = ICONS[i];
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						"data-reveal": true,
						"data-reveal-delay": i * .08,
						className: "group relative border-t-2 border-ink/20 py-10 pr-8 transition-colors duration-500 hover:border-bronze xl:border-t-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start justify-between gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[clamp(2.5rem,4vw,4rem)] font-light leading-none tracking-[-0.04em] text-ink/15 transition-colors duration-500 group-hover:text-bronze",
									children: step.index
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									className: "size-6 shrink-0 text-ink/60 transition-colors duration-500 group-hover:text-bronze",
									strokeWidth: .9
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-8 break-words text-[clamp(1.25rem,2vw,1.5rem)] font-normal uppercase tracking-[0.02em] transition-transform duration-500 group-hover:translate-x-1",
								children: step.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "origin-left mt-4 max-w-xs text-[17px] leading-[1.7] text-muted-gray transition-transform duration-300 group-hover:scale-[1.03]",
								children: step.body
							})
						]
					}, step.index);
				})
			})]
		})
	});
}
function Card({ p }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "group relative w-[80vw] shrink-0 snap-start md:w-[44vw] xl:w-[32vw]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "project-image-depth relative w-full overflow-hidden bg-charcoal",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: p.image,
					alt: `${p.title} — ${p.type} project in ${p.location}`,
					loading: "lazy",
					className: "project-image block h-auto w-full object-contain transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-ink/0 transition-colors duration-700 group-hover:bg-ink/25" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "eyebrow absolute left-6 top-6 text-bronze",
					children: p.index
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 flex items-start justify-between gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "min-w-0 flex-1 transition-transform duration-700 ease-out group-hover:translate-x-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "eyebrow mt-3 flex max-w-[20rem] flex-wrap gap-x-2 gap-y-1 text-concrete",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: p.type }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"aria-hidden": true,
							children: "—"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: p.location }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"aria-hidden": true,
							children: "—"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: p.year })
					]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
				className: "mt-2 size-5 text-concrete transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-bronze",
				strokeWidth: 1
			})]
		})]
	});
}
function Projects() {
	const section = (0, import_react.useRef)(null);
	const track = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (prefersReducedMotion()) return;
		ensureGsap();
		const mm = gsapWithCSS.matchMedia();
		mm.add("(min-width: 768px)", () => {
			const el = track.current;
			const wrap = section.current;
			if (!el || !wrap) return;
			const distance = () => el.scrollWidth - window.innerWidth + 96;
			const tween = gsapWithCSS.to(el, {
				x: () => -distance(),
				ease: "none",
				scrollTrigger: {
					trigger: wrap,
					start: "top top",
					end: () => `+=${distance()}`,
					pin: true,
					scrub: 1,
					invalidateOnRefresh: true,
					anticipatePin: 1
				}
			});
			return () => {
				tween.scrollTrigger?.kill();
				tween.kill();
			};
		});
		ScrollTrigger.refresh();
		return () => mm.revert();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "projects",
		ref: section,
		className: "relative overflow-hidden bg-ink py-24 text-bone md:h-[100svh] md:py-0",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex h-full flex-col justify-center gap-10 md:gap-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "shell flex flex-wrap items-end justify-between gap-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "eyebrow flex items-center gap-4 text-concrete",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "inline-block h-px w-10 bg-bronze" }), "Selected work"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-6 text-[clamp(2rem,3.6vw,3.5rem)] font-light leading-[1.1] tracking-[-0.04em]",
						children: "Featured projects"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow hidden text-concrete md:block",
						children: "Scroll horizontally →"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "eyebrow carousel-hint flex items-center gap-3 text-bronze md:hidden",
						children: ["Swipe to explore ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
							className: "carousel-hint-arrow size-3.5",
							strokeWidth: 1.25
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mt-10 md:mt-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "touch-carousel snap-x snap-mandatory overflow-x-auto no-scrollbar md:overflow-visible",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						ref: track,
						className: "flex w-max gap-6 px-6 pr-16 md:gap-10 md:px-12 md:pr-24 xl:px-16",
						children: PROJECTS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { p }, p.index))
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"aria-hidden": true,
					className: "pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-ink via-ink/80 to-transparent lg:hidden"
				})]
			})]
		})
	});
}
function Services() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "services",
		className: "bg-ink py-28 text-bone md:py-40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "shell grid grid-cols-1 gap-12 lg:grid-cols-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						"data-reveal": true,
						className: "eyebrow flex items-center gap-4 text-bronze",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "inline-block h-px w-10 bg-bronze" }), "What we do"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						"data-reveal": true,
						className: "mt-8 text-[clamp(2rem,3.6vw,3.5rem)] font-light leading-[1.1] tracking-[-0.035em]",
						children: [
							"Design and build,",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"under one roof."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						"data-reveal": true,
						className: "mt-8 max-w-sm text-[15px] leading-[1.7] text-concrete",
						children: "Four services, delivered by one team — so intent survives from the first sketch to the last fitting."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "lg:col-span-8 lg:pt-4",
				children: SERVICES.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#contact",
					"data-reveal": true,
					"data-reveal-delay": i * .06,
					className: "group grid grid-cols-[auto_1fr_auto] items-baseline gap-6 border-t border-line py-8 transition-colors duration-500 last:border-b hover:border-bronze md:gap-10 md:py-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[15px] font-light tracking-[0.08em] text-bronze",
							children: s.index
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-[clamp(1.4rem,2.6vw,2.25rem)] font-light tracking-[-0.03em] transition-transform duration-700 ease-out group-hover:translate-x-2",
							children: s.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 max-w-lg text-[15px] leading-[1.7] text-concrete",
							children: s.body
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
							className: "size-5 self-center text-concrete transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-bronze",
							strokeWidth: 1
						})
					]
				}, s.index))
			})]
		})
	});
}
var TRACK_TRANSLATES = [
	"translate-x-0",
	"-translate-x-full",
	"-translate-x-[200%]",
	"-translate-x-[300%]"
];
function Testimonials() {
	const [active, setActive] = (0, import_react.useState)(0);
	const [isTransitioning, setIsTransitioning] = (0, import_react.useState)(false);
	const handleChange = (index) => {
		if (index === active || isTransitioning) return;
		setActive(index);
		setIsTransitioning(true);
		window.setTimeout(() => setIsTransitioning(false), 700);
	};
	const handlePrev = () => {
		const nextIndex = active === 0 ? TESTIMONIALS.length - 1 : active - 1;
		handleChange(nextIndex);
	};
	const handleNext = () => {
		const nextIndex = active === TESTIMONIALS.length - 1 ? 0 : active + 1;
		handleChange(nextIndex);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-bone py-28 text-ink md:py-40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "shell",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-end justify-between gap-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					"data-reveal": true,
					className: "eyebrow flex items-center gap-4 text-muted-gray",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "inline-block h-px w-10 bg-bronze" }), "Client voices"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					"data-reveal": true,
					className: "max-w-[14ch] text-[clamp(2rem,3.6vw,3.5rem)] font-light leading-[1.03] tracking-[-0.035em]",
					children: "Trusted by those who live in our work."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "editorial-testimonial mt-16 lg:mt-24",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: `flex touch-pan-y transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${TRACK_TRANSLATES[active]}`,
						children: TESTIMONIALS.map((testimonial, index) => {
							const initials = testimonial.name.split(" ").map((name) => name[0]).join("").slice(0, 2);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								"aria-hidden": index !== active,
								className: "flex w-full shrink-0 items-start gap-5 md:gap-10 lg:gap-16",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									"aria-hidden": true,
									className: "editorial-testimonial-index select-none text-[clamp(5rem,14vw,8rem)] font-light leading-none tracking-[-0.08em] text-ink/10",
									children: String(index + 1).padStart(2, "0")
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0 flex-1 pt-2 md:pt-5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
										className: "max-w-3xl text-[clamp(1.4rem,3vw,2.65rem)] font-light leading-[1.3] tracking-[-0.035em]",
										children: [
											"“",
											testimonial.quote,
											"”"
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-10 flex items-center gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "editorial-testimonial-avatar flex size-12 shrink-0 items-center justify-center rounded-full bg-ink text-[12px] tracking-[0.12em] text-bone",
											children: initials
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-medium",
											children: testimonial.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-sm text-muted-gray",
											children: testimonial.role
										})] })]
									})]
								})]
							}, testimonial.name);
						})
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-14 flex flex-wrap items-center justify-between gap-6 border-t border-ink/15 pt-5 md:mt-20",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex items-center gap-3",
							"aria-label": "Choose testimonial",
							children: TESTIMONIALS.map((testimonial, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								"aria-label": `Show testimonial ${index + 1}`,
								"aria-pressed": index === active,
								onClick: () => handleChange(index),
								className: "group flex min-h-8 items-center py-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `block h-px transition-all duration-500 ${index === active ? "w-12 bg-ink" : "w-6 bg-ink/20 group-hover:w-8 group-hover:bg-ink/50"}` })
							}, testimonial.name))
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "eyebrow text-muted-gray",
							children: [
								String(active + 1).padStart(2, "0"),
								" / ",
								String(TESTIMONIALS.length).padStart(2, "0")
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-label": "Previous testimonial",
							onClick: handlePrev,
							className: "rounded-full p-2 text-ink/40 transition-colors duration-300 hover:bg-ink/5 hover:text-ink",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {
								className: "size-5",
								strokeWidth: 1.25
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-label": "Next testimonial",
							onClick: handleNext,
							className: "rounded-full p-2 text-ink/40 transition-colors duration-300 hover:bg-ink/5 hover:text-ink",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
								className: "size-5",
								strokeWidth: 1.25
							})
						})]
					})]
				})]
			})]
		})
	});
}
var FOUNDERS = [{
	name: "Ashwin Kumar S V",
	role: "Co-Founder",
	tagline: "Thoughtful spaces, shaped by light and proportion.",
	qualification: "B.E. · M.Tech. — Civil & Structural Engineering",
	image: "/assets/Ashwin-CACdDriF.png",
	instagramUrl: "https://www.instagram.com/ashwin_sv",
	facebookUrl: "https://www.facebook.com/ashwin.sv.1"
}, {
	name: "Himanth H S",
	role: "Co-Founder",
	tagline: "Strong foundations, finished with care and precision.",
	qualification: "B.E. · M.Tech. — Civil & Structural Engineering",
	image: "/assets/Himanth-BSkKi5VL.png",
	instagramUrl: "https://www.instagram.com/hshimanth",
	facebookUrl: "https://www.facebook.com/himanth.hs"
}];
function Founders() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-paper py-28 text-ink md:py-40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "shell",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				"data-reveal": true,
				className: "eyebrow flex items-center gap-4 text-muted-gray",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "inline-block h-px w-10 bg-bronze" }), "The founders"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-16 grid grid-cols-1 items-start gap-16 md:grid-cols-2 md:gap-10",
				children: FOUNDERS.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					"data-reveal": true,
					"data-reveal-delay": i * .1,
					className: "flex h-full flex-col",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "founder-image-depth relative aspect-[4/5] w-full overflow-hidden bg-charcoal",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: f.image,
							alt: `Portrait of ${f.name}`,
							width: 1e3,
							height: 1250,
							loading: "lazy",
							className: "founder-image object-cover object-top grayscale transition-all duration-[1200ms] ease-out hover:scale-[1.03] hover:grayscale-0"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-1 flex-col border-t border-ink/15 pt-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-[clamp(1.4rem,2vw,1.9rem)] font-light tracking-[-0.03em]",
								children: f.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow mt-3 text-bronze",
								children: f.role
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow mt-5 text-muted-gray",
								children: f.qualification
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 flex-1 max-w-md text-[15px] leading-[1.7] text-muted-gray",
								children: f.tagline
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 flex items-center gap-8",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: f.instagramUrl,
									"aria-label": `${f.name} on Instagram`,
									className: "text-muted-gray transition-colors duration-500 hover:text-bronze",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InstagramIcon, {
										className: "size-4",
										strokeWidth: 1.25
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: f.facebookUrl,
									"aria-label": `${f.name} on Facebook`,
									className: "text-muted-gray transition-colors duration-500 hover:text-bronze",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FacebookIcon, {
										className: "size-4",
										strokeWidth: 1.25
									})
								})]
							})
						]
					})]
				}, f.name))
			})]
		})
	});
}
function Stats() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-ink py-24 text-bone md:py-32 grain",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "shell grid grid-cols-3 gap-x-4 gap-y-14 text-center lg:text-left",
			children: STATS.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				"data-reveal": true,
				"data-reveal-delay": i * .08,
				className: "border-t border-line pt-8 pr-0 sm:pr-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[clamp(2.75rem,6vw,5.5rem)] font-extralight leading-none tracking-[-0.05em]",
					children: s.value
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow mt-6 text-concrete",
					children: s.label
				})]
			}, s.label))
		})
	});
}
var FIELD = "w-full border-b border-line bg-transparent py-4 text-[15px] text-bone placeholder:text-concrete/70 outline-none transition-colors duration-500 focus:border-bronze";
function Contact() {
	const [sent, setSent] = (0, import_react.useState)(false);
	const onSubmit = (e) => {
		e.preventDefault();
		setSent(true);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		className: "bg-ink text-bone",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "shell grid grid-cols-1 gap-16 py-28 lg:grid-cols-2 lg:gap-24 md:py-40",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					"data-reveal": true,
					className: "eyebrow flex items-center gap-4 text-concrete",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "inline-block h-px w-10 bg-bronze" }), "Contact"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-10 text-[clamp(2rem,3.8vw,3.6rem)] font-light leading-[1.08] tracking-[-0.04em]",
					children: [
						"Let's create",
						"something",
						"extraordinary",
						"together."
					].map((l, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "reveal-line",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"data-mask": true,
							"data-mask-delay": i * .06,
							className: "block",
							children: l
						})
					}, l))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "mt-16 space-y-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							"data-reveal": true,
							className: "border-t border-line pt-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "eyebrow text-concrete",
								children: "Email"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-3 text-[17px] font-light",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: `mailto:${CONTACT.email}`,
									className: "transition-colors duration-500 hover:text-bronze",
									children: CONTACT.email
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							"data-reveal": true,
							className: "border-t border-line pt-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "eyebrow text-concrete",
								children: "Phone"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
								className: "mt-3 flex flex-wrap gap-x-4 gap-y-2 text-[17px] font-light",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "tel:+918970092228",
									className: "transition-colors duration-500 hover:text-bronze",
									children: CONTACT.phone
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "tel:+919964566801",
									className: "transition-colors duration-500 hover:text-bronze",
									children: CONTACT.phoneAlt
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							"data-reveal": true,
							className: "border-t border-line pt-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "eyebrow text-concrete",
								children: "Office"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-3 max-w-sm text-[17px] font-light leading-[1.6] text-bone/80",
								children: CONTACT.address
							})]
						})
					]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				"data-reveal": true,
				onSubmit,
				className: "relative overflow-hidden border border-line bg-charcoal/60 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.28)] sm:p-10 lg:mt-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						"aria-hidden": true,
						className: "absolute right-0 top-0 h-px w-24 bg-bronze"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow mb-10 text-bronze",
						children: "Start your project"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 gap-8 sm:grid-cols-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "block",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "eyebrow text-concrete",
									children: "Name"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									required: true,
									name: "name",
									className: FIELD,
									placeholder: "Your full name"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "block",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "eyebrow text-concrete",
									children: "Email"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									required: true,
									type: "email",
									name: "email",
									className: FIELD,
									placeholder: "you@email.com"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "block",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "eyebrow text-concrete",
									children: "Phone"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									required: true,
									type: "tel",
									name: "phone",
									inputMode: "tel",
									pattern: "[0-9+\\-\\s()]{7,}",
									className: FIELD,
									placeholder: "+91 00000 00000"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "block",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "eyebrow text-concrete",
									children: "Project type"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									required: true,
									name: "type",
									defaultValue: "",
									className: `${FIELD} appearance-none`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "",
										disabled: true,
										className: "bg-ink",
										children: "Select a project type"
									}), [
										"Custom Home Design",
										"General Contracting",
										"Interior Renovation",
										"Project Management"
									].map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: o,
										className: "bg-ink",
										children: o
									}, o))]
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "mt-8 block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow text-concrete",
							children: "Message"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							required: true,
							name: "message",
							rows: 4,
							className: `${FIELD} resize-none`,
							placeholder: "Tell us about your project"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "submit",
						className: "navlink group mt-12 inline-flex items-center gap-3 bg-bronze px-8 py-4 text-ink transition-all duration-500 hover:bg-bone hover:shadow-[0_0_32px_rgba(184,154,106,0.3)]",
						children: [sent ? "Inquiry received" : "Send inquiry", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
							className: "size-4 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1",
							strokeWidth: 1.25
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						"aria-live": "polite",
						className: "eyebrow mt-6 h-4 text-bronze",
						children: sent ? "Thank you — we'll be in touch within one business day." : ""
					})
				]
			})]
		})
	});
}
function LocationMap() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		"aria-label": "Studio location",
		className: "group relative h-[70svh] w-full overflow-hidden bg-ink-soft",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
				title: "Map showing Advanterra Construction studio in Banashankari, Bengaluru",
				allowFullScreen: true,
				loading: "lazy",
				referrerPolicy: "strict-origin-when-cross-origin",
				src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5923124678698!2d77.53790537495524!3d12.933904087378057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3f004da9553d%3A0x5c9817286f2b6925!2sADVANTERRA%20CONSTRUCTION!5e0!3m2!1sen!2sin!4v1786428379725!5m2!1sen!2sin",
				className: "absolute inset-0 size-full grayscale-[1] invert-[0.92] contrast-[1.1] opacity-45 transition-[filter,opacity,transform] duration-[1500ms] ease-out group-hover:scale-[1.03] group-hover:grayscale-0 group-hover:invert-0 group-hover:contrast-125 group-hover:opacity-80"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-ink/50 transition-opacity duration-1000 group-hover:opacity-25" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-ink to-transparent" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink to-transparent" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-0 -m-8 animate-ping rounded-full border border-bronze/40" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
					className: "size-8 text-bronze transition-transform duration-700 group-hover:-translate-y-2 group-hover:scale-110",
					strokeWidth: 1
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "shell absolute inset-x-0 bottom-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-sm border-t border-line pt-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow text-bronze",
							children: "Studio"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-[15px] leading-[1.7] text-bone/80",
							children: CONTACT.address
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: CONTACT.mapsUrl,
							target: "_blank",
							rel: "noreferrer",
							className: "navlink group mt-6 inline-flex items-center gap-2 text-bone transition-colors duration-500 hover:text-bronze",
							children: ["Get directions", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
								className: "size-3.5 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5",
								strokeWidth: 1.25
							})]
						})
					]
				})
			})
		]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "bg-ink pb-10 pt-24 text-bone grain",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "shell",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 gap-14 border-t border-line pt-14 md:grid-cols-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: logo_final_default,
							alt: "Advanterra Construction",
							className: "h-9 w-auto"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-8 max-w-xs text-[15px] leading-[1.7] text-concrete",
							children: "An architecture and construction studio designing timeless spaces from Bengaluru."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						className: "md:col-span-3",
						"aria-label": "Footer",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow text-concrete",
							children: "Navigate"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-6 space-y-3",
							children: NAV.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: n.href,
								className: "navlink text-bone/70 transition-colors duration-500 hover:text-bronze",
								children: n.label
							}) }, n.label))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow text-concrete",
							children: "Social"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex items-center gap-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "https://instagram.com/advanterra",
								"aria-label": "Instagram",
								className: "text-bone/70 transition-colors duration-500 hover:text-bronze",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InstagramIcon, {
									className: "size-4",
									strokeWidth: 1.25
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "https://www.facebook.com/people/Advanterra-Construction/100070238443495/?rdid=i4Y1aw74AwvpWklj&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F188zUPvJ2d%2F",
								"aria-label": "Facebook",
								className: "text-bone/70 transition-colors duration-500 hover:text-bronze",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FacebookIcon, {
									className: "size-4",
									strokeWidth: 1.25
								})
							})]
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "eyebrow text-concrete",
					children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" Advanterra Construction"
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow text-concrete",
					children: "Bengaluru, India"
				})]
			})]
		})
	});
}
function Index() {
	const root = (0, import_react.useRef)(null);
	useSmoothScroll();
	useReveal(root);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: root,
		className: "bg-ink font-sans antialiased",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Approach, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Projects, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Services, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Testimonials, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Founders, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stats, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LocationMap, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { Index as component };
