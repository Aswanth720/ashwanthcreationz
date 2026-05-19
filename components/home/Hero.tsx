"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function Hero() {
  return (
    <section
      className="
        relative overflow-hidden
        border-b border-zinc-800
      "
    >
      {/* Radial Glow */}

      <div
        className="
          absolute inset-0
          bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.15),transparent_40%)]
        "
      />

      {/* Grid Background */}

      <div
        className="
          absolute inset-0
          bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]
          bg-[size:80px_80px]
        "
      />

      {/* Content */}

      <div
        className="
          relative mx-auto
          flex min-h-[82vh]
          max-w-7xl flex-col
          items-center justify-center
          px-6 text-center
        "
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          {/* Glow Behind Heading */}

          <div
            className="
              absolute inset-0
              bg-cyan-500/10
              blur-3xl
            "
          />

          {/* Badge */}

          <div
            className="
              relative inline-flex
              rounded-full
              border border-cyan-500/20
              bg-cyan-500/10
              px-5 py-2
              text-sm text-cyan-400
            "
          >
            MERN • AI • FastAPI • DSA • DevOps
          </div>

          {/* Heading */}

          <h1
            className="
              relative mt-10
              text-6xl font-black
              leading-tight tracking-tight
              md:text-8xl
            "
          >
            Build.
            <span
              className="
                bg-gradient-to-r
                from-cyan-400
                to-blue-500
                bg-clip-text
                text-transparent
              "
            >
              {" "}Learn.
            </span>
            Scale.
          </h1>

          {/* Description */}

          <p
            className="
              relative mx-auto
              mt-8 max-w-3xl
              text-xl leading-9
              text-zinc-400
            "
          >
            Real-world tutorials, AI projects,
            placement preparation, deployment guides,
            MERN stack development, FastAPI systems,
            and hackathon engineering experiences.
          </p>

          {/* Buttons */}

          <div
            className="
              relative mt-12
              flex flex-wrap
              justify-center gap-5
            "
          >
            <Link
              href="/articles"
              className="
                rounded-2xl bg-white
                px-8 py-4 font-semibold
                text-black transition
                hover:scale-105
              "
            >
              Explore Articles
            </Link>

            <Link
              href="/projects"
              className="
                rounded-2xl
                border border-zinc-700
                px-8 py-4 transition
                hover:bg-zinc-900
              "
            >
              View Projects
            </Link>
          </div>

          {/* Social Proof Strip */}

          <div
            className="
              relative mt-16
              flex flex-wrap
              items-center justify-center
              gap-6 text-sm
              text-zinc-500
            "
          >
            <span>AI Engineering</span>

            <span>•</span>

            <span>Full Stack Systems</span>

            <span>•</span>

            <span>Placement Preparation</span>

            <span>•</span>

            <span>Hackathon Builds</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}