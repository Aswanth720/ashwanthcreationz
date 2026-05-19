import Link from 'next/link'

const projects = [
  {
    title: 'TechXplain',
    description:
      'An educational platform explaining AI, Blockchain, Quantum Computing, and Cybersecurity concepts.',
    category: 'Education',
    href: '/projects/techxplain',
  },
  {
    title: 'RawMate',
    description:
      'A predictive inventory and price forecasting platform for Indian street food vendors.',
    category: 'Hackathon',
    href: '/projects/rawmate',
  },
  {
    title: 'AI Resume Analyzer',
    description:
      'An AI-powered system for resume analysis, ATS scoring, and career recommendations.',
    category: 'AI',
    href: '/projects/ai-resume-analyzer',
  },
]

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-20 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-black">
            Projects
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-zinc-400">
            A collection of software engineering,
            AI, web development, and hackathon
            projects built to solve real-world
            problems and improve technical skills.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map(project => (
            <Link
              key={project.title}
              href={project.href}
              className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8 transition hover:border-cyan-500"
            >
              <div className="mb-4 inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-sm text-cyan-400">
                {project.category}
              </div>

              <h2 className="text-2xl font-bold">
                {project.title}
              </h2>

              <p className="mt-4 leading-relaxed text-zinc-400">
                {project.description}
              </p>

              <div className="mt-8 text-cyan-400">
                View Project →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}