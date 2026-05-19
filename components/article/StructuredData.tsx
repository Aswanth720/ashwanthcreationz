interface Props {
  article: any
}

export default function StructuredData({
  article,
}: Props) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',

    headline: article.title,

    description: article.description,

    author: {
      '@type': 'Person',
      name: 'Ashwanth',
    },

    publisher: {
      '@type': 'Organization',
      name: 'AshwanthCreationz',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  )
}