import Link from 'next/link'

import css from '../styles/Header.module.scss'

export function Header () {
  return (
    <nav className={css.nav}>
      <ul className={css.menu}>
        <li>
          <Link href='/'>Inicio</Link>
        </li>
        <li>
          <Link href='/projects'>Proyectos</Link>
        </li>
      </ul>
      <ul className={css.social}>
        <li>
          😁
        </li>
        <li>
          😎
        </li>
      </ul>
    </nav>
  )
}
