"use client"
import { useEffect, useState } from "react";
const services = [
  {
    number: "01",
    title: "Web Development",
    text: "Modern websites built for speed, performance, and growth.",
  },
  {
    number: "02",
    title: "Mobile Apps",
    text: "Scalable mobile applications designed around your users.",
  },
  {
    number: "03",
    title: "Custom Software",
    text: "Digital systems tailored to the way your business works.",
  },
  {
    number: "04",
    title: "AI & Automation",
    text: "Smarter workflows that help businesses work faster.",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <main className="min-h-screen bg-black text-white">
      
      {/* NAVBAR */}
<nav className="mx-auto max-w-7xl px-6 py-6">
  <div className="flex items-center justify-between">

    {/* LOGO */}
    <a
      href="#home"
      className="group flex items-center gap-3"
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-gray-700 text-sm font-bold transition-all duration-300 group-hover:rotate-6 group-hover:border-gray-400">
        N
      </span>

      <span className="text-2xl font-bold">
        Nexora<span className="text-gray-500">.</span>
      </span>
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

    {/* MOBILE MENU BUTTON */}
    <button
      onClick={() => setMenuOpen(!menuOpen)}
      className="rounded-lg border border-gray-800 px-3 py-2 text-lg transition-all duration-300 hover:border-gray-600 hover:bg-gray-950 md:hidden"
      aria-label="Toggle menu"
    >
      {menuOpen ? "×" : "☰"}
    </button>

  </div>

  {/* MOBILE MENU */}
  {menuOpen && (
    <div className="mt-6 rounded-2xl border border-gray-800 bg-gray-950 p-5 md:hidden">
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
          className="mt-2 rounded-full bg-white px-5 py-3 text-center font-medium text-black transition-all duration-300 hover:bg-gray-200"
        >
          Lets talk
        </a>

      </div>
    </div>
  )}
</nav>

      
{/* HERO */}
<section
  id="home"
  className="mx-auto max-w-7xl px-6 pb-32 pt-24"
>
  <div className="max-w-4xl animate-[fadeInUp_0.9s_ease-out]">

    <p className="mb-6 text-sm uppercase tracking-[0.3em] text-gray-500">
      Nexora Digital Solutions
    </p>

    <h1 className="text-4xl font-bold leading-tight sm:text-6xl md:text-7xl">
      Performance-focused
      <span className="block text-gray-500">
        solutions for
      </span>
      businesses & startups.
    </h1>

    <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-400">
      We design and build modern digital products that help
      businesses launch, scale, and move forward.
    </p>

    <div className="mt-10 flex flex-col gap-4 sm:flex-row">
      <a
        href="#contact"
        className="rounded-full bg-white px-7 py-3 text-center text-sm font-medium text-black transition-all duration-300 hover:-translate-y-1 hover:bg-gray-200"
      >
        Start a Project
      </a>

      <a
        href="#services"
        className="rounded-full border border-gray-700 px-7 py-3 text-center text-sm transition-all duration-300 hover:-translate-y-1 hover:border-gray-500 hover:bg-gray-900"
      >
        Explore Services
      </a>
    </div>

  </div>
</section>



    
{/* SERVICES */}
<section
  id="services"
  className="border-t border-gray-900 py-24 sm:py-32"
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
        <div
  key={service.number}
  className="group relative overflow-hidden bg-black p-8 transition-all duration-500 hover:-translate-y-2 hover:bg-gray-950"
>
          <div className="mb-16 flex items-center justify-between">
            <span className="text-sm text-gray-600 transition-all duration-500 group-hover:text-white">
  {service.number}
</span>

            <span className="text-xl text-gray-600 transition-transform duration-500 group-hover:translate-x-2 group-hover:text-white">
              →
            </span>
          </div>

          <h3 className="mb-4 text-xl font-semibold transition-transform duration-500 group-hover:translate-x-1">
  {service.title}
</h3>

          <p className="leading-7 text-gray-500 transition-colors duration-300 group-hover:text-gray-400">
            {service.text}
          </p>
        </div>
      ))}

    </div>

  </div>
</section>




{/* PROJECTS */}
<section
  id="projects"
  className="border-t border-gray-900 px-6 py-24"
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
        A selection of digital experiences and software solutions
        built with purpose.
      </p>
    </div>

    <div className="mt-12 grid gap-6 sm:gap-8 md:grid-cols-2">

      {/* PROJECT 1 */}
    <div className="group overflow-hidden rounded-2xl border border-gray-800 bg-gray-950 transition-all duration-500 hover:-translate-y-2 hover:border-gray-600 hover:shadow-2xl">

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
        Nexora
      </p>

      <h4 className="mt-4 text-2xl font-bold">
        Digital solutions.
      </h4>

      <p className="mt-2 max-w-xs text-xs leading-5 text-gray-600">
        Performance-focused solutions for businesses & startups.
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

</div>

        <div className="p-7">

          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-semibold">
              Nexora Website
            </h3>

            <span className="text-xl text-gray-500 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white">
              ↗
            </span>
          </div>

          <p className="mt-4 leading-7 text-gray-500 transition-colors duration-300 group-hover:text-gray-400">
            A modern website for Nexora, showcasing our services
            and digital solutions for businesses and startups.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            <span className="rounded-full border border-gray-800 px-3 py-1 text-xs text-gray-400 transition-colors group-hover:border-gray-600">
              Next.js
            </span>

            <span className="rounded-full border border-gray-800 px-3 py-1 text-xs text-gray-400 transition-colors group-hover:border-gray-600">
              Tailwind CSS
            </span>

            <span className="rounded-full border border-gray-800 px-3 py-1 text-xs text-gray-400 transition-colors group-hover:border-gray-600">
              Vercel
            </span>
          </div>

        </div>
      </div>

      {/* PROJECT 2 */}
      <div className="group overflow-hidden rounded-2xl border border-gray-800 bg-gray-950 transition-all duration-500 hover:-translate-y-2 hover:border-gray-600 hover:shadow-2xl">

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

    <p className="mt-3 text-3xl font-bold">
      Something new
    </p>

    <p className="mt-1 text-3xl font-bold text-gray-600">
      is coming.
    </p>

  </div>

  <span className="absolute right-6 top-6 rounded-full border border-gray-700 px-3 py-1 text-xs text-gray-500">
    02
  </span>

</div>

        <div className="p-7">

          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-semibold">
              Coming Soon
            </h3>

            <span className="text-xl text-gray-500 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white">
              ↗
            </span>
          </div>

          <p className="mt-4 leading-7 text-gray-500 transition-colors duration-300 group-hover:text-gray-400">
            We are constantly building new digital experiences.
            This space could be your project.
          </p>

          <div className="mt-6">
            <a
              href="#contact"
              className="inline-block text-sm text-white underline underline-offset-4 transition-all duration-300 hover:translate-x-1 hover:text-gray-400"
            >
              Start a project →
            </a>
          </div>

        </div>
      </div>

    </div>
  </div>
</section>


{/* ABOUT */}
<section
  id="about"
  className="border-t border-gray-900 px-6 py-24"
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
          <span className="block text-gray-500">
            with purpose.
          </span>
        </h2>

        <p className="mt-8 max-w-xl leading-8 text-gray-400">
          Nexora is a digital solutions studio focused on creating
          modern websites, mobile applications, and custom software
          for businesses and startups.
        </p>

        <p className="mt-5 max-w-xl leading-8 text-gray-500">
          We combine thoughtful design, reliable technology, and
          practical problem-solving to turn ideas into products
          people can actually use.
        </p>

      </div>

      {/* RIGHT */}
      <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-gray-900 bg-gray-900 sm:grid-cols-2">

        <div className="group relative bg-black p-8 transition-all duration-500 hover:-translate-y-1 hover:bg-gray-950">
          <p className="text-3xl font-bold transition-transform duration-300 group-hover:-translate-y-1">
            01
          </p>

          <p className="mt-3 text-sm text-gray-500">
            Strategy
          </p>
        </div>

        <div className="group relative bg-black p-8 transition-all duration-500 hover:-translate-y-1 hover:bg-gray-950">
          <p className="text-3xl font-bold transition-all duration-300 group-hover:-translate-y-1 group-hover:text-gray-300">
            02
          </p>

          <p className="mt-3 text-sm text-gray-500">
            Design
          </p>
        </div>

        <div className="group relative bg-black p-8 transition-all duration-500 hover:-translate-y-1 hover:bg-gray-950">
          <p className="text-3xl font-bold transition-transform duration-300 group-hover:-translate-y-1">
            03
          </p>

          <p className="mt-3 text-sm text-gray-500">
            Development
          </p>
        </div>

        <div className="group relative bg-black p-8 transition-all duration-500 hover:-translate-y-1 hover:bg-gray-950">
          <p className="text-3xl font-bold transition-transform duration-300 group-hover:-translate-y-1">
            04
          </p>

          <p className="mt-3 text-sm text-gray-500">
            Growth
          </p>
        </div>

      </div>

    </div>
  </div>
</section>



{/* CONTACT */}
<section
  id="contact"
  className="border-t border-gray-900 px-6 py-24"
>
  <div className="mx-auto max-w-7xl">

    <div className="rounded-3xl border border-gray-800 bg-gray-950 px-5 py-12 sm:px-10 sm:py-16 md:px-16">

      <div className="grid gap-12 md:grid-cols-2 md:items-center">

        {/* LEFT */}
        <div className="animate-[fadeInUp_0.9s_ease-out]">

          <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
            Lets work together
          </p>

          <h2 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl">
            Have an idea?
            <span className="block text-gray-500">
              Lets build it.
            </span>
          </h2>

          <p className="mt-6 max-w-xl leading-8 text-gray-500">
            Tell us what you are building, what you need, or where
            you are trying to go. Lets turn the idea into something
            real.
          </p>

        </div>


        {/* RIGHT */}
        <div className="flex flex-col gap-4">

          <a
            href="mailto:hello@nexora.dev"
            className="group flex items-center justify-between rounded-2xl border border-gray-800 px-6 py-5 transition-all duration-300 hover:-translate-y-1 hover:border-gray-600 hover:bg-black"
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

          <a
  href="mailto:hello@nexora.dev?subject=Project%20Inquiry"
  className="group flex items-center justify-between rounded-2xl bg-white px-6 py-5 text-black transition-all duration-300 hover:-translate-y-1 hover:bg-gray-200"
>
  <div>
    <p className="text-xs uppercase tracking-widest text-gray-500">
      Start a project
    </p>

    <p className="mt-1 text-sm font-medium">
      Lets talk about your idea
    </p>
  </div>

  <span className="text-xl transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
    ↗
  </span>
</a>

        </div>

      </div>

    </div>

  </div>
</section>


  
{/* FOOTER */}
<footer className="border-t border-gray-900 px-6 py-12">
  <div className="mx-auto max-w-7xl">

    <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">

      {/* BRAND */}
      <div>
        <h2 className="text-2xl font-bold">
          Nexora<span className="text-gray-500">.</span>
        </h2>

        <p className="mt-3 max-w-sm text-sm leading-6 text-gray-600">
          Performance-focused digital solutions for businesses
          and startups.
        </p>
      </div>


      {/* LINKS */}
      <div className="flex flex-wrap gap-6 text-sm text-gray-500">

        <a
          href="#home"
          className="transition-colors hover:text-white"
        >
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

        <a
          href="#about"
          className="transition-colors hover:text-white"
        >
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


    {/* BOTTOM */}
    <div className="mt-12 flex flex-col gap-3 border-t border-gray-900 pt-6 text-xs text-gray-600 sm:flex-row sm:items-center sm:justify-between">

      <p>
        © {new Date().getFullYear()} Nexora. All rights reserved.
      </p>

      <p>
        Built with purpose.
      </p>

    </div>

  </div>
</footer>



    </main>
  );
}