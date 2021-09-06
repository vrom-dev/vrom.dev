import AppLayout from '../components/AppLayout'
import Container from '../components/Container'
import Footer from '../components/Footer'

import Link from 'next/link'

export default function About () {
  return (
    <AppLayout>
      <Container>
        <h1>Proyectos</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus, odio culpa? (Barna)📍 Nemo, minima earum impedit aliquam, nostrum, odio eum dolore sunt ea perspiciatis voluptas molestiae aliquid odit. Consectetur, et dolor 👨🏽‍💻.</p>
        <p>Lorem +5 dolor sit amet consectetur, adipisicing elit. Minus, odio culpa? (Barna)</p>
        <p>Minima earum impedit aliquam, nostrum, odio eum dolore (BCN Node)  sunt ea perspiciatis voluptas molestiae aliquid odit. Consectetur, et dolor.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus, odio culpa? (IT Academy) 😅.</p>
        <p>👉🏽  Si quieres saber más sobre mí, aquí te dejo <strong><Link href='/docs/sample.pdf' target='_blank' rel='noopener noreferrer'><a>mi CV</a></Link></strong>.
        </p>
        <p>Earum impedit minima aliquam, nostrum 👨🏽‍🏫, elit, etc.</p>
        <p>Inima earum impedit aliquam, nostrum.  Minima earum impedit aliquam, nostrum 🌍, molestiae 🎧, odit 🏃🏽‍♂️, dolor 🏄🏽‍♂️, minus 👾.</p>
      </Container>
      <Footer />
    </AppLayout>
  )
}
