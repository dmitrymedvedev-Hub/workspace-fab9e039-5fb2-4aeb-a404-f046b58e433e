"use client";

import { useState, useEffect, useRef, type FormEvent } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Phone,
  Mail,
  ChevronLeft,
  ChevronRight,
  Send,
  CheckCircle,
  TrendingUp,
  BarChart3,
  Target,
  Clock,
  Award,
  Briefcase,
  Star,
  Users,
} from "lucide-react";

/* ============================================================
   ANIMATION HELPERS
   ============================================================ */

/** Fades up when the element enters the viewport */
function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ============================================================
   NAVIGATION
   ============================================================ */

const NAV_ITEMS = [
  { label: "Why Me", href: "#why-me" },
  { label: "Strategy", href: "#strategy" },
  { label: "About", href: "#about" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-deep-purple/95 backdrop-blur-md shadow-lg shadow-black/20 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="text-gold font-bold text-xl tracking-wider">
          W<strong className="text-cream">AVERLY</strong>
        </a>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-cream/80 hover:text-gold text-sm font-medium tracking-wide transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-cream p-2"
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span
              className={`block w-6 h-0.5 bg-cream transition-all duration-300 ${
                mobileOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-cream transition-all duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-cream transition-all duration-300 ${
                mobileOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-deep-purple/98 backdrop-blur-md border-t border-gold/10 overflow-hidden"
          >
            <ul className="flex flex-col items-center gap-4 py-6">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-cream/80 hover:text-gold text-base font-medium tracking-wide transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

/* ============================================================
   HERO SECTION
   ============================================================ */

const STATS = [
  { value: "780+", label: "Hours of In-Depth Data Analysis", icon: BarChart3 },
  { value: "$2.3M", label: "Total Client Profit Growth Realized", icon: TrendingUp },
  { value: "150+", label: "Strategic Budget Forecasts Delivered", icon: Target },
  { value: "600+", label: "Hours of Financial Advisory & Strategy", icon: Clock },
];

function HeroSection() {
  return (
    <section
      id="why-me"
      className="relative min-h-screen bg-deep-purple flex items-stretch overflow-hidden"
    >
      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, rgba(201,168,76,0.4) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Left sidebar */}
      <div className="hidden lg:flex lg:w-80 xl:w-96 flex-col justify-between p-8 relative">
        <div className="space-y-6 mt-24">
          <p className="text-gold text-xs tracking-[0.3em] uppercase font-medium">
            Your Partner in
          </p>
          <div className="space-y-3">
            {["Strategic Advisory", "Risk Mitigation", "Data-Driven Insights", "Sustainable Growth"].map(
              (item) => (
                <p key={item} className="text-cream/50 text-sm tracking-wide">
                  {item}
                </p>
              )
            )}
          </div>
        </div>

        <div className="bg-maroon rounded-lg p-6 space-y-3">
          <p className="text-cream font-bold text-lg leading-snug">
            WHO AM I AND HOW CAN I BE OF HELP?
          </p>
          <p className="text-cream/60 text-sm">
            Strategy Consultant helping companies optimize operations and make
            data-driven decisions for sustainable growth.
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col justify-center p-6 lg:p-12 xl:p-16 relative z-10">
        {/* Contact info bar */}
        <div className="flex flex-wrap items-center gap-6 text-cream/40 text-sm mb-12 lg:mb-16">
          <span>London, UK</span>
          <span className="hidden sm:inline">|</span>
          <div className="flex items-center gap-2">
            <Phone size={14} />
            <span>+44 791 234 567</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={14} />
            <span>hugo@waverlyconsulting.co</span>
          </div>
        </div>

        {/* Headline */}
        <FadeUp>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-cream leading-[1.1] tracking-tight">
            DRIVE PROFIT.
            <br />
            <span className="text-gold">MITIGATE RISK.</span>
          </h1>
        </FadeUp>

        <FadeUp delay={0.2}>
          <div className="mt-8 flex items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-gold text-sm font-medium hover:gap-3 transition-all duration-300 group"
            >
              Free Consultation
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
          </div>
        </FadeUp>

        {/* Profile card + stats */}
        <div className="mt-16 grid grid-cols-1 xl:grid-cols-[auto_1fr] gap-10">
          {/* Profile card */}
          <FadeUp delay={0.3}>
            <div className="flex flex-col items-center xl:items-start text-center xl:text-left">
              <div className="w-32 h-32 rounded-2xl overflow-hidden border-2 border-gold/30 shadow-lg shadow-gold/10 mb-4">
                <img
                  src="/profile.png"
                  alt="Hugo Waverly"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-cream font-bold text-lg">HUGO WAVERLY</h3>
              <p className="text-gold text-sm font-medium mt-1">
                Strategy Consultant
              </p>
              <p className="text-cream/40 text-sm mt-2 max-w-xs leading-relaxed">
                Helping companies optimize operations, build forecasts, and make
                data-driven decisions for sustainable growth.
              </p>
            </div>
          </FadeUp>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-6 xl:gap-8">
            {STATS.map((stat, i) => (
              <FadeUp key={stat.label} delay={0.4 + i * 0.1}>
                <div className="group">
                  <div className="flex items-center gap-2 mb-2">
                    <stat.icon
                      size={18}
                      className="text-gold/60 group-hover:text-gold transition-colors"
                    />
                  </div>
                  <p className="text-3xl lg:text-4xl font-bold text-cream">
                    {stat.value}
                  </p>
                  <p className="text-cream/40 text-sm mt-1">{stat.label}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   STRATEGY SECTION – HOW I SOLVE YOUR CHALLENGES
   ============================================================ */

const STRATEGY_STEPS = [
  {
    num: "01",
    title: "Assessment & Insights",
    description:
      "Conduct a comprehensive review of your financial processes to identify issues, pinpoint inefficiencies, and uncover hidden growth opportunities.",
  },
  {
    num: "02",
    title: "Data Modeling & Analysis",
    description:
      "Develop tailored financial models and perform in-depth trend analyses, leveraging historical and real-time data to guide strategic decisions.",
  },
  {
    num: "03",
    title: "Objectives & Actions",
    description:
      "Craft action plans and roadmaps focused on high-impact initiatives, allocate resources for maximum ROI, and manage risks proactively.",
  },
];

function StrategySection() {
  return (
    <section id="strategy" className="bg-cream py-24 lg:py-32 relative">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <FadeUp>
          <span className="inline-block px-4 py-1.5 border border-dark-text/20 rounded-full text-dark-text text-sm font-medium mb-8">
            Strategy
          </span>
        </FadeUp>

        <FadeUp delay={0.1}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark-text leading-tight">
            HOW I SOLVE YOUR
            <br />
            <span className="text-maroon">CHALLENGES</span>
          </h2>
        </FadeUp>

        <div className="mt-16 space-y-0">
          {STRATEGY_STEPS.map((step, i) => (
            <FadeUp key={step.num} delay={0.2 + i * 0.15}>
              <div className="border-t border-dark-text/10 py-8 first:border-t-0 group">
                <div className="grid grid-cols-1 md:grid-cols-[60px_1fr] gap-4 md:gap-8">
                  <span className="text-dark-text/40 text-lg font-bold">
                    {step.num}
                  </span>
                  <div>
                    <h3 className="text-xl lg:text-2xl font-bold text-dark-text mb-3 group-hover:text-maroon transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-muted-text leading-relaxed max-w-2xl">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   ABOUT SECTION
   ============================================================ */

const KEY_SKILLS = [
  "Financial modeling",
  "Budgeting & variance analysis",
  "BI dashboards (Power BI, Tableau)",
  "Reporting automation (Python, SQL)",
];

function AboutSection() {
  return (
    <section id="about" className="bg-maroon relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-10 right-10 w-64 h-64 rounded-full border border-cream/5" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full border border-cream/5" />

      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-24 lg:py-32 relative z-10">
        <FadeUp>
          <span className="inline-block px-4 py-1.5 border border-cream/30 rounded-full text-cream text-sm font-medium mb-8">
            About Me
          </span>
        </FadeUp>

        <FadeUp delay={0.1}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-cream leading-tight mb-16">
            WHO AM I AND
            <br />
            <span className="text-gold">HOW CAN I HELP?</span>
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 lg:gap-16">
          {/* Profile */}
          <FadeUp delay={0.2}>
            <div className="flex flex-col items-center lg:items-start">
              <div className="w-56 h-56 lg:w-64 lg:h-64 rounded-2xl overflow-hidden border-2 border-gold/30 shadow-2xl shadow-black/40 mb-6">
                <img
                  src="/profile.png"
                  alt="Hugo Waverly"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-1 text-cream/70 text-sm">
                <p className="flex items-center gap-2">
                  <Phone size={14} className="text-gold/60" />
                  <span className="text-cream/50">Phone:</span>{" "}
                  <span className="text-cream">+44 7911 234567</span>
                </p>
                <p className="flex items-center gap-2">
                  <Mail size={14} className="text-gold/60" />
                  <span className="text-cream/50">Email:</span>{" "}
                  <span className="text-cream">h.waverly@consulting.co</span>
                </p>
              </div>
            </div>
          </FadeUp>

          {/* Bio + skills */}
          <div>
            <FadeUp delay={0.3}>
              <p className="text-cream/80 text-lg leading-relaxed mb-10">
                I&apos;m Hugo Waverly, financial analyst in retail &amp; FMCG,
                boosting profits and optimizing capital for 50+ companies. With
                over 780 hours of hands-on data analysis, I bring clarity to
                complex financial landscapes and deliver measurable results.
              </p>
            </FadeUp>

            <FadeUp delay={0.4}>
              <h4 className="text-gold text-sm font-bold tracking-[0.2em] uppercase mb-4">
                Key Skills
              </h4>
              <ul className="space-y-3">
                {KEY_SKILLS.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-3 text-cream/80 text-sm"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                    {skill}
                  </li>
                ))}
              </ul>
            </FadeUp>

            {/* Quick stats on dark bg */}
            <FadeUp delay={0.5}>
              <div className="mt-12 grid grid-cols-3 gap-6">
                {[
                  { value: "50+", label: "Companies Served" },
                  { value: "12+", label: "Years Experience" },
                  { value: "98%", label: "Client Retention" },
                ].map((s) => (
                  <div key={s.label} className="text-center lg:text-left">
                    <p className="text-3xl font-bold text-gold">{s.value}</p>
                    <p className="text-cream/50 text-sm mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   SUCCESS STORIES / CASE STUDIES
   ============================================================ */

const CASE_STUDIES = [
  {
    company: "RetailCo Global",
    industry: "Retail & FMCG",
    metric: "$800K",
    metricLabel: "Annual profit increase",
    description:
      "Transformed supply chain financing and working capital management, resulting in significant profit growth within 12 months.",
    tags: ["Financial Modeling", "Supply Chain", "ROI Optimization"],
  },
  {
    company: "FinServ Partners",
    industry: "Financial Services",
    metric: "35%",
    metricLabel: "Cost reduction achieved",
    description:
      "Restructured budget allocation and automated reporting processes, cutting operational costs by over a third while maintaining service quality.",
    tags: ["Budget Analysis", "Automation", "Cost Reduction"],
  },
  {
    company: "GreenTech Innovations",
    industry: "Technology & Green Energy",
    metric: "$1.2M",
    metricLabel: "New revenue streams",
    description:
      "Developed data-driven market entry strategy and pricing models that unlocked three new revenue channels in emerging markets.",
    tags: ["Market Strategy", "Data Analytics", "Growth"],
  },
];

function CaseStudiesSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="case-studies" className="bg-deep-purple py-24 lg:py-32 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gold/3 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-maroon/10 blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10">
        <FadeUp>
          <span className="inline-block px-4 py-1.5 border border-cream/20 rounded-full text-cream/80 text-sm font-medium mb-8">
            Case Studies
          </span>
        </FadeUp>

        <FadeUp delay={0.1}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-cream leading-tight">
            SUCCESS <span className="text-gold">STORIES</span>
          </h2>
        </FadeUp>

        <FadeUp delay={0.15}>
          <p className="text-cream/50 mt-4 max-w-xl text-lg">
            Real results from real partnerships. Here&apos;s how I&apos;ve helped businesses
            unlock their potential.
          </p>
        </FadeUp>

        {/* Carousel controls */}
        <div className="mt-12 flex gap-3">
          {CASE_STUDIES.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                i === activeIndex
                  ? "bg-gold text-deep-purple"
                  : "border border-cream/20 text-cream/50 hover:border-gold/40 hover:text-cream/80"
              }`}
            >
              {CASE_STUDIES[i].company.split(" ")[0]}
            </button>
          ))}
        </div>

        {/* Active case study card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="mt-8 bg-cream/[0.03] border border-cream/10 rounded-2xl p-8 lg:p-10"
          >
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8">
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <h3 className="text-cream font-bold text-xl">
                    {CASE_STUDIES[activeIndex].company}
                  </h3>
                  <span className="px-3 py-0.5 bg-gold/10 text-gold text-xs rounded-full font-medium">
                    {CASE_STUDIES[activeIndex].industry}
                  </span>
                </div>
                <p className="text-cream/60 leading-relaxed text-base">
                  {CASE_STUDIES[activeIndex].description}
                </p>
                <div className="flex flex-wrap gap-2 mt-6">
                  {CASE_STUDIES[activeIndex].tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-deep-purple border border-cream/10 text-cream/50 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col items-center justify-center bg-maroon/40 rounded-xl p-8 min-w-[180px]">
                <p className="text-4xl lg:text-5xl font-bold text-gold">
                  {CASE_STUDIES[activeIndex].metric}
                </p>
                <p className="text-cream/60 text-sm mt-2 text-center">
                  {CASE_STUDIES[activeIndex].metricLabel}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Nav arrows */}
        <div className="mt-8 flex gap-3">
          <button
            onClick={() =>
              setActiveIndex(
                (prev) => (prev - 1 + CASE_STUDIES.length) % CASE_STUDIES.length
              )
            }
            className="w-12 h-12 rounded-full bg-cream text-deep-purple flex items-center justify-center hover:bg-gold transition-colors duration-300"
            aria-label="Previous case study"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() =>
              setActiveIndex((prev) => (prev + 1) % CASE_STUDIES.length)
            }
            className="w-12 h-12 rounded-full bg-cream text-deep-purple flex items-center justify-center hover:bg-gold transition-colors duration-300"
            aria-label="Next case study"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   TESTIMONIALS
   ============================================================ */

const TESTIMONIALS = [
  {
    name: "Sarah Mitchell",
    role: "CFO, RetailCo Global",
    text: "Hugo's analytical approach transformed our financial strategy. Within six months, we saw a measurable improvement in our profit margins. His ability to translate complex data into actionable insights is unmatched.",
    rating: 5,
  },
  {
    name: "David Chen",
    role: "CEO, FinServ Partners",
    text: "Working with Hugo was a game-changer. His data-driven recommendations helped us reduce costs by 35% while improving our service delivery. I highly recommend him for any organization seeking financial clarity.",
    rating: 5,
  },
  {
    name: "Amara Okafor",
    role: "VP Strategy, GreenTech Innovations",
    text: "Hugo doesn't just provide analysis – he delivers a roadmap for growth. His strategic guidance opened up $1.2M in new revenue streams for us. Exceptional professionalism and deep expertise.",
    rating: 5,
  },
];

function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-cream py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <FadeUp>
          <span className="inline-block px-4 py-1.5 border border-dark-text/20 rounded-full text-dark-text text-sm font-medium mb-8">
            Testimonials
          </span>
        </FadeUp>

        <FadeUp delay={0.1}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark-text leading-tight">
            WHAT MY <span className="text-maroon">CLIENTS SAY</span>
          </h2>
        </FadeUp>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <FadeUp key={t.name} delay={0.2 + i * 0.15}>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-dark-text/5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star
                      key={j}
                      size={16}
                      className="fill-gold text-gold"
                    />
                  ))}
                </div>

                <p className="text-muted-text leading-relaxed flex-1 text-sm">
                  &ldquo;{t.text}&rdquo;
                </p>

                <div className="mt-6 pt-6 border-t border-dark-text/5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-maroon flex items-center justify-center text-cream font-bold text-sm">
                      {t.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <p className="font-semibold text-dark-text text-sm">
                        {t.name}
                      </p>
                      <p className="text-muted-text text-xs">{t.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   CERTIFICATES SECTION
   ============================================================ */

const CERTIFICATES = [
  {
    title: "ACCA Member",
    provider: "Association of Chartered Certified Accountants",
    year: "2020",
    description: "Chartered Certified Accountant designation",
  },
  {
    title: "CIMA Qualification",
    provider: "PwC Academy",
    year: "2022",
    description: "Global Professional Qualification in Management Accounting",
  },
  {
    title: "CPA License",
    provider: "American Institute of CPAs",
    year: "2021",
    description: "Certified Public Accountant license",
  },
];

function CertificatesSection() {
  const [activeCert, setActiveCert] = useState(0);

  return (
    <section className="bg-deep-purple py-24 lg:py-32 relative">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text side */}
          <div>
            <FadeUp>
              <span className="inline-block px-4 py-1.5 border border-cream/20 rounded-full text-cream/80 text-sm font-medium mb-8">
                Certificates
              </span>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-cream leading-tight">
                TRUSTED CREDENTIALS
                <br />
                <span className="text-gold">& ALLIANCES</span>
              </h2>
            </FadeUp>

            <FadeUp delay={0.15}>
              <p className="text-cream/50 mt-4 max-w-md text-base leading-relaxed">
                Global certifications and strategic partnerships that validate
                our expertise and ensure quality service.
              </p>
            </FadeUp>

            <FadeUp delay={0.2}>
              <p className="mt-6 text-gold/70 italic text-lg">
                Proof in black <span className="text-cream font-medium not-italic">&</span> white
              </p>
            </FadeUp>

            {/* Navigation buttons */}
            <FadeUp delay={0.3}>
              <div className="mt-8 flex gap-3">
                <button
                  onClick={() =>
                    setActiveCert(
                      (prev) =>
                        (prev - 1 + CERTIFICATES.length) %
                        CERTIFICATES.length
                    )
                  }
                  className="w-12 h-12 rounded-full bg-cream text-deep-purple flex items-center justify-center hover:bg-gold transition-colors duration-300"
                  aria-label="Previous certificate"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={() =>
                    setActiveCert((prev) => (prev + 1) % CERTIFICATES.length)
                  }
                  className="w-12 h-12 rounded-full bg-cream text-deep-purple flex items-center justify-center hover:bg-gold transition-colors duration-300"
                  aria-label="Next certificate"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </FadeUp>
          </div>

          {/* Certificate card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCert}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="bg-cream rounded-2xl p-10 relative overflow-hidden"
            >
              {/* Decorative border */}
              <div className="absolute inset-4 border-2 border-dark-text/5 rounded-xl" />

              <div className="relative z-10 text-center">
                <Award
                  size={48}
                  className="mx-auto text-maroon mb-6"
                />
                <p className="text-dark-text/50 text-xs tracking-[0.2em] uppercase font-medium mb-2">
                  Certificate of Achievement
                </p>
                <h3 className="text-2xl lg:text-3xl font-bold text-dark-text mb-2">
                  {CERTIFICATES[activeCert].title}
                </h3>
                <p className="text-maroon font-medium text-sm mb-1">
                  {CERTIFICATES[activeCert].provider}
                </p>
                <p className="text-muted-text text-sm mb-6">
                  {CERTIFICATES[activeCert].description}
                </p>

                {/* Dotted line separator */}
                <div className="border-t border-dashed border-dark-text/10 my-6" />

                <div className="flex justify-between items-end px-4">
                  <div className="text-left">
                    <p className="text-dark-text/40 text-xs uppercase tracking-wider">
                      Issued
                    </p>
                    <p className="text-dark-text font-semibold">
                      {CERTIFICATES[activeCert].year}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="w-16 h-16 rounded-full border-2 border-maroon/30 flex items-center justify-center">
                      <span className="text-maroon font-bold text-xs">
                        VERIFIED
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Cert dots */}
          <div className="lg:col-span-2 flex justify-center gap-2 mt-6">
            {CERTIFICATES.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveCert(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === activeCert ? "bg-gold w-8" : "bg-cream/20"
                }`}
                aria-label={`Certificate ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   CONTACT SECTION
   ============================================================ */

type FormState = "idle" | "submitting" | "success" | "error";

function ContactSection() {
  const [formState, setFormState] = useState<FormState>("idle");
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setFormState("submitting");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      company: (formData.get("company") as string) || undefined,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (json.success) {
        setFormState("success");
        formRef.current?.reset();
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  }

  return (
    <section id="contact" className="bg-maroon relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full border border-cream/5" />

      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-24 lg:py-32 relative z-10">
        <FadeUp>
          <span className="inline-block px-4 py-1.5 border border-cream/30 rounded-full text-cream text-sm font-medium mb-8">
            Contact me
          </span>
        </FadeUp>

        <FadeUp delay={0.1}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-cream leading-tight">
            SCHEDULE A
            <br />
            <span className="text-gold">CONSULTATION</span>
          </h2>
        </FadeUp>

        <FadeUp delay={0.15}>
          <p className="text-cream/60 mt-4 max-w-xl text-base leading-relaxed">
            I&apos;m here to help you unlock financial clarity and drive growth.
            Reach out today to discuss your challenges and explore tailored
            solutions.
          </p>
        </FadeUp>

        {/* Form */}
        <FadeUp delay={0.2}>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 max-w-2xl space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-cream/50 text-sm mb-2 font-medium"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  placeholder="Your full name"
                  className="w-full bg-cream/5 border border-cream/10 rounded-lg px-4 py-3 text-cream placeholder:text-cream/25 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-all duration-300 text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="company"
                  className="block text-cream/50 text-sm mb-2 font-medium"
                >
                  Company Name
                </label>
                <input
                  id="company"
                  name="company"
                  placeholder="Your company"
                  className="w-full bg-cream/5 border border-cream/10 rounded-lg px-4 py-3 text-cream placeholder:text-cream/25 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-all duration-300 text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-cream/50 text-sm mb-2 font-medium"
              >
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="example@gmail.com"
                className="w-full bg-cream/5 border border-cream/10 rounded-lg px-4 py-3 text-cream placeholder:text-cream/25 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-all duration-300 text-sm"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-cream/50 text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Type your message here..."
                className="w-full bg-cream/5 border border-cream/10 rounded-lg px-4 py-3 text-cream placeholder:text-cream/25 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-all duration-300 resize-none text-sm"
              />
            </div>

            <div className="flex items-center gap-4">
              <button
                type="submit"
                disabled={formState === "submitting"}
                className="inline-flex items-center gap-3 bg-gold text-deep-purple font-semibold px-8 py-3.5 rounded-lg hover:bg-gold/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 group text-sm"
              >
                {formState === "submitting" ? (
                  <>
                    <span className="w-4 h-4 border-2 border-deep-purple/30 border-t-deep-purple rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Schedule a Free Consultation
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </>
                )}
              </button>

              {formState === "success" && (
                <motion.p
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex items-center gap-2 text-green-400 text-sm font-medium"
                >
                  <CheckCircle size={16} />
                  Message sent successfully!
                </motion.p>
              )}

              {formState === "error" && (
                <motion.p
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-red-400 text-sm font-medium"
                >
                  Something went wrong. Please try again.
                </motion.p>
              )}
            </div>
          </form>
        </FadeUp>
      </div>
    </section>
  );
}

/* ============================================================
   FOOTER
   ============================================================ */

function Footer() {
  return (
    <footer className="bg-deep-purple border-t border-cream/5">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <p className="text-gold font-bold text-xl tracking-wider mb-3">
              W<strong className="text-cream">AVERLY</strong>
            </p>
            <p className="text-cream/40 text-sm leading-relaxed max-w-xs">
              Strategy consulting that drives profit, mitigates risk, and
              delivers sustainable growth through data-driven insights.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-cream font-semibold text-sm tracking-wide mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-cream/40 text-sm hover:text-gold transition-colors duration-300"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-cream font-semibold text-sm tracking-wide mb-4">
              Get in Touch
            </h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-cream/40 text-sm">
                <Phone size={16} className="text-gold/60" />
                <span>+44 791 234 567</span>
              </div>
              <div className="flex items-center gap-3 text-cream/40 text-sm">
                <Mail size={16} className="text-gold/60" />
                <span>hugo@waverlyconsulting.co</span>
              </div>
              <div className="flex items-center gap-3 text-cream/40 text-sm">
                <Briefcase size={16} className="text-gold/60" />
                <span>London, United Kingdom</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-cream/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-cream/25 text-xs">
            &copy; {new Date().getFullYear()} Waverly Consulting. All rights
            reserved.
          </p>
          <div className="flex items-center gap-1 text-cream/25 text-xs">
            <span>Built with</span>
            <span className="text-gold">&#9829;</span>
            <span>by Hugo Waverly</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ============================================================
   MAIN PAGE
   ============================================================ */

export default function ConsultingPortfolio() {
  return (
    <div className="min-h-screen bg-deep-purple">
      <Navigation />
      <main>
        <HeroSection />
        <StrategySection />
        <AboutSection />
        <CaseStudiesSection />
        <TestimonialsSection />
        <CertificatesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
