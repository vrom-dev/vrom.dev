import fetch from 'node-fetch'

import { getAllFilesMetadata } from '../utils/mdxUtils'

import AppLayout from '../components/AppLayout'
import Container from '../components/Container'
import Grid from '../components/Grid'
import Project from '../components/Project'
import Section from '../components/Section'
import CallToAction from '../components/CallToAction'
import Techs from '../components/Techs'
import Footer from '../components/Footer'
// import ArticlesList from '../components/ArticlesList'

export default function Home ({ posts, repos }) {
  return (
    <>

      <AppLayout>
        <Container>
          <CallToAction />
          <Section
            title='Proyectos'
          >
            <Grid>
              {repos.map(({ repo, link, description, icon }) => (
                <Project
                  key={link}
                  url={link}
                  icon={icon}
                  description={description}
                  title={repo}
                />
              ))}
            </Grid>
          </Section>
          {/* <Section
            title='Artículos'
          >
            <ArticlesList
              posts={posts}
            />
          </Section> */}
          <Section
            title='Skills'
          >
            <Techs />
          </Section>
          <Footer />
        </Container>
      </AppLayout>
    </>
  )
}

export async function getStaticProps () {
  const posts = await getAllFilesMetadata()
  const reposData = await fetch('https://gh-pinned-repos-5l2i19um3.vercel.app/?username=vrom-dev')
  const reposJson = await reposData.json()
  const dicc = ['🐶','📃', '👨‍🏫']
  const repos = reposJson
    .slice(0, 3)
    .map((repo, i) => ({ ...repo, icon: dicc[i] }))
  return {
    props: { posts, repos }
  }
}
