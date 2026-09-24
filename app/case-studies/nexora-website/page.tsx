import Link from "next/link";

export default function NexoraWebsiteCaseStudy() {
  return (
    <main className="min-h-screen bg-black px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">

        {/* BACK */}
        <Link
          href="/"
          className="text-sm text-gray-500 transition-colors hover:text-white"
        >
          ← Back to Nexora
        </Link>

        {/* HERO */}
        <section className="mt-20 max-w-4xl">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
            Case Study · 01
          </p>

          <h1 className="mt-6 text-5xl font-bold leading-tight sm:text-6xl md:text-7xl">
            Nexora Website
            <span className="block text-gray-500">
              Digital solutions, reimagined.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-400">
            A modern digital solutions website designed to showcase
            Nexora’s services, capabilities, and vision through a clean,
            responsive, and interactive experience.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <a
              href="https://nexora-mu-smoky.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-all duration-300 hover:-translate-y-1 hover:bg-gray-200"
            >
              Live Website →
            </a>

            <a
              href="https://github.com/Virginiah-wachira/nexora"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-gray-800 px-6 py-3 text-sm font-medium text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-gray-600 hover:text-white"
            >
              View GitHub →
            </a>

          </div>
        </section>

        {/* OVERVIEW */}
        <section className="mt-24 border-t border-gray-900 pt-16">

          <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
            Overview
          </p>

          <div className="mt-10 grid gap-12 md:grid-cols-2">

            <div>
              <h2 className="text-2xl font-semibold">
                The idea
              </h2>

              <p className="mt-5 leading-8 text-gray-500">
                Nexora needed a digital presence that could communicate
                its services clearly while presenting the brand as a
                modern technology company.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">
                The approach
              </h2>

              <p className="mt-5 leading-8 text-gray-500">
                The website was designed around a minimal dark aesthetic,
                strong typography, responsive layouts, subtle animations,
                and clear calls to action.
              </p>
            </div>

          </div>
        </section>

        {/* WHAT I BUILT */}
        <section className="mt-24 border-t border-gray-900 pt-16">

          <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
            What I built
          </p>

          <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-gray-900 bg-gray-900 sm:grid-cols-2">

            <div className="bg-black p-8">
              <span className="text-sm text-gray-600">01</span>

              <h3 className="mt-6 text-xl font-semibold">
                Responsive Interface
              </h3>

              <p className="mt-4 leading-7 text-gray-500">
                A responsive interface designed to provide a polished
                experience across desktop, tablet, and mobile devices.
              </p>
            </div>

            <div className="bg-black p-8">
              <span className="text-sm text-gray-600">02</span>

              <h3 className="mt-6 text-xl font-semibold">
                Service Pages
              </h3>

              <p className="mt-4 leading-7 text-gray-500">
                Dedicated pages for web development, mobile apps,
                custom software, and AI & automation.
              </p>
            </div>

            <div className="bg-black p-8">
              <span className="text-sm text-gray-600">03</span>

              <h3 className="mt-6 text-xl font-semibold">
                Contact System
              </h3>

              <p className="mt-4 leading-7 text-gray-500">
                A working contact form connected through Formspree,
                alongside direct WhatsApp communication.
              </p>
            </div>

            <div className="bg-black p-8">
              <span className="text-sm text-gray-600">04</span>

              <h3 className="mt-6 text-xl font-semibold">
                Deployment
              </h3>

              <p className="mt-4 leading-7 text-gray-500">
                The finished website was deployed to Vercel and connected
                to GitHub for continuous deployment.
              </p>
            </div>

          </div>
        </section>

        {/* TECHNOLOGY */}
        <section className="mt-24 border-t border-gray-900 pt-16">

          <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
            Technology
          </p>

          <div className="mt-8 flex flex-wrap gap-3">

            {[
              "Next.js",
              "React",
              "TypeScript",
              "Tailwind CSS",
              "Formspree",
              "GitHub",
              "Vercel",
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-gray-800 px-5 py-2 text-sm text-gray-500"
              >
                {tech}
              </span>
            ))}

          </div>
        </section>

        {/* CTA */}
        <section className="mt-24 rounded-2xl border border-gray-800 bg-gray-950 p-8 sm:p-12">

          <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
            Have an idea?
          </p>

          <h2 className="mt-5 text-3xl font-bold sm:text-4xl">
            Let’s build yours.
          </h2>

          <p className="mt-4 max-w-xl leading-7 text-gray-500">
            Bring your idea to Nexora and let’s turn it into something
            real.
          </p>

          <Link
            href="/#contact"
            className="mt-8 inline-block rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-all duration-300 hover:-translate-y-1 hover:bg-gray-200"
          >
            Start a Project →
          </Link>

        </section>

      </div>
    </main>
  );
}