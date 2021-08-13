import { MDXRemote } from 'next-mdx-remote'
import { getFiles, getFileBySlug } from '../utils/mdxUtils'
import MDXComponents from '../components/MDXComponents'

export default function Post ({ source, frontmatter }) {
  return <MDXRemote {...source} components={MDXComponents} />
}

export async function getStaticProps ({ params }) {
  const { source, frontmatter } = await getFileBySlug(params)

  return {
    props: {
      source,
      frontmatter
    }
  }
}

export async function getStaticPaths () {
  const posts = await getFiles()
  const paths = posts
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }))

  return {
    paths,
    fallback: false
  }
}
