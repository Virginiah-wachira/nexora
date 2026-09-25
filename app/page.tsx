"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Reveal from "./components/Reveal";
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
    <main className="min-h-screen overflow-hidden bg-black text-white">
      {/* NAVBAR */}
      <nav className="mx-auto max-w-7xl px-6 py-6">
        <div className="flex items-center justify-between">
          {/* LOGO */}
          <a href="#home" className="group flex items-center gap-2 sm:gap-3">
            <Image
              src={nexoraIcon}
              alt="Nexora icon"
              width={46}
              height={46}
              className="h-10 w-10 shrink-0 object-contain sm:h-12 sm:w-12"
              priority
            />

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
          <div className="hidden items-center gap-8 text-sm text-gray-400 md:flex">
            <a href="#home" className="transition-colors hover:text-white">
              Home
            </a>

            <a href="#services" className="transition-colors hover:text-white">
              Services
            </a>

            <a href="#projects" className="transition-colors hover:text-white">
              Projects
            </a>

            <a href="#about" className="transition-colors hover:text-white">
              About
            </a>

            <a href="#contact" className="transition-colors hover:text-white">
              Contact
            </a>
          </div>

          {/* DESKTOP BUTTON */}
          <a
            href="#contact"
            className="hidden rounded-full border border-gray-700 px-5 py-2 text-sm transition-all duration-300 hover:bg-white hover:text-black md:block"
          >
            Lets talk
          </a>

          {/* RIGHT SIDE CONTROLS */}
          <div className="flex items-center gap-2">
            {/* THEME TOGGLE */}
            <button
              type="button"
              onClick={() => setLightMode(!lightMode)}
              aria-label="Toggle theme"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-800 text-sm text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-gray-600 hover:text-white"
            >
              {lightMode ? "☾" : "☀"}
            </button>

            {/* MOBILE MENU */}
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-800 text-lg transition-all duration-300 hover:border-gray-600 hover:bg-gray-950 md:hidden"
              aria-label="Toggle menu"
            >
              {menuOpen ? "×" : "☰"}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="mt-5 rounded-2xl border border-gray-800 bg-gray-950 p-5 shadow-2xl md:hidden">
            <div className="flex flex-col gap-5 text-sm text-gray-400">
              <a
                href="#home"
                onClick={() => setMenuOpen(false)}
                className="transition-colors hover:text-white"
              >
                Home
              </a>

              <a
                href="#services"
                onClick={() => setMenuOpen(false)}
                className="transition-colors hover:text-white"
              >
                Services
              </a>

              <a
                href="#projects"
                onClick={() => setMenuOpen(false)}
                className="transition-colors hover:text-white"
              >
                Projects
              </a>

              <a
                href="#about"
                onClick={() => setMenuOpen(false)}
                className="transition-colors hover:text-white"
              >
                About
              </a>

              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="transition-colors hover:text-white"
              >
                Contact
              </a>

              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-1 rounded-full bg-white px-5 py-3 text-center font-medium text-black transition-all duration-300 hover:bg-gray-200"
              >
                Lets talk →
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section
        id="home"
        className="relative overflow-hidden px-6 pb-32 pt-24 sm:pb-40 sm:pt-32"
      >
        {/* BACKGROUND GRID */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)",
              backgroundSize: "70px 70px",
            }}
          />

          {/* CENTER GLOW */}
          <div className="absolute left-1/2 top-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-white/[0.04] blur-[120px]" />

          {/* SIDE GLOW */}
          <div className="absolute -right-40 top-40 h-72 w-72 rounded-full bg-white/[0.03] blur-[100px]" />
        </div>

        <div className="mx-auto max-w-7xl">
          <div className="max-w-5xl animate-[fadeInUp_0.9s_ease-out]">
            {/* LABEL */}
            <div className="mb-8 flex items-center gap-3">
              <span className="h-px w-10 bg-gray-700" />

              <Image
                src={nexoraIcon}
                alt="Nexora"
                width={28}
                height={28}
                className="rounded-md"
              />

              <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
                Nexora Digital Solutions
              </p>
            </div>

            {/* HEADING */}
            <h1 className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl md:text-8xl">
              Performance-focused
              <span className="block text-gray-500">solutions for</span>
              businesses & startups.
            </h1>

            {/* DESCRIPTION */}
            <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-400 sm:text-xl">
              We design and build modern digital products that help businesses
              launch, scale, and move forward.
            </p>

            {/* BUTTONS */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-3.5 text-sm font-medium text-black transition-all duration-300 hover:-translate-y-1 hover:bg-gray-200"
              >
                Start a Project
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-3 rounded-full border border-gray-700 px-7 py-3.5 text-sm text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-gray-500 hover:text-white"
              >
                View Our Work
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  ↓
                </span>
              </a>
            </div>

            {/* HERO FOOTER */}
            <div className="mt-20 flex flex-col gap-6 border-t border-gray-900 pt-8 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gray-500 opacity-50" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-gray-400" />
                </span>

                <span className="text-xs uppercase tracking-widest text-gray-500">
                  Available for new projects
                </span>
              </div>

              <p className="text-xs uppercase tracking-widest text-gray-600">
                Web · Mobile · Software · AI
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <Reveal direction="up">
        <section
          id="services"
          className="relative border-t border-gray-900 py-24 sm:py-32"
        >
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-12 max-w-2xl animate-[fadeInUp_0.9s_ease-out] sm:mb-16">
              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gray-500">
                What we do
              </p>

              <h2 className="text-4xl font-bold sm:text-5xl">
                Digital solutions
                <span className="block text-gray-500">
                  built to move businesses forward.
                </span>
              </h2>
            </div>

            <div className="grid gap-px overflow-hidden rounded-2xl border border-gray-900 bg-gray-900 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => (
                <Link
                  key={service.number}
                  href={service.link}
                  className="group relative block overflow-hidden bg-black p-8 transition-all duration-500 hover:-translate-y-2 hover:bg-gray-950"
                >
                  {/* HOVER GLOW */}
                  <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-white/[0.04] blur-3xl transition-all duration-700 group-hover:h-64 group-hover:w-64 group-hover:bg-white/[0.07]" />

                  {/* TOP */}
                  <div className="relative mb-16 flex items-center justify-between">
                    <span className="text-sm text-gray-600 transition-all duration-500 group-hover:-translate-y-1 group-hover:text-gray-300">
                      {service.number}
                    </span>

                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-800 text-gray-600 transition-all duration-500 group-hover:translate-x-1 group-hover:border-gray-600 group-hover:text-white">
                      →
                    </span>
                  </div>

                  {/* TITLE */}
                  <h3 className="relative text-xl font-semibold transition-all duration-500 group-hover:translate-x-1">
                    {service.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="relative mt-4 leading-7 text-gray-500 transition-colors duration-500 group-hover:text-gray-400">
                    {service.text}
                  </p>

                  {/* BOTTOM LINE */}
                  <div className="relative mt-8 h-px w-0 bg-gray-600 transition-all duration-700 group-hover:w-full" />
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
          className="relative border-t border-gray-900 py-24 sm:py-32"
        >
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end animate-[fadeInUp_0.9s_ease-out]">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
                  Selected work
                </p>

                <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
                  Ideas, engineered.
                </h2>
              </div>

              <p className="max-w-md text-sm leading-7 text-gray-500">
                Digital products I’ve designed, developed, and brought to life —
                with more already in the works.
              </p>
            </div>

            <div className="mt-12 grid items-stretch gap-6 sm:gap-8 md:grid-cols-2">
              {/* PROJECT 1 */}
              <div className="group relative overflow-hidden rounded-2xl border border-gray-800 bg-gray-950 transition-all duration-500 hover:-translate-y-2 hover:border-gray-600 hover:shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
                <div className="pointer-events-none absolute inset-0 -z-0 bg-gradient-to-br from-white/[0.03] via-transparent to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                <div className="relative h-64 sm:h-72 overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-950">
                  <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-3xl transition-all duration-700 group-hover:h-64 group-hover:w-64" />

                  <div className="absolute left-1/2 top-1/2 w-[82%] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-xl border border-gray-700 bg-black shadow-2xl transition-transform duration-700 group-hover:-translate-y-[53%] group-hover:scale-105">
                    <div className="flex items-center gap-2 border-b border-gray-800 px-4 py-3">
                      <span className="h-2 w-2 rounded-full bg-gray-700" />
                      <span className="h-2 w-2 rounded-full bg-gray-700" />
                      <span className="h-2 w-2 rounded-full bg-gray-700" />

                      <div className="ml-3 h-4 flex-1 rounded-full bg-gray-900" />
                    </div>

                    <div className="p-6">
                      <p className="text-xs uppercase tracking-[0.25em] text-gray-600">
                        Nexora Digital Solutions
                      </p>

                      <h3 className="mt-4 text-2xl font-bold">
                        Performance-focused
                      </h3>
                      <h3 className="text-2xl font-bold text-gray-600">
                        digital solutions.
                      </h3>

                      <p className="mt-2 max-w-xs text-xs leading-5 text-gray-600">
                        Websites, software, mobile apps & digital experiences.
                      </p>

                      <div className="mt-5 flex gap-2">
                        <span className="h-2 w-16 rounded-full bg-gray-700" />
                        <span className="h-2 w-10 rounded-full bg-gray-800" />
                      </div>
                    </div>
                  </div>

                  <span className="absolute right-6 top-6 rounded-full border border-gray-700 px-3 py-1 text-xs text-gray-500">
                    01
                  </span>
                  <span className="absolute bottom-6 left-6 rounded-full border border-gray-700 bg-black/80 px-3 py-1 text-[10px] uppercase tracking-widest text-gray-500">
                    Live
                  </span>
                </div>

                <div className="p-7">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-semibold">Nexora Website</h3>

                    <span className="text-xl text-gray-500 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white">
                      ↗
                    </span>
                  </div>

                  <p className="mt-4 leading-7 text-gray-500 transition-colors duration-300 group-hover:text-gray-400">
                    A modern digital solutions website designed to showcase
                    Nexora’s services, capabilities, and vision through a clean,
                    responsive, and interactive experience.
                  </p>

                  {/* WHAT I BUILT */}
                  <div className="mt-6 border-t border-gray-800 pt-5">
                    <p className="text-xs uppercase tracking-widest text-gray-600">
                      What I built
                    </p>

                    <p className="mt-2 text-sm leading-6 text-gray-500">
                      Designed and developed the complete website, including the
                      responsive interface, animations, navigation, project
                      showcases, working contact form, and Vercel deployment.
                    </p>
                  </div>

                  {/* TECH STACK */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    <span className="rounded-full border border-gray-800 px-3 py-1 text-xs text-gray-400 transition-colors group-hover:border-gray-600">
                      Next.js
                    </span>

                    <span className="rounded-full border border-gray-800 px-3 py-1 text-xs text-gray-400 transition-colors group-hover:border-gray-600">
                      Tailwind CSS
                    </span>

                    <span className="rounded-full border border-gray-800 px-3 py-1 text-xs text-gray-400 transition-colors group-hover:border-gray-600">
                      Formspree
                    </span>

                    <span className="rounded-full border border-gray-800 px-3 py-1 text-xs text-gray-400 transition-colors group-hover:border-gray-600">
                      Vercel
                    </span>
                  </div>

                  {/* PROJECT LINKS */}
                  <div className="mt-7 flex flex-wrap gap-3">
                    <a
                      href="https://nexora-mu-smoky.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-white px-5 py-2.5 text-xs font-medium text-black transition-all duration-300 hover:-translate-y-1 hover:bg-gray-200"
                    >
                      Live Demo ↗
                    </a>

                    <Link
                      href="/case-studies/nexora-website"
                      className="rounded-full border border-gray-700 px-5 py-2.5 text-xs text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-gray-500 hover:text-white"
                    >
                      View Case Study →
                    </Link>

                    <a
                      href="https://github.com/Virginiah-wachira/nexora"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-gray-700 px-5 py-2.5 text-xs text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-gray-500 hover:text-white"
                    >
                      GitHub ↗
                    </a>
                  </div>
                </div>
              </div>

              {/* PROJECT 2 */}
              <div className="group relative overflow-hidden rounded-2xl border border-gray-800 bg-gray-950 transition-all duration-500 hover:-translate-y-2 hover:border-gray-600 hover:shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
                <div className="pointer-events-none absolute inset-0 -z-0 bg-gradient-to-br from-white/[0.03] via-transparent to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                <div className="relative h-64 sm:h-72 overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-950">
                  <div className="absolute inset-0 opacity-30">
                    <div className="absolute left-10 top-10 h-20 w-20 rounded-full border border-gray-800" />
                    <div className="absolute bottom-10 right-10 h-32 w-32 rounded-full border border-gray-800" />
                    <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-gray-900" />
                  </div>

                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                    <p className="text-xs uppercase tracking-[0.35em] text-gray-600">
                      Nexora
                    </p>

                    <p className="mt-3 text-3xl font-bold">Building what’s</p>

                    <p className="mt-1 text-3xl font-bold text-gray-600">
                      next.
                    </p>
                  </div>

                  <span className="absolute bottom-6 left-6 rounded-full border border-gray-700 bg-black/80 px-3 py-1 text-[10px] uppercase tracking-widest text-gray-500">
                    Coming next
                  </span>
                </div>

                <div className="p-7">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-semibold">
                      Nexora — Next Build
                    </h3>

                    <span className="text-xl text-gray-500 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white">
                      ↗
                    </span>
                  </div>

                  <p className="mt-4 leading-7 text-gray-500 transition-colors duration-300 group-hover:text-gray-400">
                    The next digital product is already taking shape. A new
                    idea, a new system, and another experience engineered from
                    the ground up.
                  </p>

                  {/* PROJECT STATUS */}
                  <div className="mt-6 border-t border-gray-800 pt-5">
                    <p className="text-xs uppercase tracking-widest text-gray-600">
                      In development
                    </p>

                    <p className="mt-2 text-sm leading-6 text-gray-500">
                      A new digital experience is currently being designed and
                      developed. More details will be revealed soon.
                    </p>
                  </div>

                  {/* START A PROJECT */}
                  <div className="mt-7 flex flex-wrap gap-3">
                    <a
                      href="#contact"
                      className="rounded-full bg-white px-5 py-2.5 text-xs font-medium text-black transition-all duration-300 hover:-translate-y-1 hover:bg-gray-200"
                    >
                      Build with Nexora →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* ABOUT */}
      <Reveal direction="up">
        <section
          id="about"
          className="relative border-t border-gray-900 px-6 py-24"
        >
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 sm:gap-16 md:grid-cols-2 md:items-center">
              {/* LEFT */}
              <div className="animate-[fadeInUp_0.9s_ease-out]">
                <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
                  About Nexora
                </p>

                <h2 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl">
                  We build digital
                  <span className="block text-gray-500">with purpose.</span>
                </h2>

                <p className="mt-8 max-w-xl leading-8 text-gray-400">
                  Nexora is a digital solutions studio focused on creating
                  modern websites, mobile applications, and custom software for
                  businesses and startups.
                </p>

                <p className="mt-5 max-w-xl leading-8 text-gray-500">
                  We combine thoughtful design, reliable technology, and
                  practical problem-solving to turn ideas into products people
                  can actually use.
                </p>
              </div>

              {/* RIGHT */}
              <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-gray-900 bg-gray-900 sm:grid-cols-2">
                <div className="group relative bg-black p-8 transition-all duration-500 hover:-translate-y-1 hover:bg-gray-950">
                  <p className="text-3xl font-bold transition-transform duration-300 group-hover:-translate-y-1">
                    01
                  </p>

                  <p className="mt-3 text-sm text-gray-500">Strategy</p>
                </div>

                <div className="group relative bg-black p-8 transition-all duration-500 hover:-translate-y-1 hover:bg-gray-950">
                  <p className="text-3xl font-bold transition-all duration-300 group-hover:-translate-y-1 group-hover:text-gray-300">
                    02
                  </p>

                  <p className="mt-3 text-sm text-gray-500">Design</p>
                </div>

                <div className="group relative bg-black p-8 transition-all duration-500 hover:-translate-y-1 hover:bg-gray-950">
                  <p className="text-3xl font-bold transition-transform duration-300 group-hover:-translate-y-1">
                    03
                  </p>

                  <p className="mt-3 text-sm text-gray-500">Development</p>
                </div>

                <div className="group relative bg-black p-8 transition-all duration-500 hover:-translate-y-1 hover:bg-gray-950">
                  <p className="text-3xl font-bold transition-transform duration-300 group-hover:-translate-y-1">
                    04
                  </p>

                  <p className="mt-3 text-sm text-gray-500">Growth</p>
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
                engineering to build digital solutions that are made to work in
                the real world.
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
                  Clean interfaces and modern technology come together to create
                  digital experiences people enjoy using.
                </p>
              </div>

              {/* 03 */}
              <div className="group bg-black p-8 transition-all duration-500 hover:-translate-y-1 hover:bg-gray-950">
                <span className="text-sm text-gray-600 transition-colors duration-300 group-hover:text-gray-400">
                  03
                </span>

                <h3 className="mt-16 text-xl font-semibold">Built to Scale</h3>

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
        <section
          id="contact"
          className="relative border-t border-gray-900 px-6 py-24 sm:py-32"
        >
          <div className="mx-auto max-w-7xl">
            <div className="rounded-3xl border border-gray-800 bg-gray-950 px-5 py-12 sm:px-10 sm:py-16 md:px-16">
              <div className="grid gap-12 md:grid-cols-2 md:items-start">
                {/* LEFT */}
                <div className="animate-[fadeInUp_0.9s_ease-out]">
                  <div className="flex items-center gap-3">
                    <span className="h-px w-10 bg-gray-700" />

                    <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
                      Lets work together
                    </p>
                  </div>

                  <h2 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
                    Have an idea?
                    <span className="block text-gray-500">Lets build it.</span>
                  </h2>

                  <p className="mt-6 max-w-xl leading-8 text-gray-500">
                    Tell us what you are building, what you need, or where you
                    are trying to go. Lets turn the idea into something real.
                  </p>

                  {/* CONTACT DETAILS */}
                  <div className="mt-10 flex flex-col gap-4">
                    {/* EMAIL */}
                    <a
                      href="mailto:hello@nexora.dev"
                      className="group flex items-center justify-between rounded-2xl border border-gray-800 bg-black/20 px-6 py-5 transition-all duration-500 hover:-translate-y-1 hover:border-gray-600 hover:bg-black"
                    >
                      <div>
                        <p className="text-xs uppercase tracking-widest text-gray-600">
                          Email
                        </p>

                        <p className="mt-1 text-sm text-gray-300">
                          hello@nexora.dev
                        </p>
                      </div>

                      <span className="text-xl text-gray-500 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white">
                        ↗
                      </span>
                    </a>

                    {/* WHATSAPP */}
                    <a
                      href="https://wa.me/254740568268?text=Hi%20Nexora%2C%20I%27d%20like%20to%20discuss%20a%20project."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between rounded-2xl border border-gray-800 px-6 py-5 transition-all duration-300 hover:-translate-y-1 hover:border-gray-600 hover:bg-black"
                    >
                      <div>
                        <p className="text-xs uppercase tracking-widest text-gray-600">
                          WhatsApp
                        </p>

                        <p className="mt-1 text-sm text-gray-300">
                          +254 740 568 268
                        </p>
                      </div>

                      <span className="text-xl text-gray-500 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white">
                        ↗
                      </span>
                    </a>

                    {/* SOCIAL LINKS */}
                    <div className="flex flex-wrap gap-3 pt-2">
                      <a
                        href="#"
                        className="rounded-full border border-gray-800 px-4 py-2 text-xs text-gray-500 transition-all duration-300 hover:border-gray-600 hover:text-white"
                      >
                        Instagram
                      </a>

                      <a
                        href="#"
                        className="rounded-full border border-gray-800 px-4 py-2 text-xs text-gray-500 transition-all duration-300 hover:border-gray-600 hover:text-white"
                      >
                        LinkedIn
                      </a>

                      <a
                        href="#"
                        className="rounded-full border border-gray-800 px-4 py-2 text-xs text-gray-500 transition-all duration-300 hover:border-gray-600 hover:text-white"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>

                {/* RIGHT — CONTACT FORM */}
                <form
  action="https://formspree.io/f/mbglyprn"
  method="POST"
  className="rounded-2xl border border-gray-800 bg-black/30 p-6 sm:p-8"
>
  <div className="mb-2">
    <p className="text-xs uppercase tracking-[0.3em] text-gray-600">
      Start a conversation
    </p>

    <h3 className="mt-2 text-2xl font-semibold">
      Tell us about your project.
    </h3>

    <p className="mt-2 text-sm leading-6 text-gray-500">
      A few details are enough to get the conversation started.
    </p>
  </div>

  {/* NAME */}
  <div className="mt-6">
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
      className="w-full rounded-xl border border-gray-800 bg-black px-4 py-4 text-sm text-white outline-none transition-all duration-300 placeholder:text-gray-600 focus:border-gray-500"
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
      className="w-full rounded-xl border border-gray-800 bg-black px-4 py-4 text-sm text-white outline-none transition-all duration-300 placeholder:text-gray-600 focus:border-gray-500"
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
      className="w-full rounded-xl border border-gray-800 bg-black px-4 py-4 text-sm text-gray-400 outline-none transition-all duration-300 focus:border-gray-500"
      defaultValue=""
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
      className="w-full resize-none rounded-xl border border-gray-800 bg-black px-4 py-4 text-sm text-white outline-none transition-all duration-300 placeholder:text-gray-600 focus:border-gray-500"
    />
  </div>

  {/* SUBMIT */}
  <button
    type="submit"
    className="group mt-7 flex w-full items-center justify-between rounded-xl bg-white px-6 py-4 text-sm font-medium text-black transition-all duration-300 hover:-translate-y-1 hover:bg-gray-200"
  >
    <span>Send Message</span>

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
      <footer className="border-t border-gray-900 px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            {/* BRAND */}
            <div className="lg:col-span-2">
              <a href="#home" className="group inline-flex items-center gap-3">
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
                Modern digital solutions for businesses and startups. We design,
                build, and engineer products that move ideas forward.
              </p>

              <p className="mt-6 text-xs uppercase tracking-[0.25em] text-gray-700">
                Build · Develop · Innovate
              </p>
            </div>

            {/* NAVIGATION */}
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-gray-600">
                Navigation
              </p>

              <div className="mt-5 flex flex-col gap-3 text-sm text-gray-500">
                <a href="#home" className="transition-colors hover:text-white">
                  Home
                </a>

                <a
                  href="#services"
                  className="transition-colors hover:text-white"
                >
                  Services
                </a>

                <a
                  href="#projects"
                  className="transition-colors hover:text-white"
                >
                  Projects
                </a>

                <a href="#about" className="transition-colors hover:text-white">
                  About
                </a>

                <a
                  href="#contact"
                  className="transition-colors hover:text-white"
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
                  href="mailto:hello@nexora.dev"
                  className="transition-colors hover:text-white"
                >
                  Email
                </a>

                <a
                  href="https://wa.me/254740568268?text=Hi%20Nexora%2C%20I%27d%20like%20to%20discuss%20a%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  WhatsApp
                </a>

                <a
                  href="https://github.com/Virginiah-wachira/nexora"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* BOTTOM */}
          <div className="mt-16 flex flex-col gap-4 border-t border-gray-900 pt-8 text-xs text-gray-600 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Nexora. All rights reserved.</p>

            <p className="uppercase tracking-[0.2em]">
              Digital solutions, engineered.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
