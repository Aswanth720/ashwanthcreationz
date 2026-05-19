import Link from "next/link"

import ThemeToggle from "@/components/ui/ThemeToggle"

export default function Navbar() {
  return (
    <header
      className="
        sticky top-0 z-50
        border-b border-zinc-800
        bg-black/70 backdrop-blur-xl
      "
    >
      <nav
        className="
          mx-auto flex max-w-7xl
          items-center justify-between
          px-6 py-5
        "
      >
        <Link
          href="/"
          className="
            text-2xl font-black
            tracking-tight
          "
        >
          AshwanthCreationz
        </Link>

        <div className="flex items-center gap-6">
          <div
            className="
              hidden gap-6 text-sm
              text-zinc-300 md:flex
            "
          >
            <Link href="/">Home</Link>
            <Link href="/articles">Articles</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/about">About</Link>
          </div>

          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}