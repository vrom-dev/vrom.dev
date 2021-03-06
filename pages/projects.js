import AppLayout from '../components/AppLayout'
import Container from '../components/Container'
import Footer from '../components/Footer'

import Link from 'next/link'

export default function About () {
  return (
    <AppLayout>
      <Container>
        <h1>Proyectos</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus, odio culpa? (Barna)๐ Nemo, minima earum impedit aliquam, nostrum, odio eum dolore sunt ea perspiciatis voluptas molestiae aliquid odit. Consectetur, et dolor ๐จ๐ฝโ๐ป.</p>
        <p>Lorem +5 dolor sit amet consectetur, adipisicing elit. Minus, odio culpa? (Barna)</p>
        <p>Minima earum impedit aliquam, nostrum, odio eum dolore (BCN Node)  sunt ea perspiciatis voluptas molestiae aliquid odit. Consectetur, et dolor.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus, odio culpa? (IT Academy) ๐.</p>
        <p>๐๐ฝ  Si quieres saber mรกs sobre mรญ, aquรญ te dejo <strong><Link href='/docs/sample.pdf' target='_blank' rel='noopener noreferrer'><a>mi CV</a></Link></strong>.
        </p>
        <p>Earum impedit minima aliquam, nostrum ๐จ๐ฝโ๐ซ, elit, etc.</p>
        <p>Inima earum impedit aliquam, nostrum.  Minima earum impedit aliquam, nostrum ๐, molestiae ๐ง, odit ๐๐ฝโโ๏ธ, dolor ๐๐ฝโโ๏ธ, minus ๐พ.</p>
      </Container>
      <Footer />
    </AppLayout>
  )
}
