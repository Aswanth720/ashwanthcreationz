import Link from 'next/link'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h1 className="text-5xl font-black">About AshwanthCreationz</h1>
        <p className="mt-6 text-zinc-400">
          A personal publication platform for modern software engineering, AI, DevOps, and full-stack development insights.
        </p>
        <Link href="/" className="mt-10 inline-block text-cyan-400 hover:text-cyan-300">
          ← Back to home
        </Link>
      </div>
    </main>
  )
}
