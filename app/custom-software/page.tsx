import Link from "next/link";

export default function CustomSoftwarePage() {
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
            Custom Software Development
          </p>

          <h1 className="mt-6 text-5xl font-bold leading-tight sm:text-6xl md:text-7xl">
            Software built around
            <span className="block text-gray-500">
              the way you work.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-400">
            Tailored software solutions designed to solve real business
            problems, simplify workflows, and scale with your needs.
          </p>
        </section>

        {/* WHAT WE BUILD */}
        <section className="mt-24 border-t border-gray-900 pt-16">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
            What we build
          </p>

          <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-gray-900 bg-gray-900 sm:grid-cols-2">

            <div className="bg-black p-8">
              <p className="text-sm text-gray-600">01</p>

              <h2 className="mt-6 text-2xl font-semibold">
                Business Systems
              </h2>

              <p className="mt-4 leading-7 text-gray-500">
                Custom systems built to manage operations, customers,
                teams, and everyday business processes.
              </p>
            </div>

            <div className="bg-black p-8">
              <p className="text-sm text-gray-600">02</p>

              <h2 className="mt-6 text-2xl font-semibold">
                Management Platforms
              </h2>

              <p className="mt-4 leading-7 text-gray-500">
                Centralized platforms that bring important business
                information, workflows, and tools into one place.
              </p>
            </div>

            <div className="bg-black p-8">
              <p className="text-sm text-gray-600">03</p>

              <h2 className="mt-6 text-2xl font-semibold">
                Internal Tools
              </h2>

              <p className="mt-4 leading-7 text-gray-500">
                Practical software that helps teams automate repetitive
                tasks and work more efficiently.
              </p>
            </div>

            <div className="bg-black p-8">
              <p className="text-sm text-gray-600">04</p>

              <h2 className="mt-6 text-2xl font-semibold">
                Scalable Platforms
              </h2>

              <p className="mt-4 leading-7 text-gray-500">
                Flexible digital products engineered to grow alongside
                your users, data, and business.
              </p>
            </div>

          </div>
        </section>

        {/* PROCESS */}
        <section className="mt-24 border-t border-gray-900 pt-16">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
            Our process
          </p>

          <div className="mt-10 grid gap-8 md:grid-cols-3">

            <div>
              <span className="text-sm text-gray-600">01</span>

              <h3 className="mt-4 text-xl font-semibold">
                Understand
              </h3>

              <p className="mt-3 leading-7 text-gray-500">
                We learn how your business works, identify the problem,
                and define what the software needs to achieve.
              </p>
            </div>

            <div>
              <span className="text-sm text-gray-600">02</span>

              <h3 className="mt-4 text-xl font-semibold">
                Engineer
              </h3>

              <p className="mt-3 leading-7 text-gray-500">
                We design and develop a tailored system around your
                requirements, workflows, and users.
              </p>
            </div>

            <div>
              <span className="text-sm text-gray-600">03</span>

              <h3 className="mt-4 text-xl font-semibold">
                Scale
              </h3>

              <p className="mt-3 leading-7 text-gray-500">
                Your software is refined and prepared to support your
                business as it grows.
              </p>
            </div>

          </div>
        </section>

        {/* CTA */}
        <section className="mt-24 rounded-2xl border border-gray-800 bg-gray-950 p-8 sm:p-12">

          <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
            Need something custom?
          </p>

          <h2 className="mt-5 text-3xl font-bold sm:text-4xl">
            Let’s build it.
          </h2>

          <p className="mt-4 max-w-xl leading-7 text-gray-500">
            Tell us what you need and let’s turn your business process
            into a system built specifically for you.
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