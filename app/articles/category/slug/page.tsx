import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import StructuredData from '@/components/article/StructuredData'
import RelatedArticles from '@/components/article/RelatedArticles'

interface Props {
  params: {
    category: string
    slug: string
  }
}

function formatTitle(slug: string) {
  return slug
    .split('-')
    .map(
      word =>
        word.charAt(0).toUpperCase() +
        word.slice(1)
    )
    .join(' ')
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const title = formatTitle(params.slug)

  return {
    title: `${title} | AshwanthCreationz`,
    description:
      'Technical tutorials, AI systems, MERN stack development, DevOps, FastAPI, placement preparation, and software engineering articles.',
    keywords: [
      'Next.js',
      'AI',
      'MERN',
      'FastAPI',
      'DevOps',
      'DSA',
      'Software Engineering',
    ],
  }
}
export default function ArticlePage({
  params,
}: Props) {
  const title = formatTitle(params.slug)

  const data = {
    title,
    category: params.category,
    slug: params.slug,
    author: 'Ashwanth',
    date: 'May 2026',
    readingTime: '8 min',
    description: 'Learn modern software engineering concepts, scalable application development, AI integrations, and production-ready development workflows through practical tutorials and real-world projects.',
    coverImage: '/article-cover.svg',
  }

  return (
    <>
      <StructuredData article={data} />
      <main className="min-h-screen bg-black text-white">
      {/* HERO SECTION */}
      <section className="border-b border-zinc-800">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <Link
            href="/articles"
            className="mb-8 inline-block text-sm text-cyan-400 transition hover:text-cyan-300"
          >
            ← Back to Articles
          </Link>

          <div className="mb-4 inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1 text-sm font-semibold uppercase tracking-widest text-cyan-400">
            {params.category}
          </div>

          <h1 className="max-w-4xl text-5xl font-black leading-tight md:text-6xl">
            {title}
          </h1>

          <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-zinc-400">
            <span>By Ashwanth</span>
            <span>•</span>
            <span>May 2026</span>
            <span>•</span>
            <span>8 min read</span>
          </div>

          <p className="mt-10 max-w-3xl text-xl leading-relaxed text-zinc-300">
            Learn modern software engineering concepts,
            scalable application development, AI
            integrations, and production-ready
            development workflows through practical
            tutorials and real-world projects.
          </p>

          <div
            className="
              relative mt-10 h-[400px]
              overflow-hidden rounded-[32px]
            "
          >
            <Image
              src={data.coverImage}
              alt={data.title}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ARTICLE CONTENT */}
      <article className="mx-auto max-w-4xl px-6 py-20">
        <div className="prose prose-invert prose-zinc max-w-none">
          <h2>Introduction</h2>

          <p>
            Welcome to AshwanthCreationz — a modern
            technical publication platform focused on
            practical development, AI engineering,
            DevOps, and full-stack software systems.
          </p>

          <p>
            This article page is dynamically generated
            using the Next.js App Router and dynamic
            route parameters.
          </p>

          <blockquote>
            “Build projects that teach skills,
            demonstrate capability, and solve
            real-world problems.”
          </blockquote>

          <h2>Why This Platform Exists</h2>

          <p>
            AshwanthCreationz is designed as a
            long-term learning and content ecosystem
            where tutorials, engineering concepts,
            deployment guides, placement preparation,
            and AI systems are documented in detail.
          </p>

          <ul>
            <li>AI Project Tutorials</li>
            <li>MERN Stack Development</li>
            <li>FastAPI Backend Systems</li>
            <li>DevOps & Deployment</li>
            <li>DSA & Placement Preparation</li>
            <li>Open Source Contributions</li>
          </ul>

          <h2>Tech Stack</h2>

          <p>
            The platform is built using modern web
            technologies for scalability and
            performance.
          </p>

          <pre>
            <code>
{`const techStack = {
  frontend: "Next.js 15",
  styling: "Tailwind CSS",
  content: "MDX + Contentlayer",
  backend: "Node.js / FastAPI",
  deployment: "Vercel",
  database: "PostgreSQL",
}`}
            </code>
          </pre>

          <h2>Dynamic Routing</h2>

          <p>
            This page uses nested dynamic routing:
          </p>

          <pre>
            <code>
{`app/articles/[category]/[slug]/page.tsx`}
            </code>
          </pre>

          <p>
            Example URLs:
          </p>

          <pre>
            <code>
{`/articles/ai/building-rag-system
/articles/web/nextjs-guide
/articles/devops/docker-basics`}
            </code>
          </pre>

          <h2>Future Improvements</h2>

          <p>
            The next version of the platform will
            include:
          </p>

          <ul>
            <li>Real MDX article rendering</li>
            <li>Syntax highlighting</li>
            <li>Article search</li>
            <li>Tag filtering</li>
            <li>Dark/light themes</li>
            <li>Reading progress bar</li>
            <li>Newsletter system</li>
            <li>Comment system</li>
            <li>Analytics dashboard</li>
          </ul>

          <h2>Conclusion</h2>

          <p>
            This is the foundation of a scalable
            developer publication platform that can
            grow into a portfolio, blog, learning
            hub, and personal brand ecosystem.
          </p>
        </div>
      </article>

      <RelatedArticles
        category={params.category}
        currentSlug={params.slug}
      />

      {/* RELATED ARTICLES */}
      <section className="border-t border-zinc-800">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="mb-10 text-3xl font-bold">
            Related Articles
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            <Link
              href="/articles/ai/building-rag-system"
              className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition hover:border-cyan-500"
            >
              <div className="mb-3 text-sm text-cyan-400">
                AI
              </div>

              <h3 className="text-xl font-bold">
                Building RAG Systems
              </h3>

              <p className="mt-3 text-sm text-zinc-400">
                Learn retrieval augmented generation
                pipelines using vector databases and
                LLMs.
              </p>
            </Link>

            <Link
              href="/articles/web/nextjs-app-router"
              className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition hover:border-cyan-500"
            >
              <div className="mb-3 text-sm text-cyan-400">
                WEB
              </div>

              <h3 className="text-xl font-bold">
                Next.js App Router Guide
              </h3>

              <p className="mt-3 text-sm text-zinc-400">
                Understand layouts, server
                components, metadata, and dynamic
                routing.
              </p>
            </Link>

            <Link
              href="/articles/devops/docker-for-beginners"
              className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition hover:border-cyan-500"
            >
              <div className="mb-3 text-sm text-cyan-400">
                DEVOPS
              </div>

              <h3 className="text-xl font-bold">
                Docker For Beginners
              </h3>

              <p className="mt-3 text-sm text-zinc-400">
                Containerize applications and deploy
                them efficiently using Docker.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </main>
    </>
  )
}
