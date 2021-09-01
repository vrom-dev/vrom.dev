import Link from 'next/link'

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
        <Link href='https://www.linkedin.com/in/vromdev'>
          <a
            className={styles.link}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FiLinkedin />
          </a>
        </Link>
        <Link href='https://github.com/vrom-dev'>
          <a
            className={styles.link}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FiGithub />
          </a>
        </Link>
        <Link href='http://twitter.com/vromdev'>
          <a
            className={styles.link}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FiTwitter />
          </a>
        </Link>
        <Link href='mailto:vromerocomino@gmail.com'>
          <a
            className={styles.link}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FiMail />
          </a>
        </Link>
      </section>
      <section
        className={styles.madeby}
      >
        <p>Made with Next.js and 🧡 by Víctor Romero</p>
      </section>
    </footer>
  )
}
