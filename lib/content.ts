import fs from "fs"
import path from "path"
import matter from "gray-matter"
import readingTime from "reading-time"

const contentPath = path.join(process.cwd(), "content")

export function getAllArticles() {
  const categories = fs.readdirSync(contentPath)

  let articles: any[] = []

  categories.forEach((category) => {
    const categoryPath = path.join(contentPath, category)

    if (!fs.statSync(categoryPath).isDirectory()) return

    const folders = fs.readdirSync(categoryPath)

    folders.forEach((slug) => {
      const articlePath = path.join(
        categoryPath,
        slug,
        "article.mdx"
      )

      if (!fs.existsSync(articlePath)) return

      const fileContent = fs.readFileSync(articlePath, "utf-8")

      const { data, content } = matter(fileContent)

      const stats = readingTime(content)

      articles.push({
        ...data,
        content,
        slug,
        category,
        readingTime: stats.text,
        url: `/articles/${category}/${slug}`,
      })
    })
  })

  return articles.sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() -
      new Date(a.publishedAt).getTime()
  )
}