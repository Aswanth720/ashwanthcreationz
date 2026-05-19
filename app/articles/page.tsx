import Link from 'next/link'

const articles = [
  {
    title: 'Building RAG Systems',
    description:
      'Learn how retrieval augmented generation works using vector databases and LLMs.',
    category: 'AI',
    slug: 'building-rag-systems',
  },
  {
    title: 'Next.js App Router Guide',
    description:
      'Understand layouts, server components, metadata, and routing in Next.js.',
    category: 'WEB',
    slug: 'nextjs-app-router-guide',
  },
  {
    title: 'Docker For Beginners',
    description:
      'Learn containerization, Docker images, and deployment workflows.',
    category: 'DEVOPS',
    slug: 'docker-for-beginners',
  },
]

export default function ArticlesPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-20 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-black">
            Articles
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-zinc-400">
            Tutorials, engineering concepts, AI
            systems, full-stack development,
            DevOps, placement preparation, and
            modern software engineering workflows.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map(article => (
            <Link
              key={article.slug}
              href={`/articles/${article.category.toLowerCase()}/${article.slug}`}
              className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8 transition hover:border-cyan-500"
            >
              <div className="mb-4 inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-sm text-cyan-400">
                {article.category}
              </div>

              <h2 className="text-2xl font-bold">
                {article.title}
              </h2>

              <p className="mt-4 leading-relaxed text-zinc-400">
                {article.description}
              </p>

              <div className="mt-8 text-cyan-400">
                Read Article →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}