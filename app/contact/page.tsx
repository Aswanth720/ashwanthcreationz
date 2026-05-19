import Link from "next/link"

export default function ContactPage() {
  return (
    <main
      className="
        min-h-screen
        bg-black
        px-6 py-24
        text-white
      "
    >
      <div className="mx-auto max-w-5xl">
        {/* Header */}

        <div className="text-center">
          <span
            className="
              rounded-full
              border border-cyan-500/20
              bg-cyan-500/10
              px-4 py-2 text-sm
              text-cyan-400
            "
          >
            Contact The Batcave
          </span>

          <h1
            className="
              mt-8 text-6xl
              font-black tracking-tight
            "
          >
            Let’s Build Something
            <span className="text-cyan-400">
              {" "}Powerful.
            </span>
          </h1>

          <p
            className="
              mx-auto mt-6
              max-w-2xl text-lg
              leading-8 text-zinc-400
            "
          >
            Open to internships, collaborations,
            freelance projects, hackathons,
            technical discussions, and software
            engineering opportunities.
          </p>
        </div>

        {/* Contact Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {/* Email */}

          <div
            className="
              rounded-[32px]
              border border-zinc-800
              bg-zinc-900 p-10
              transition duration-300
              hover:border-cyan-500
            "
          >
            <div className="text-5xl">
              📧
            </div>

            <h2
              className="
                mt-6 text-3xl
                font-black
              "
            >
              Email
            </h2>

            <p
              className="
                mt-4 text-zinc-400
              "
            >
              Reach out directly for
              opportunities or collaborations.
            </p>

            <a
              href="mailto:ashwanthyash3@gmail.com"
              className="
                mt-8 inline-block
                text-lg text-cyan-400
                hover:text-cyan-300
              "
            >
              ashwanthyash3@gmail.com
            </a>
          </div>

          {/* LinkedIn */}

          <div
            className="
              rounded-[32px]
              border border-zinc-800
              bg-zinc-900 p-10
              transition duration-300
              hover:border-cyan-500
            "
          >
            <div className="text-5xl">
              💼
            </div>

            <h2
              className="
                mt-6 text-3xl
                font-black
              "
            >
              LinkedIn
            </h2>

            <p
              className="
                mt-4 text-zinc-400
              "
            >
              Connect professionally and
              follow my engineering journey.
            </p>

            <Link
              href="https://www.linkedin.com/in/aswanthkumar12/"
              target="_blank"
              className="
                mt-8 inline-block
                text-lg text-cyan-400
                hover:text-cyan-300
              "
            >
              Visit LinkedIn →
            </Link>
          </div>
        </div>

        {/* Bottom CTA */}

        <div
          className="
            mt-20 rounded-[40px]
            border border-cyan-500/20
            bg-gradient-to-br
            from-cyan-500/10
            to-blue-500/10
            p-12 text-center
          "
        >
          <h2
            className="
              text-4xl font-black
            "
          >
            Building The Future,
            One Project At A Time 🦇
          </h2>

          <p
            className="
              mx-auto mt-6
              max-w-2xl text-lg
              text-zinc-400
            "
          >
            AshwanthCreationz is focused on
            engineering scalable systems,
            AI-powered applications,
            developer education,
            and technical storytelling.
          </p>
        </div>
      </div>
    </main>
  )
}