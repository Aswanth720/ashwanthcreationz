export default function Newsletter() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-24">
      <div
        className="
          rounded-[40px]
          border border-zinc-800
          bg-zinc-900 p-12 text-center
        "
      >
        <h2 className="text-5xl font-black">
          Stay Updated
        </h2>

        <p className="mt-6 text-lg text-zinc-400">
          Get new tutorials, AI projects,
          deployment guides, and placement prep
          articles directly in your inbox.
        </p>

        <div className="mt-10 flex flex-col gap-4 md:flex-row">
          <input
            type="email"
            placeholder="Enter your email"
            className="
              flex-1 rounded-2xl
              border border-zinc-700
              bg-zinc-950 px-5 py-4
              outline-none
            "
          />

          <button
            className="
              rounded-2xl bg-white
              px-8 py-4 font-semibold text-black
            "
          >
            Subscribe
          </button>
        </div>
      </div>
    </section>
  )
}