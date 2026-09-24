import Link from "next/link";

export default function AIAutomationPage() {
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
            AI & Automation
          </p>

          <h1 className="mt-6 text-5xl font-bold leading-tight sm:text-6xl md:text-7xl">
            Smarter systems for
            <span className="block text-gray-500">
              a faster way of working.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-400">
            Intelligent tools and automated workflows designed to reduce
            repetitive work, improve efficiency, and help businesses move
            faster.
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
                Workflow Automation
              </h2>

              <p className="mt-4 leading-7 text-gray-500">
                Automate repetitive business processes so your team can
                spend less time on manual tasks.
              </p>
            </div>

            <div className="bg-black p-8">
              <p className="text-sm text-gray-600">02</p>

              <h2 className="mt-6 text-2xl font-semibold">
                AI-Powered Tools
              </h2>

              <p className="mt-4 leading-7 text-gray-500">
                Intelligent tools designed to help businesses process
                information, generate insights, and work more efficiently.
              </p>
            </div>

            <div className="bg-black p-8">
              <p className="text-sm text-gray-600">03</p>

              <h2 className="mt-6 text-2xl font-semibold">
                Smart Integrations
              </h2>

              <p className="mt-4 leading-7 text-gray-500">
                Connect your existing tools and systems to create
                smoother, more efficient digital workflows.
              </p>
            </div>

            <div className="bg-black p-8">
              <p className="text-sm text-gray-600">04</p>

              <h2 className="mt-6 text-2xl font-semibold">
                Intelligent Systems
              </h2>

              <p className="mt-4 leading-7 text-gray-500">
                Custom digital systems that combine automation,
                data, and intelligent functionality around your needs.
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
                Identify
              </h3>

              <p className="mt-3 leading-7 text-gray-500">
                We identify repetitive tasks, bottlenecks, and
                opportunities where technology can make an impact.
              </p>
            </div>

            <div>
              <span className="text-sm text-gray-600">02</span>

              <h3 className="mt-4 text-xl font-semibold">
                Automate
              </h3>

              <p className="mt-3 leading-7 text-gray-500">
                We design and build intelligent workflows around your
                business processes and tools.
              </p>
            </div>

            <div>
              <span className="text-sm text-gray-600">03</span>

              <h3 className="mt-4 text-xl font-semibold">
                Optimize
              </h3>

              <p className="mt-3 leading-7 text-gray-500">
                We refine the system so your workflows become faster,
                simpler, and easier to manage.
              </p>
            </div>

          </div>
        </section>

        {/* CTA */}
        <section className="mt-24 rounded-2xl border border-gray-800 bg-gray-950 p-8 sm:p-12">

          <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
            Ready to work smarter?
          </p>

          <h2 className="mt-5 text-3xl font-bold sm:text-4xl">
            Let’s automate it.
          </h2>

          <p className="mt-4 max-w-xl leading-7 text-gray-500">
            Tell us what takes too much time and let’s build a smarter
            way to get it done.
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