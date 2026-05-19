const categories = [
  "MERN",
  "FastAPI",
  "AI",
  "DSA",
  "Deployment",
  "Hackathons",
]

export default function CategoryShowcase() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="flex items-center justify-between">
        <h2 className="text-5xl font-black">
          Explore Categories
        </h2>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {categories.map((category) => (
          <div
            key={category}
            className="
              rounded-3xl border border-zinc-800
              bg-gradient-to-b
              from-zinc-900 to-zinc-950
              p-10 transition
              hover:border-cyan-500
            "
          >
            <h3 className="text-3xl font-bold">
              {category}
            </h3>

            <p className="mt-4 text-zinc-400">
              Deep technical tutorials and
              engineering content.
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}