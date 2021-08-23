import Image from 'next/image'
import Link from 'next/link'

import styles from './styles.module.scss'
import profilePic from '../../public/img/me2.png'

export default function CallToAction () {
  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.title}>
          👋 Hola! Soy <span className={styles.gradient}>Víctor Romero</span>
        </h1>
        <p className={styles.bio}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus, odio culpa? Nemo, minima earum impedit aliquam, nostrum, odio eum dolore sunt ea perspiciatis voluptas molestiae aliquid odit. Consectetur, et dolor.
        </p>
        <Link
          href='/docs/sample.pdf'
          target='_blank'
          rel='noopener noreferrer'

        >
          <a className={styles.button}>
            Download CV
          </a>
        </Link>
      </div>
      <div className={styles.img_container}>
        <Image
          src={profilePic}
          alt='Picture of Vic'
          layout='responsive'
          className={styles.background}
        />
      </div>
    </div>
  )
}
