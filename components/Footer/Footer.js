import css from './Footer.module.scss'

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
        <p>Made with 🧡 and by Víctor Romero</p>
      </section>
    </footer>
  )
}
