import { MDXRemote } from 'next-mdx-remote'
import { getFiles, getFileBySlug } from '../utils/mdxUtils'
import MDXComponents from '../components/MDXComponents'
import AppLayout from '../components/AppLayout'
import Container from '../components/Container'
import Footer from '../components/Footer'

export default function Post ({ source, frontmatter }) {
  console.log(frontmatter)
  return (
    <AppLayout>
      <Container>
        <h1>{frontmatter.title}</h1>
        <MDXRemote {...source} components={MDXComponents} />
      </Container>
      <Footer />
    </AppLayout>
  )
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
