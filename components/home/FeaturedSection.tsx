export default function FeaturedSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid gap-8 md:grid-cols-3">
        <div
          className="
            rounded-3xl border border-zinc-800
            bg-zinc-900 p-8
          "
        >
          <h3 className="text-2xl font-bold">
            50+
          </h3>

          <p className="mt-3 text-zinc-400">
            Planned technical articles and tutorials
          </p>
        </div>

        <div
          className="
            rounded-3xl border border-zinc-800
            bg-zinc-900 p-8
          "
        >
          <h3 className="text-2xl font-bold">
            AI + MERN
          </h3>

          <p className="mt-3 text-zinc-400">
            Modern full-stack and AI engineering
            content
          </p>
        </div>

        <div
          className="
            rounded-3xl border border-zinc-800
            bg-zinc-900 p-8
          "
        >
          <h3 className="text-2xl font-bold">
            Placement Prep
          </h3>

          <p className="mt-3 text-zinc-400">
            DSA, interview rounds, coding patterns,
            and career preparation
          </p>
        </div>
      </div>
    </section>
  )
}