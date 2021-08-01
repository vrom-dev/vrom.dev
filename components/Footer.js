import Image from 'next/image'
import css from '../styles/Footer.module.scss'
import nextLogo from '../public/img/logos/nextjs.svg'

import {
  FiLinkedin,
  FiGithub,
  FiTwitter,
  FiMail
} from 'react-icons/fi'

export function Footer () {
  return (
    <footer
      className={css.footer}
    >
      <section
        className={css.socialmedia}
      >
        <a
          href='http://google.es'
          className={css.link}
        >
          <FiLinkedin />
        </a>
        <a
          href='http://google.es'
          className={css.link}
        >
          <FiGithub />
        </a>
        <a
          href='http://google.es'
          className={css.link}
        >
          <FiTwitter />
        </a>
        <a
          href='http://google.es'
          className={css.link}
        >
          <FiMail />
        </a>
      </section>
      <section
        className={css.madeby}
      >
        <div>Made with 🧡 and</div>
        <a
          href='https://nextjs.org'
        >
          <Image
            src={nextLogo}
            alt='Next.js logo'
            width={55}
            height={30}
          />
        </a>
        <div>by Víctor Romero</div>
      </section>
    </footer>
  )
}
