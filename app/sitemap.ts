import { getAllArticles } from '../lib/content'

export default function sitemap() {
  const articles = getAllArticles()

  const articleUrls = articles.map((article) => ({
    url: `https://ashwanthcreationz.com${article.url}`,
    lastModified: new Date(),
  }))

  return [
    {
      url: 'https://ashwanthcreationz.com',
      lastModified: new Date(),
    },

    ...articleUrls,
  ]
}