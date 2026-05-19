export default function FeaturedProject() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div
        className="
          rounded-[40px]
          border border-zinc-800
          bg-gradient-to-br
          from-cyan-500/10
          to-blue-500/10
          p-12
        "
      >
        <span className="text-cyan-400">
          FEATURED PROJECT
        </span>

        <h2 className="mt-5 text-5xl font-black">
          RawMate
        </h2>

        <p className="mt-6 max-w-3xl text-lg text-zinc-400">
          Predictive inventory and raw material
          sourcing platform built for Indian street
          vendors during hackathon development.
        </p>

        <div className="mt-10 flex gap-5">
          <button
            className="
              rounded-2xl bg-white
              px-6 py-3 font-semibold text-black
            "
          >
            View Case Study
          </button>

          <button
            className="
              rounded-2xl border border-zinc-700
              px-6 py-3
            "
          >
            Read Breakdown
          </button>
        </div>
      </div>
    </section>
  )
}