import Link from 'next/link'
import styles from './styles.module.scss'

import { dateFormatter } from '../../utils/dates'

export default function ArticlesList ({ posts }) {
  return (
    <ul
      className={styles.ul}
    >
      {posts.map(post => {
        return (
          <li
            key={post.title}
            className={styles.li}
          >
            <time
              className={styles.time}
              dateTime={dateFormatter(post.date, 'es-ES', { month: 'long', year: '2-digit', day: 'numeric' })}
            >{dateFormatter(post.date)}
            </time>
            <Link
              href={`/${post.slug}`}
            >
              <a className={styles.title}>{post.title}</a>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
