"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Reveal from "./components/Reveal";
import LiveBackground from "./components/LiveBackground";
import SectionMotion from "./components/SectionMotion";
import HeroMotion from "./components/HeroMotion";
import nexoraIcon from "./icon.png";
import nexoraWordmark from "./wordmark.png";

const services = [
  {
    number: "01",
    title: "Web Development",
    text: "Modern websites built for speed, performance, and growth.",
    link: "/web-development",
  },
  {
    number: "02",
    title: "Mobile Apps",
    text: "Scalable mobile applications designed around your users.",
    link: "/mobile-apps",
  },
  {
    number: "03",
    title: "Custom Software",
    text: "Digital systems tailored to the way your business works.",
    link: "/custom-software",
  },
  {
    number: "04",
    title: "AI & Automation",
    text: "Smarter workflows that help businesses work faster.",
    link: "/ai-automation",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightMode, setLightMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("nexora-theme");

    if (savedTheme === "light") {
      setLightMode(true);
      document.documentElement.classList.add("light");
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("light", lightMode);

    localStorage.setItem("nexora-theme", lightMode ? "light" : "dark");
  }, [lightMode]);
  return (
    <>
      <SectionMotion />
    <HeroMotion />

      <main className="relative isolate min-h-screen overflow-hidden bg-[#020711] text-white">
        {/* NEXORA INTRO */}
        <div className="nexora-intro pointer-events-none fixed inset-0 z-[9999] flex items-center justify-center bg-[#020617]">
          <div className="nexora-intro-logo flex flex-col items-center">
            <div className="relative">
              <div className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/20 blur-3xl" />

              <Image
                src={nexoraIcon}
                alt="Nexora"
                width={82}
                height={82}
                className="relative h-16 w-16 object-contain sm:h-20 sm:w-20"
                priority
              />
            </div>

            <Image
              src={nexoraWordmark}
              alt="Nexora"
              width={220}
              height={50}
              className="mt-5 h-auto w-[165px] object-contain sm:w-[210px]"
              priority
            />

            <p className="mt-3 text-[9px] uppercase tracking-[0.4em] text-gray-500 sm:text-[10px]">
              Build / Develop / Innovate
            </p>

            <div className="mt-8 h-px w-40 overflow-hidden bg-white/10">
              <div className="nexora-loading-line h-full w-full bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400" />
            </div>
          </div>
        </div>

        {/* NEXORA LIVE SITE BACKGROUND */}
        <div
          className="nexora-live-bg pointer-events-none fixed inset-0 -z-10 overflow-hidden"
          aria-hidden="true"
        >
          {/* BASE GRID */}
          <div
            className="absolute inset-0 opacity-[0.13]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(59,130,246,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.12) 1px, transparent 1px)",
              backgroundSize: "72px 72px",
            }}
          />

          {/* LIVE FLOWING RIBBONS */}
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 1600 1000"
            fill="none"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <linearGradient id="siteRibbonA" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#2563eb" stopOpacity="0" />
                <stop offset="35%" stopColor="#2563eb" stopOpacity="0.75" />
                <stop offset="60%" stopColor="#22d3ee" stopOpacity="1" />
                <stop offset="100%" stopColor="#4f46e5" stopOpacity="0" />
              </linearGradient>

              <linearGradient id="siteRibbonB" x1="1" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#22d3ee" stopOpacity="0" />
                <stop offset="45%" stopColor="#0ea5e9" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#2563eb" stopOpacity="0" />
              </linearGradient>

              <filter id="siteGlow">
                <feGaussianBlur stdDeviation="22" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <path
              className="nexora-site-ribbon-a"
              d="M-220 760 C120 480 360 430 650 590 C930 740 1200 650 1810 220"
              stroke="url(#siteRibbonA)"
              strokeWidth="34"
              strokeLinecap="round"
              filter="url(#siteGlow)"
            />

            <path
              className="nexora-site-ribbon-b"
              d="M1080 -160 C1180 100 1050 300 980 470 C900 660 1020 790 1760 920"
              stroke="url(#siteRibbonB)"
              strokeWidth="25"
              strokeLinecap="round"
              filter="url(#siteGlow)"
            />

            <path
              className="nexora-site-ribbon-c"
              d="M1450 -150 C1270 120 1220 330 1320 500 C1420 670 1610 630 1780 520"
              stroke="#22d3ee"
              strokeOpacity="0.45"
              strokeWidth="12"
              strokeLinecap="round"
              filter="url(#siteGlow)"
            />
          </svg>

          {/* MOVING LIGHT MASSES */}
          <div className="nexora-site-glow-a absolute -left-[180px] top-[5%] h-[650px] w-[650px] rounded-full bg-blue-600/30 blur-[170px]" />

          <div className="nexora-site-glow-b absolute right-[-220px] top-[28%] h-[700px] w-[700px] rounded-full bg-cyan-400/20 blur-[180px]" />

          <div className="nexora-site-glow-c absolute bottom-[-250px] left-[25%] h-[760px] w-[760px] rounded-full bg-indigo-600/25 blur-[190px]" />

          {/* DARK DEPTH */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,7,17,0.18)_55%,rgba(2,7,17,0.72)_100%)]" />
        </div>

        {/* NAVBAR */}
        <nav className="sticky top-0 z-50 border-b border-white/5 bg-[#020617]/70 backdrop-blur-2xl">
          <div className="mx-auto max-w-7xl px-6 py-4">
            <div className="flex items-center justify-between">
              {/* LOGO */}
              <a
                href="#home"
                className="group flex items-center gap-2 sm:gap-3"
              >
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-cyan-400/10 blur-xl transition-all duration-300 group-hover:bg-cyan-400/20" />

                  <Image
                    src={nexoraIcon}
                    alt="Nexora icon"
                    width={46}
                    height={46}
                    className="relative h-10 w-10 shrink-0 object-contain sm:h-12 sm:w-12"
                    priority
                  />
                </div>

                <div className="flex flex-col justify-center">
                  <Image
                    src={nexoraWordmark}
                    alt="Nexora"
                    width={200}
                    height={45}
                    className="h-auto w-[115px] object-contain sm:w-[165px]"
                    priority
                  />

                  <p className="mt-1 hidden text-[8px] uppercase tracking-[0.27em] text-gray-500 sm:block">
                    Build / Develop / Innovate
                  </p>
                </div>
              </a>

              {/* DESKTOP NAV */}
              <div className="hidden items-center gap-8 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm text-gray-400 backdrop-blur-xl md:flex">
                <a
                  href="#home"
                  className="transition-all duration-300 hover:text-cyan-300"
                >
                  Home
                </a>

                <a
                  href="#services"
                  className="transition-all duration-300 hover:text-cyan-300"
                >
                  Services
                </a>

                <a
                  href="#projects"
                  className="transition-all duration-300 hover:text-cyan-300"
                >
                  Projects
                </a>

                <a
                  href="#about"
                  className="transition-all duration-300 hover:text-cyan-300"
                >
                  About
                </a>

                <a
                  href="#contact"
                  className="transition-all duration-300 hover:text-cyan-300"
                >
                  Contact
                </a>
              </div>

              {/* RIGHT SIDE */}
              <div className="flex items-center gap-2">
                {/* DESKTOP CTA */}
                <a
                  href="#contact"
                  className="hidden rounded-full border border-cyan-300/30 bg-cyan-300/[0.06] px-5 py-2.5 text-sm text-cyan-100 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/50 hover:bg-cyan-300/10 md:block"
                >
                  Start a Project
                </a>

                {/* THEME TOGGLE */}
                <button
                  type="button"
                  aria-label="Decorative theme control"
                  className="group relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-cyan-300/20 bg-white/[0.03] text-cyan-200 shadow-[0_0_22px_rgba(34,211,238,0.08)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:shadow-[0_0_28px_rgba(34,211,238,0.16)]"
                >
                  <span className="absolute inset-1 rounded-full bg-gradient-to-br from-cyan-400/10 via-blue-500/10 to-violet-500/10 blur-sm" />

                  <span className="relative text-[15px] transition-transform duration-300 group-hover:rotate-12">
                    ◐
                  </span>
                </button>

                {/* MOBILE MENU BUTTON */}
                <button
                  type="button"
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-lg text-white transition-all duration-300 hover:border-cyan-300/30 md:hidden"
                  aria-label="Toggle menu"
                >
                  {menuOpen ? "×" : "☰"}
                </button>
              </div>
            </div>

            {/* MOBILE MENU */}
            {menuOpen && (
              <div className="mt-4 overflow-hidden rounded-3xl border border-white/10 bg-[#07111f]/95 p-5 shadow-2xl shadow-blue-950/30 backdrop-blur-2xl md:hidden">
                <div className="flex flex-col gap-2">
                  {[
                    ["Home", "#home"],
                    ["Services", "#services"],
                    ["Projects", "#projects"],
                    ["About", "#about"],
                    ["Contact", "#contact"],
                  ].map(([label, href]) => (
                    <a
                      key={label}
                      href={href}
                      onClick={() => setMenuOpen(false)}
                      className="rounded-2xl px-4 py-3 text-sm text-gray-300 transition-all duration-300 hover:bg-white/[0.05] hover:text-cyan-200"
                    >
                      {label}
                    </a>
                  ))}

                  <a
                    href="#contact"
                    onClick={() => setMenuOpen(false)}
                    className="mt-3 rounded-full bg-white px-5 py-3.5 text-center text-sm font-medium text-black transition-all duration-300 hover:bg-cyan-50"
                  >
                    Start a Project →
                  </a>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* HERO */}
        <section
          id="home"
          className="relative min-h-[92vh] overflow-hidden bg-black px-6 pb-20 pt-10 sm:pb-28 sm:pt-6"
        >
          <div className="relative z-10 mx-auto max-w-7xl">
            <div className="grid min-h-[70vh] items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">
              {/* LEFT */}
              <div>
                <div className="mb-8 flex items-center gap-4">
                  <span className="h-px w-10 bg-cyan-300" />

                  <p className="text-xs uppercase tracking-[0.32em] text-cyan-300/70">
                    Nexora Digital Solutions
                  </p>
                </div>

                <h1 className="max-w-3xl text-5xl font-medium leading-[0.98] tracking-[-0.05em] sm:text-6xl md:text-7xl lg:text-[68px] xl:text-[74px]">
                  <span className="block text-white">Build the kind of</span>

                  <span className="block bg-gradient-to-b from-cyan-300 via-sky-400 to-blue-500 bg-clip-text font-semibold text-transparent opacity-90">
                    digital presence
                  </span>

                  <span className="block bg-gradient-to-r from-blue-400 via-blue-495 to-indigo-500 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(59,130,246,0.18)]">
                    people remember.
                  </span>
                </h1>

                <p className="mt-8 max-w-xl text-base leading-8 text-gray-400 sm:text-lg">
                  Nexora designs and engineers websites, mobile products, custom
                  software and intelligent systems built to perform in the real
                  world.
                </p>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <a
                    href="#contact"
                    className="group inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-medium text-black transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_50px_rgba(34,211,238,0.22)]"
                  >
                    Start a Project
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </a>

                  <a
                    href="#projects"
                    className="group inline-flex items-center justify-center gap-3 rounded-full border border-white/15 bg-black/20 px-7 py-4 text-sm text-white backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/[0.06]"
                  >
                    See Our Work
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      ↗
                    </span>
                  </a>
                </div>
              </div>

              {/* RIGHT VISUAL */}
              <div className="relative hidden min-h-[560px] lg:block">
                <div className="absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[130px]" />
                {/* BACK GLASS */}
                <div className="nexora-panel-back absolute left-[15%] top-[20%] h-[390px] w-[65%] rounded-[32px] border border-blue-400/15 bg-black/55 backdrop-blur-xl" />
                <div className="nexora-panel-mid absolute left-[20%] top-[25%] h-[390px] w-[65%] rounded-[32px] border border-cyan-300/15 bg-black/60 backdrop-blur-xl" />
                {/* MAIN PANEL */}
                <div className="nexora-main-panel absolute left-[24%] top-[18%] h-[410px] w-[66%] overflow-hidden rounded-[34px] border border-blue-400/20 bg-black/80 shadow-[0_32px_90px_rgba(0,0,0,0.55)] backdrop-blur-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.04] via-transparent to-cyan-300/[0.02]" />
                  <div className="relative flex h-full flex-col items-center justify-center">
                    <div className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/15 blur-[70px]" />

                    <Image
                      src={nexoraIcon}
                      alt="Nexora"
                      width={92}
                      height={92}
                      className="relative h-20 w-20 object-contain"
                    />

                    <Image
                      src={nexoraWordmark}
                      alt="Nexora"
                      width={250}
                      height={60}
                      className="relative mt-5 h-auto w-[210px] object-contain"
                    />

                    <p className="relative mt-4 text-[9px] uppercase tracking-[0.42em] text-gray-500">
                      Build · Develop · Innovate
                    </p>
                  </div>
                </div>

                {/* FLOATING CARD 1 */}
                <div className="nexora-float-a absolute left-[2%] top-[18%] rounded-2xl border border-blue-300/15 bg-black/70 px-5 py-4 shadow-2xl backdrop-blur-2xl">
                  <p className="text-sm font-medium text-white">Websites</p>
                  <p className="mt-1 text-xs text-gray-500">Built to perform</p>
                </div>

                {/* FLOATING CARD 2 */}
                <div className="nexora-float-b absolute right-[-2%] top-[38%] rounded-2xl border border-cyan-300/15 bg-black/70 px-5 py-4 shadow-2xl backdrop-blur-2xl">
                  <p className="text-sm font-medium text-white">Mobile Apps</p>
                  <p className="mt-1 text-xs text-gray-500">
                    Designed around users
                  </p>
                </div>

                {/* FLOATING CARD 3 */}
                <div className="nexora-float-c absolute bottom-[10%] left-[5%] rounded-2xl border border-indigo-300/15 bg-black/70 px-5 py-4 shadow-2xl backdrop-blur-2xl">
                  <p className="text-sm font-medium text-white">
                    Custom Software
                  </p>
                  <p className="mt-1 text-xs text-gray-500">
                    Built around your business
                  </p>
                </div>
              </div>
            </div>

            {/* BOTTOM CAPABILITIES */}
            <div className="mt-8 grid gap-4 border-t border-white/10 pt-7 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["Strategy", "Clear direction"],
                ["Design", "Useful and refined"],
                ["Engineering", "Built to scale"],
                ["Automation", "Work smarter"],
              ].map(([title, text]) => (
                <div key={title} className="flex items-start gap-4">
                  <span className="mt-1 h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.8)]" />

                  <div>
                    <p className="text-sm text-white">{title}</p>
                    <p className="mt-1 text-xs text-gray-600">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <Reveal direction="up">
          <section
            id="services"
            className="relative border-t border-white/5 bg-black py-24 sm:py-32"
          >
            {/* SECTION GLOW */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <div className="absolute left-[-180px] top-24 h-[420px] w-[420px] rounded-full bg-blue-600/[0.04] blur-[160px]" />

              <div className="absolute right-[-180px] bottom-10 h-[420px] w-[420px] rounded-full bg-cyan-400/[0.03] blur-[170px]" />
            </div>

            <div className="relative mx-auto max-w-7xl px-6">
              {/* HEADER */}
              <div className="mb-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end sm:mb-16">
                <div>
                  <div className="mb-5 flex items-center gap-3">
                    <span className="h-px w-8 bg-cyan-300/50" />
                    <p className="text-xs uppercase tracking-[0.32em] text-cyan-300/70">
                      What we build
                    </p>
                  </div>

                  <h2 className="max-w-2xl text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
                    Digital products built
                    <span className="block text-gray-500">
                      with clarity and purpose.
                    </span>
                  </h2>
                </div>

                <p className="max-w-xl text-base leading-7 text-gray-400 lg:justify-self-end">
                  From first idea to final launch, we build fast, scalable
                  digital products that are designed around real business needs.
                </p>
              </div>

              {/* SERVICES GRID */}
              <div className="grid gap-4 sm:grid-cols-2">
                {services.map((service) => (
                  <Link
                    key={service.number}
                    href={service.link}
                    className="group relative min-h-[320px] overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.035] p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-300/25 hover:bg-white/[0.055] sm:p-8"
                  >
                    {/* CARD GLOW */}
                    <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-blue-500/0 blur-[80px] transition-all duration-700 group-hover:bg-blue-500/15" />

                    {/* TOP */}
                    <div className="relative flex items-center justify-between">
                      <span className="text-xs uppercase tracking-[0.25em] text-cyan-300/60">
                        {service.number}
                      </span>

                      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-gray-400 transition-all duration-500 group-hover:translate-x-1 group-hover:border-cyan-300/30 group-hover:text-cyan-200">
                        ↗
                      </span>
                    </div>

                    {/* CONTENT */}
                    <div className="relative mt-20">
                      <h3 className="text-2xl font-medium tracking-tight text-white sm:text-3xl">
                        {service.title}
                      </h3>

                      <p className="mt-4 max-w-md leading-7 text-gray-500 transition-colors duration-500 group-hover:text-gray-400">
                        {service.text}
                      </p>
                    </div>

                    {/* ACCENT LINE */}
                    <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400 transition-all duration-700 group-hover:w-full" />
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </Reveal>

        {/* PROJECTS */}
        <Reveal direction="up">
          <section
            id="projects"
            className="relative border-t border-white/5 py-24 sm:py-32"
          >
            {/* BACKGROUND GLOWS */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <div className="absolute -left-52 top-24 h-[460px] w-[460px] rounded-full bg-indigo-500/10 blur-[150px]" />
              <div className="absolute -right-52 bottom-10 h-[460px] w-[460px] rounded-full bg-cyan-400/10 blur-[150px]" />
            </div>

            <div className="relative mx-auto max-w-7xl px-6">
              {/* HEADER */}
              <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
                <div>
                  <div className="mb-5 flex items-center gap-3">
                    <span className="h-px w-8 bg-cyan-300/50" />

                    <p className="text-xs uppercase tracking-[0.32em] text-cyan-300/70">
                      Selected work
                    </p>
                  </div>

                  <h2 className="max-w-3xl text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
                    Ideas turned into
                    <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent">
                      real digital experiences.
                    </span>
                  </h2>
                </div>

                <p className="max-w-md text-sm leading-7 text-gray-400 sm:text-base">
                  A growing collection of websites, systems and digital products
                  designed and developed by Nexora.
                </p>
              </div>

              {/* PROJECT GRID */}
              <div className="mt-14 grid gap-6 lg:grid-cols-2">
                {/* PROJECT 1 */}
                <div className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.035] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-300/20 hover:shadow-[0_30px_90px_rgba(8,145,178,0.08)]">
                  {/* VISUAL */}
                  <div className="relative h-[320px] overflow-hidden bg-[#020617] sm:h-[380px]">
                    <div className="absolute left-[-80px] top-[-60px] h-72 w-72 rounded-full bg-blue-600/20 blur-[110px]" />
                    <div className="absolute bottom-[-80px] right-[-60px] h-72 w-72 rounded-full bg-cyan-400/15 blur-[120px]" />

                    {/* GRID */}
                    <div
                      className="absolute inset-0 opacity-[0.08]"
                      style={{
                        backgroundImage:
                          "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
                        backgroundSize: "42px 42px",
                      }}
                    />

                    {/* BROWSER MOCKUP */}
                    <div className="absolute left-1/2 top-1/2 w-[84%] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-2xl border border-white/10 bg-[#050b16] shadow-2xl transition-all duration-700 group-hover:-translate-y-[53%] group-hover:scale-[1.03]">
                      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                        <span className="h-2 w-2 rounded-full bg-red-400/60" />
                        <span className="h-2 w-2 rounded-full bg-yellow-300/60" />
                        <span className="h-2 w-2 rounded-full bg-emerald-400/60" />

                        <div className="ml-3 h-5 flex-1 rounded-full border border-white/5 bg-white/[0.03]" />
                      </div>

                      <div className="p-6 sm:p-8">
                        <div className="mb-6 flex items-center gap-3">
                          <Image
                            src={nexoraIcon}
                            alt="Nexora"
                            width={28}
                            height={28}
                            className="h-7 w-7 object-contain"
                          />

                          <p className="text-[10px] uppercase tracking-[0.3em] text-cyan-300/70">
                            Nexora Digital
                          </p>
                        </div>

                        <h3 className="max-w-xs text-2xl font-semibold text-white sm:text-3xl">
                          Digital products
                          <span className="block text-gray-500">
                            built to perform.
                          </span>
                        </h3>

                        <p className="mt-4 max-w-sm text-xs leading-6 text-gray-500">
                          Websites, software, mobile apps and intelligent
                          digital experiences.
                        </p>

                        <div className="mt-6 flex gap-2">
                          <span className="h-2 w-20 rounded-full bg-cyan-300/40" />
                          <span className="h-2 w-12 rounded-full bg-blue-400/20" />
                          <span className="h-2 w-8 rounded-full bg-indigo-400/20" />
                        </div>
                      </div>
                    </div>

                    <span className="absolute right-6 top-6 rounded-full border border-white/10 bg-black/20 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-gray-400 backdrop-blur-xl">
                      01
                    </span>

                    <span className="absolute bottom-6 left-6 flex items-center gap-2 rounded-full border border-emerald-300/15 bg-emerald-300/[0.05] px-3 py-1.5 text-[10px] uppercase tracking-widest text-emerald-300/80">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                      Live
                    </span>
                  </div>

                  {/* CONTENT */}
                  <div className="p-7 sm:p-8">
                    <div className="flex items-start justify-between gap-5">
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.28em] text-cyan-300/60">
                          Website · Brand Experience
                        </p>

                        <h3 className="mt-3 text-2xl font-medium text-white sm:text-3xl">
                          Nexora Website
                        </h3>
                      </div>

                      <span className="text-xl text-gray-500 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-200">
                        ↗
                      </span>
                    </div>

                    <p className="mt-5 max-w-xl leading-7 text-gray-500 transition-colors duration-300 group-hover:text-gray-400">
                      A modern digital experience created to showcase
                      Nexora&apos;s services, capabilities and approach through
                      a fast, responsive and interactive website.
                    </p>

                    {/* BUILT */}
                    <div className="mt-7 border-t border-white/10 pt-6">
                      <p className="text-[10px] uppercase tracking-[0.25em] text-gray-600">
                        Built from the ground up
                      </p>

                      <p className="mt-3 text-sm leading-6 text-gray-500">
                        Responsive interface, animations, navigation, project
                        showcases, working contact experience and production
                        deployment.
                      </p>
                    </div>

                    {/* STACK */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {["Next.js", "Tailwind CSS", "Formspree", "Vercel"].map(
                        (tech) => (
                          <span
                            key={tech}
                            className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1.5 text-xs text-gray-400"
                          >
                            {tech}
                          </span>
                        ),
                      )}
                    </div>

                    {/* LINKS */}
                    <div className="mt-8 flex flex-wrap gap-3">
                      <a
                        href="https://nexora-mu-smoky.vercel.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full bg-white px-5 py-2.5 text-xs font-medium text-black transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-50"
                      >
                        View Live ↗
                      </a>

                      <Link
                        href="/case-studies/nexora-website"
                        className="rounded-full border border-white/10 bg-white/[0.02] px-5 py-2.5 text-xs text-gray-300 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:text-cyan-200"
                      >
                        Case Study →
                      </Link>

                      <a
                        href="https://github.com/Virginiah-wachira/nexora"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full border border-white/10 bg-white/[0.02] px-5 py-2.5 text-xs text-gray-300 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:text-cyan-200"
                      >
                        GitHub ↗
                      </a>
                    </div>
                  </div>
                </div>

                {/* PROJECT 2 */}
                <div className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.025] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-indigo-300/20">
                  {/* VISUAL */}
                  <div className="relative flex h-[320px] items-center justify-center overflow-hidden bg-[#030712] sm:h-[380px]">
                    <div className="absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5" />
                    <div className="absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-400/10" />
                    <div className="absolute left-1/2 top-1/2 h-[160px] w-[160px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/10" />

                    <div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/15 blur-[90px]" />

                    <div className="relative z-10 text-center">
                      <p className="text-[10px] uppercase tracking-[0.4em] text-cyan-300/60">
                        Nexora
                      </p>

                      <h3 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
                        Something new
                        <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent">
                          is taking shape.
                        </span>
                      </h3>

                      <p className="mx-auto mt-5 max-w-xs text-sm leading-6 text-gray-500">
                        The portfolio grows as new digital products move from
                        idea to launch.
                      </p>
                    </div>

                    <span className="absolute right-6 top-6 rounded-full border border-white/10 bg-black/20 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-gray-400 backdrop-blur-xl">
                      02
                    </span>

                    <span className="absolute bottom-6 left-6 rounded-full border border-indigo-300/15 bg-indigo-300/[0.05] px-3 py-1.5 text-[10px] uppercase tracking-widest text-indigo-300/70">
                      In progress
                    </span>
                  </div>

                  {/* CONTENT */}
                  <div className="p-7 sm:p-8">
                    <p className="text-[10px] uppercase tracking-[0.28em] text-indigo-300/60">
                      Next Build
                    </p>

                    <h3 className="mt-3 text-2xl font-medium text-white sm:text-3xl">
                      Nexora — What&apos;s Next
                    </h3>

                    <p className="mt-5 max-w-xl leading-7 text-gray-500 transition-colors duration-300 group-hover:text-gray-400">
                      New products, experiments and client work will be added
                      here as the portfolio grows.
                    </p>

                    <div className="mt-7 border-t border-white/10 pt-6">
                      <p className="text-[10px] uppercase tracking-[0.25em] text-gray-600">
                        Currently building
                      </p>

                      <p className="mt-3 text-sm leading-6 text-gray-500">
                        More websites, applications and digital systems are
                        being developed. Each one will be documented here when
                        it is ready.
                      </p>
                    </div>

                    <div className="mt-8">
                      <a
                        href="#contact"
                        className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/[0.05] px-5 py-2.5 text-xs text-cyan-100 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-cyan-300/10"
                      >
                        Build with Nexora
                        <span>→</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Reveal>

        {/* PROCESS */}
        <section className="relative border-t border-white/5 py-24 sm:py-32">
          {/* BACKGROUND */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute left-[15%] top-10 h-[380px] w-[380px] rounded-full bg-blue-600/10 blur-[150px]" />
            <div className="absolute bottom-0 right-[10%] h-[380px] w-[380px] rounded-full bg-indigo-500/10 blur-[150px]" />
          </div>

          <div className="relative mx-auto max-w-7xl px-6">
            {/* HEADER */}
            <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
              <div>
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-px w-8 bg-cyan-300/50" />

                  <p className="text-xs uppercase tracking-[0.32em] text-cyan-300/70">
                    How we work
                  </p>
                </div>

                <h2 className="max-w-3xl text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
                  Good products aren&apos;t rushed.
                  <span className="block text-gray-500">
                    They&apos;re built with intention.
                  </span>
                </h2>
              </div>

              <p className="max-w-xl text-base leading-7 text-gray-400 lg:justify-self-end">
                Every project moves through a clear process designed to keep
                ideas focused, decisions intentional and development moving
                forward.
              </p>
            </div>

            {/* PROCESS STEPS */}
            <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  number: "01",
                  title: "Discover",
                  text: "We understand the idea, the business, the audience and what the product actually needs to achieve.",
                },
                {
                  number: "02",
                  title: "Shape",
                  text: "We define the structure, experience and technical direction before development begins.",
                },
                {
                  number: "03",
                  title: "Build",
                  text: "The product is engineered, refined and tested with performance and usability in mind.",
                },
                {
                  number: "04",
                  title: "Launch",
                  text: "We prepare the final product for release and make sure everything works the way it should.",
                },
              ].map((step) => (
                <div
                  key={step.number}
                  className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-300/20 hover:bg-white/[0.05]"
                >
                  <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-cyan-400/0 blur-[70px] transition-all duration-700 group-hover:bg-cyan-400/10" />

                  <div className="relative">
                    <span className="text-xs uppercase tracking-[0.28em] text-cyan-300/60">
                      {step.number}
                    </span>

                    <h3 className="mt-14 text-2xl font-medium text-white">
                      {step.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-gray-500 transition-colors duration-300 group-hover:text-gray-400">
                      {step.text}
                    </p>
                  </div>

                  <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400 transition-all duration-700 group-hover:w-full" />
                </div>
              ))}
            </div>

            {/* PROCESS FOOTER */}
            <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-gray-500">
                Clear communication. Thoughtful decisions. No unnecessary
                complexity.
              </p>

              <a
                href="#contact"
                className="group inline-flex items-center gap-2 text-sm text-cyan-200 transition-colors hover:text-white"
              >
                Start something with Nexora
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* ABOUT + TRUST */}
        <Reveal direction="up">
          <section
            id="about"
            className="relative border-t border-white/5 px-6 py-24 sm:py-32"
          >
            {/* BACKGROUND GLOW */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <div className="absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-blue-600/10 blur-[150px]" />
              <div className="absolute bottom-0 right-[-120px] h-[420px] w-[420px] rounded-full bg-indigo-500/10 blur-[150px]" />
            </div>

            <div className="relative mx-auto max-w-7xl">
              <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
                {/* LEFT */}
                <div>
                  <div className="mb-5 flex items-center gap-3">
                    <span className="h-px w-8 bg-cyan-300/50" />

                    <p className="text-xs uppercase tracking-[0.32em] text-cyan-300/70">
                      About Nexora
                    </p>
                  </div>

                  <h2 className="max-w-2xl text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
                    Technology should feel
                    <span className="block text-gray-500">
                      considered from every angle.
                    </span>
                  </h2>

                  <p className="mt-8 max-w-xl text-base leading-8 text-gray-400">
                    Nexora is a digital solutions studio building modern
                    websites, mobile applications, custom software and
                    intelligent systems for businesses and startups.
                  </p>

                  <p className="mt-5 max-w-xl text-base leading-8 text-gray-500">
                    Every product is approached with the same focus: clear
                    thinking, thoughtful design, reliable development and an
                    experience that feels polished from the first interaction.
                  </p>

                  <div className="mt-8">
                    <a
                      href="#contact"
                      className="group inline-flex items-center gap-2 text-sm text-cyan-200 transition-colors hover:text-white"
                    >
                      Work with Nexora
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </a>
                  </div>
                </div>

                {/* RIGHT */}
                <div>
                  <p className="mb-5 text-[10px] uppercase tracking-[0.3em] text-gray-600">
                    Built on more than appearance
                  </p>

                  <div className="grid gap-4 sm:grid-cols-2">
                    {[
                      {
                        title: "Performance",
                        text: "Fast-loading experiences built with responsiveness and real-world usability in mind.",
                      },
                      {
                        title: "Accessibility",
                        text: "Interfaces designed to be clear, readable and easier for more people to use.",
                      },
                      {
                        title: "Responsive by default",
                        text: "Layouts are built to work across mobile, tablet and desktop from the start.",
                      },
                      {
                        title: "Production-ready",
                        text: "Projects are tested, deployed and prepared for real use rather than left as unfinished demos.",
                      },
                    ].map((item) => (
                      <div
                        key={item.title}
                        className="group relative overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-cyan-300/20 hover:bg-white/[0.05]"
                      >
                        <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-cyan-400/0 blur-[60px] transition-all duration-700 group-hover:bg-cyan-400/10" />

                        <div className="relative">
                          <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full border border-cyan-300/15 bg-cyan-300/[0.05]">
                            <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(103,232,249,0.8)]" />
                          </div>

                          <h3 className="text-lg font-medium text-white">
                            {item.title}
                          </h3>

                          <p className="mt-3 text-sm leading-6 text-gray-500 transition-colors duration-300 group-hover:text-gray-400">
                            {item.text}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* PROOF STRIP */}
                  <div className="mt-4 rounded-[26px] border border-white/10 bg-[#07111f]/70 p-6 backdrop-blur-xl">
                    <p className="text-[10px] uppercase tracking-[0.28em] text-cyan-300/60">
                      Current build standards
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {[
                        "Next.js",
                        "Responsive UI",
                        "Accessibility",
                        "SEO",
                        "Vercel Deployment",
                      ].map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/10 bg-white/[0.025] px-3 py-1.5 text-xs text-gray-400"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Reveal>

        {/* WHY NEXORA */}
        <Reveal direction="up">
          <section
            id="why-nexora"
            className="relative border-t border-gray-900 px-6 py-24 sm:py-32"
          >
            <div className="mx-auto max-w-7xl">
              {/* HEADING */}
              <div className="mb-12 max-w-3xl sm:mb-16">
                <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gray-500">
                  Why Nexora
                </p>

                <h2 className="text-4xl font-bold leading-tight sm:text-5xl">
                  Technology should make
                  <span className="block text-gray-500">
                    your business move better.
                  </span>
                </h2>

                <p className="mt-6 max-w-2xl leading-8 text-gray-500">
                  We combine thoughtful design, modern technology, and practical
                  engineering to build digital solutions that are made to work
                  in the real world.
                </p>
              </div>

              {/* VALUES */}
              <div className="grid gap-px overflow-hidden rounded-2xl border border-gray-900 bg-gray-900 sm:grid-cols-2 lg:grid-cols-4">
                {/* 01 */}
                <div className="group bg-black p-8 transition-all duration-500 hover:-translate-y-1 hover:bg-gray-950">
                  <span className="text-sm text-gray-600 transition-colors duration-300 group-hover:text-gray-400">
                    01
                  </span>

                  <h3 className="mt-16 text-xl font-semibold">
                    Built Around You
                  </h3>

                  <p className="mt-4 leading-7 text-gray-500">
                    Every project starts with understanding your goals, your
                    users, and the problem you actually need to solve.
                  </p>
                </div>

                {/* 02 */}
                <div className="group bg-black p-8 transition-all duration-500 hover:-translate-y-1 hover:bg-gray-950">
                  <span className="text-sm text-gray-600 transition-colors duration-300 group-hover:text-gray-400">
                    02
                  </span>

                  <h3 className="mt-16 text-xl font-semibold">
                    Modern by Design
                  </h3>

                  <p className="mt-4 leading-7 text-gray-500">
                    Clean interfaces and modern technology come together to
                    create digital experiences people enjoy using.
                  </p>
                </div>

                {/* 03 */}
                <div className="group bg-black p-8 transition-all duration-500 hover:-translate-y-1 hover:bg-gray-950">
                  <span className="text-sm text-gray-600 transition-colors duration-300 group-hover:text-gray-400">
                    03
                  </span>

                  <h3 className="mt-16 text-xl font-semibold">
                    Built to Scale
                  </h3>

                  <p className="mt-4 leading-7 text-gray-500">
                    We build with the future in mind, creating systems that can
                    evolve as your business, users, and ideas grow.
                  </p>
                </div>

                {/* 04 */}
                <div className="group bg-black p-8 transition-all duration-500 hover:-translate-y-1 hover:bg-gray-950">
                  <span className="text-sm text-gray-600 transition-colors duration-300 group-hover:text-gray-400">
                    04
                  </span>

                  <h3 className="mt-16 text-xl font-semibold">
                    Purposeful Engineering
                  </h3>

                  <p className="mt-4 leading-7 text-gray-500">
                    We focus on solving the right problems instead of adding
                    technology just for the sake of it.
                  </p>
                </div>
              </div>

              {/* BOTTOM STATEMENT */}
              <div className="mt-12 flex flex-col gap-6 border-t border-gray-900 pt-10 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-xl text-sm leading-7 text-gray-500">
                  From the first idea to the final product, every detail is
                  considered with purpose.
                </p>

                <a
                  href="#contact"
                  className="group inline-flex items-center gap-3 text-sm font-medium text-white transition-colors duration-300 hover:text-gray-400"
                >
                  Build with Nexora
                  <span className="transition-transform duration-300 group-hover:translate-x-2">
                    →
                  </span>
                </a>
              </div>
            </div>
          </section>
        </Reveal>

        <Reveal direction="up">
          {/* CONTACT */}
          <section
            id="contact"
            className="relative border-t border-white/5 px-6 py-24 sm:py-32"
          >
            {/* BACKGROUND */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <div className="absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-blue-600/10 blur-[150px]" />

              <div className="absolute bottom-0 right-[-120px] h-[420px] w-[420px] rounded-full bg-cyan-400/10 blur-[150px]" />
            </div>

            <div className="relative mx-auto max-w-7xl">
              <div className="overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl sm:p-10 md:p-14">
                <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
                  {/* LEFT */}
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="h-px w-8 bg-cyan-300/50" />

                      <p className="text-xs uppercase tracking-[0.32em] text-cyan-300/70">
                        Start a conversation
                      </p>
                    </div>

                    <h2 className="mt-6 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
                      Have something worth building?
                      <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent">
                        Let&apos;s make it real.
                      </span>
                    </h2>

                    <p className="mt-6 max-w-xl leading-8 text-gray-400">
                      Tell us what you&apos;re building, what&apos;s not
                      working, or where you want to go next. We&apos;ll help
                      shape the right digital solution around it.
                    </p>

                    {/* CONTACT DETAILS */}
                    <div className="mt-10 space-y-3">
                      {/* EMAIL */}
                      <a
                        href="mailto:nexorasolutions.ke@gmail.com"
                        className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.02] px-5 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/25 hover:bg-white/[0.05]"
                      >
                        <div>
                          <p className="text-[10px] uppercase tracking-[0.25em] text-gray-600">
                            Email
                          </p>

                          <p className="mt-1 text-sm text-gray-300">
                            nexorasolutions.ke@gmail.com
                          </p>
                        </div>

                        <span className="text-gray-500 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-200">
                          ↗
                        </span>
                      </a>

                      {/* WHATSAPP */}
                      <a
                        href="https://wa.me/254740568268?text=Hi%20Nexora%2C%20I%27d%20like%20to%20discuss%20a%20project."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.02] px-5 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/25 hover:bg-white/[0.05]"
                      >
                        <div>
                          <p className="text-[10px] uppercase tracking-[0.25em] text-gray-600">
                            WhatsApp
                          </p>

                          <p className="mt-1 text-sm text-gray-300">
                            +254 740 568 268
                          </p>
                        </div>

                        <span className="text-gray-500 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-200">
                          ↗
                        </span>
                      </a>
                    </div>

                    {/* SOCIAL LINKS */}
                    <div className="mt-5 flex flex-wrap gap-3">
                      <a
                        href="https://www.instagram.com/nexora.digital.ke?psln=MTd4NWxxamhia3RjeA%3D%3D&utm_source=qr"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full border border-white/10 bg-white/[0.02] px-4 py-2 text-xs text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:text-cyan-200"
                      >
                        Instagram ↗
                      </a>

                      <a
                        href="https://github.com/Virginiah-wachira/nexora"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full border border-white/10 bg-white/[0.02] px-4 py-2 text-xs text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:text-cyan-200"
                      >
                        GitHub ↗
                      </a>
                    </div>
                  </div>

                  {/* RIGHT — CONTACT FORM */}
                  <form
                    action="https://formspree.io/f/mbglyprn"
                    method="POST"
                    className="rounded-[28px] border border-white/10 bg-[#020617]/70 p-6 backdrop-blur-xl sm:p-8"
                  >
                    <p className="text-[10px] uppercase tracking-[0.3em] text-cyan-300/60">
                      Project enquiry
                    </p>

                    <h3 className="mt-3 text-2xl font-medium text-white">
                      Tell us what you have in mind.
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-gray-500">
                      A few details are enough to start.
                    </p>

                    {/* NAME */}
                    <div className="mt-7">
                      <label
                        htmlFor="name"
                        className="mb-2 block text-xs uppercase tracking-widest text-gray-500"
                      >
                        Name
                      </label>

                      <input
                        id="name"
                        type="text"
                        name="name"
                        placeholder="Your name"
                        className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-4 text-sm text-white outline-none transition-all duration-300 placeholder:text-gray-600 focus:border-cyan-300/30"
                      />
                    </div>

                    {/* EMAIL */}
                    <div className="mt-5">
                      <label
                        htmlFor="email"
                        className="mb-2 block text-xs uppercase tracking-widest text-gray-500"
                      >
                        Email
                      </label>

                      <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="you@example.com"
                        className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-4 text-sm text-white outline-none transition-all duration-300 placeholder:text-gray-600 focus:border-cyan-300/30"
                      />
                    </div>

                    {/* PROJECT TYPE */}
                    <div className="mt-5">
                      <label
                        htmlFor="project"
                        className="mb-2 block text-xs uppercase tracking-widest text-gray-500"
                      >
                        Project type
                      </label>

                      <select
                        id="project"
                        name="project"
                        aria-label="Project Type"
                        defaultValue=""
                        className="w-full rounded-xl border border-white/10 bg-[#020617] px-4 py-4 text-sm text-gray-400 outline-none transition-all duration-300 focus:border-cyan-300/30"
                      >
                        <option value="" disabled>
                          What are you looking for?
                        </option>

                        <option value="website">Website</option>
                        <option value="mobile-app">Mobile App</option>
                        <option value="custom-software">Custom Software</option>
                        <option value="ai-automation">AI & Automation</option>
                        <option value="other">Something else</option>
                      </select>
                    </div>

                    {/* MESSAGE */}
                    <div className="mt-5">
                      <label
                        htmlFor="message"
                        className="mb-2 block text-xs uppercase tracking-widest text-gray-500"
                      >
                        Message
                      </label>

                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        placeholder="Tell us a little about your project..."
                        className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-4 text-sm text-white outline-none transition-all duration-300 placeholder:text-gray-600 focus:border-cyan-300/30"
                      />
                    </div>

                    {/* SUBMIT */}
                    <button
                      type="submit"
                      className="group mt-7 flex w-full items-center justify-between rounded-xl bg-white px-6 py-4 text-sm font-medium text-black transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-50"
                    >
                      <span>Send Project Enquiry</span>

                      <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </Reveal>

        {/* FOOTER */}
        <footer className="relative border-t border-white/5 px-6 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
              {/* BRAND */}
              <div className="lg:col-span-2">
                <a href="#home" className="inline-flex items-center gap-3">
                  <Image
                    src={nexoraIcon}
                    alt="Nexora icon"
                    width={46}
                    height={46}
                    className="h-11 w-11 object-contain"
                  />

                  <Image
                    src={nexoraWordmark}
                    alt="Nexora"
                    width={170}
                    height={40}
                    className="h-auto w-[145px] object-contain sm:w-[170px]"
                  />
                </a>

                <p className="mt-6 max-w-md text-sm leading-7 text-gray-500">
                  Websites, mobile apps, custom software and intelligent digital
                  systems built for businesses ready to move forward.
                </p>

                <p className="mt-6 text-[10px] uppercase tracking-[0.28em] text-cyan-300/60">
                  Build · Develop · Innovate
                </p>
              </div>

              {/* NAVIGATION */}
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-gray-600">
                  Explore
                </p>

                <div className="mt-5 flex flex-col gap-3 text-sm text-gray-500">
                  <a
                    href="#home"
                    className="transition-colors hover:text-cyan-200"
                  >
                    Home
                  </a>

                  <a
                    href="#services"
                    className="transition-colors hover:text-cyan-200"
                  >
                    Services
                  </a>

                  <a
                    href="#projects"
                    className="transition-colors hover:text-cyan-200"
                  >
                    Projects
                  </a>

                  <a
                    href="#about"
                    className="transition-colors hover:text-cyan-200"
                  >
                    About
                  </a>

                  <a
                    href="#contact"
                    className="transition-colors hover:text-cyan-200"
                  >
                    Contact
                  </a>
                </div>
              </div>

              {/* CONNECT */}
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-gray-600">
                  Connect
                </p>

                <div className="mt-5 flex flex-col gap-3 text-sm text-gray-500">
                  <a
                    href="mailto:nexorasolutions.ke@gmail.com"
                    className="transition-colors hover:text-cyan-200"
                  >
                    Email
                  </a>

                  <a
                    href="https://www.instagram.com/nexora.digital.ke?psln=MTd4NWxxamhia3RjeA%3D%3D&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-cyan-200"
                  >
                    Instagram
                  </a>

                  <a
                    href="https://wa.me/254740568268?text=Hi%20Nexora%2C%20I%27d%20like%20to%20discuss%20a%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-cyan-200"
                  >
                    WhatsApp
                  </a>

                  <a
                    href="https://github.com/Virginiah-wachira/nexora"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-cyan-200"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>

            {/* BOTTOM */}
            <div className="mt-14 flex flex-col gap-4 border-t border-white/5 pt-7 text-xs text-gray-600 sm:flex-row sm:items-center sm:justify-between">
              <p>© {new Date().getFullYear()} Nexora. All rights reserved.</p>

              <p className="uppercase tracking-[0.2em]">
                Built with intention.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
