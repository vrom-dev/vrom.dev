import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'

import fs from 'fs'
import path from 'path'

export const POSTS_PATH = path.join(process.cwd(), 'posts')

export const getFiles = () => fs.readdirSync(POSTS_PATH)

export const getFileBySlug = async ({ slug }) => {
  const postFilePath = path.join(POSTS_PATH, `${slug}.mdx`)
  const source = fs.readFileSync(postFilePath)

  const { data, content } = await matter(source)
  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: []
    },
    scope: data
  })

  return {
    source: mdxSource,
    frontmatter: {
      slug,
      ...data
    }
  }
}

export const getAllFilesMetadata = () => {
  const files = getFiles()

  return files.reduce((accumulator, postSlug) => {
    const mdxSource = fs.readFileSync(path.join(POSTS_PATH, postSlug))
    const { data } = matter(mdxSource)
    return [
      {
        ...data,
        slug: postSlug.replace('.mdx', '')
      },
      ...accumulator
    ]
  }, [])
}
