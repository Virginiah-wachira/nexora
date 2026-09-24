import Link from "next/link";

export default function MobileAppsPage() {
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
            Mobile App Development
          </p>

          <h1 className="mt-6 text-5xl font-bold leading-tight sm:text-6xl md:text-7xl">
            Apps designed for
            <span className="block text-gray-500">
              people on the move.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-400">
            Modern mobile applications built to deliver smooth,
            reliable, and engaging experiences across devices.
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
                Business Apps
              </h2>

              <p className="mt-4 leading-7 text-gray-500">
                Mobile applications that help businesses connect
                with customers and simplify everyday operations.
              </p>
            </div>

            <div className="bg-black p-8">
              <p className="text-sm text-gray-600">02</p>

              <h2 className="mt-6 text-2xl font-semibold">
                Customer Apps
              </h2>

              <p className="mt-4 leading-7 text-gray-500">
                Intuitive mobile experiences designed around your
                customers and their everyday needs.
              </p>
            </div>

            <div className="bg-black p-8">
              <p className="text-sm text-gray-600">03</p>

              <h2 className="mt-6 text-2xl font-semibold">
                Cross-Platform Apps
              </h2>

              <p className="mt-4 leading-7 text-gray-500">
                Efficient applications built to work across
                multiple platforms while maintaining a consistent
                experience.
              </p>
            </div>

            <div className="bg-black p-8">
              <p className="text-sm text-gray-600">04</p>

              <h2 className="mt-6 text-2xl font-semibold">
                App Interfaces
              </h2>

              <p className="mt-4 leading-7 text-gray-500">
                Clean, modern interfaces focused on usability,
                accessibility, and a polished experience.
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
                Plan
              </h3>

              <p className="mt-3 leading-7 text-gray-500">
                We define the idea, users, features, and goals
                before development begins.
              </p>
            </div>

            <div>
              <span className="text-sm text-gray-600">02</span>

              <h3 className="mt-4 text-xl font-semibold">
                Develop
              </h3>

              <p className="mt-3 leading-7 text-gray-500">
                We turn the concept into a functional and
                responsive mobile experience.
              </p>
            </div>

            <div>
              <span className="text-sm text-gray-600">03</span>

              <h3 className="mt-4 text-xl font-semibold">
                Launch
              </h3>

              <p className="mt-3 leading-7 text-gray-500">
                The application is tested, refined, and prepared
                for release.
              </p>
            </div>

          </div>
        </section>

        {/* CTA */}
        <section className="mt-24 rounded-2xl border border-gray-800 bg-gray-950 p-8 sm:p-12">

          <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
            Have an app idea?
          </p>

          <h2 className="mt-5 text-3xl font-bold sm:text-4xl">
            Let’s build it.
          </h2>

          <p className="mt-4 max-w-xl leading-7 text-gray-500">
            Bring your idea to Nexora and let’s turn it into a
            mobile experience people will want to use.
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