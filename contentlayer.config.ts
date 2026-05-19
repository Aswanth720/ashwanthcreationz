import { defineDocumentType, makeSource } from '@contentlayer/source-files'

export const Article = defineDocumentType(() => ({
  name: 'Article',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',

  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    category: { type: 'string', required: true },
    publishedAt: { type: 'date', required: true },
    tags: { type: 'list', of: { type: 'string' } },
  },

  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) =>
        doc._raw.flattenedPath.replace(/^content\//, ''),
    },

    url: {
      type: 'string',
      resolve: (doc) => `/articles/${doc._raw.flattenedPath}`,
    },
  },
}))

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Article],
})