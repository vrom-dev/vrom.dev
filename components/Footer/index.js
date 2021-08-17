import styles from './styles.module.scss'

import {
  FiLinkedin,
  FiGithub,
  FiTwitter,
  FiMail
} from 'react-icons/fi'

export default function Footer () {
  return (
    <footer
      className={styles.footer}
    >
      <section
        className={styles.socialmedia}
      >
        <a
          href='http://google.es'
          className={styles.link}
        >
          <FiLinkedin />
        </a>
        <a
          href='http://google.es'
          className={styles.link}
        >
          <FiGithub />
        </a>
        <a
          href='http://google.es'
          className={styles.link}
        >
          <FiTwitter />
        </a>
        <a
          href='http://google.es'
          className={styles.link}
        >
          <FiMail />
        </a>
      </section>
      <section
        className={styles.madeby}
      >
        <p>Made with Next.js and 🧡 by Víctor Romero</p>
      </section>
    </footer>
  )
}
