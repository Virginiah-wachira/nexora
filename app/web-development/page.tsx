import Link from "next/link";

export default function WebDevelopmentPage() {
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
            Web Development
          </p>

          <h1 className="mt-6 text-5xl font-bold leading-tight sm:text-6xl md:text-7xl">
            Websites built to
            <span className="block text-gray-500">
              move businesses forward.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-400">
            Modern, responsive websites designed around your brand,
            your users, and your business goals.
          </p>
        </section>

        {/* SERVICES */}
        <section className="mt-24 border-t border-gray-900 pt-16">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
            What we build
          </p>

          <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-gray-900 bg-gray-900 sm:grid-cols-2">

            <div className="bg-black p-8">
              <p className="text-sm text-gray-600">01</p>
              <h2 className="mt-6 text-2xl font-semibold">
                Business Websites
              </h2>
              <p className="mt-4 leading-7 text-gray-500">
                Professional websites that communicate your brand
                clearly and turn visitors into customers.
              </p>
            </div>

            <div className="bg-black p-8">
              <p className="text-sm text-gray-600">02</p>
              <h2 className="mt-6 text-2xl font-semibold">
                Landing Pages
              </h2>
              <p className="mt-4 leading-7 text-gray-500">
                Focused landing pages designed around a specific
                product, service, campaign, or conversion goal.
              </p>
            </div>

            <div className="bg-black p-8">
              <p className="text-sm text-gray-600">03</p>
              <h2 className="mt-6 text-2xl font-semibold">
                Web Applications
              </h2>
              <p className="mt-4 leading-7 text-gray-500">
                Interactive web experiences built for more complex
                business workflows and digital products.
              </p>
            </div>

            <div className="bg-black p-8">
              <p className="text-sm text-gray-600">04</p>
              <h2 className="mt-6 text-2xl font-semibold">
                Responsive Design
              </h2>
              <p className="mt-4 leading-7 text-gray-500">
                Interfaces that look and work beautifully across
                phones, tablets, laptops, and desktops.
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
                Discover
              </h3>
              <p className="mt-3 leading-7 text-gray-500">
                We understand your idea, audience, goals, and
                requirements.
              </p>
            </div>

            <div>
              <span className="text-sm text-gray-600">02</span>
              <h3 className="mt-4 text-xl font-semibold">
                Build
              </h3>
              <p className="mt-3 leading-7 text-gray-500">
                We design and develop a fast, responsive,
                and polished digital experience.
              </p>
            </div>

            <div>
              <span className="text-sm text-gray-600">03</span>
              <h3 className="mt-4 text-xl font-semibold">
                Launch
              </h3>
              <p className="mt-3 leading-7 text-gray-500">
                Your website is tested, refined, deployed,
                and ready for your audience.
              </p>
            </div>

          </div>
        </section>

        {/* CTA */}
        <section className="mt-24 rounded-2xl border border-gray-800 bg-gray-950 p-8 sm:p-12">

          <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
            Have a project in mind?
          </p>

          <h2 className="mt-5 text-3xl font-bold sm:text-4xl">
            Let’s build it.
          </h2>

          <p className="mt-4 max-w-xl leading-7 text-gray-500">
            Tell us what you’re building and let’s turn the idea
            into a digital experience.
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