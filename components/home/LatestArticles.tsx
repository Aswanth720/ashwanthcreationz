import ArticleCard from '../article/ArticleCard'

export default function LatestArticles() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="flex items-center justify-between">
        <h2 className="text-4xl font-bold">
          Latest Articles
        </h2>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <ArticleCard
          title="JWT Authentication in MERN"
          description="Complete guide to JWT auth using MERN stack."
          slug="/articles/mern/jwt-authentication-guide"
          category="MERN"
        />

        <ArticleCard
          title="FastAPI Beginner Guide"
          description="Learn FastAPI from scratch with practical examples."
          slug="/articles/fastapi/fastapi-beginner-guide"
          category="FASTAPI"
        />

        <ArticleCard
          title="Top DSA Array Problems"
          description="Important array interview questions for placements."
          slug="/articles/dsa/top-array-problems"
          category="DSA"
        />
      </div>
    </section>
  )
}