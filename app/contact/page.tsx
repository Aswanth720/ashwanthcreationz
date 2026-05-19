export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-20 text-white">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-5xl font-black">
          Contact
        </h1>

        <p className="mt-6 text-lg text-zinc-400">
          Reach out for collaborations, projects,
          internships, or technical discussions.
        </p>

        <div className="mt-12 space-y-6">
          <div>
            <h2 className="text-xl font-bold">
              Email
            </h2>

            <p className="mt-2 text-zinc-400">
              ashwanthyash3@gmail.com
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold">
              LinkedIn
            </h2>

            <a
              href="https://www.linkedin.com/in/aswanthkumar12/"
              target="_blank"
              className="mt-2 inline-block text-cyan-400 hover:text-cyan-300"
            >
              Visit Profile
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}