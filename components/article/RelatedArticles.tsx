import { getAllArticles } from "@/lib/content"
import ArticleCard from "./ArticleCard"

interface Props {
  category: string
  currentSlug: string
}

export default function RelatedArticles({
  category,
  currentSlug,
}: Props) {
  const articles = getAllArticles()

  const related = articles
    .filter(
      (article) =>
        article.category === category &&
        article.slug !== currentSlug
    )
    .slice(0, 3)

  if (!related.length) return null

  return (
    <section className="mt-24">
      <h2 className="text-4xl font-black">
        Related Articles
      </h2>

      <div className="mt-10 grid gap-8 md:grid-cols-3">
        {related.map((article, i) => (
          <ArticleCard
            key={i}
            title={article.title}
            description={article.description}
            slug={article.url}
            category={article.category}
            readingTime={article.readingTime}
            coverImage={article.coverImage}
          />
        ))}
      </div>
    </section>
  )
}