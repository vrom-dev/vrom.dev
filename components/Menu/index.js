import { useState } from 'react'
import MenuIcon from './MenuIcon'
import Link from 'next/link'

import styles from './styles.module.scss'

export default function Menu () {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpenMenu = () => {
    setIsOpen(!isOpen)
  }

  const menuStyles = isOpen
    ? `${styles.nav} ${styles.navOpen}`
    : styles.nav

  return (
    <>
      <div className={styles.mobileBar}>
        <MenuIcon toggle={handleOpenMenu} />
      </div>
      <nav className={menuStyles}>
        <ul className={styles.menu}>
          <li className={styles.menuItem}>
            <Link href='/'>
              <a onClick={handleOpenMenu}>Inicio</a>
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link href='/about'>
              <a onClick={handleOpenMenu}>Sobre mí</a>
            </Link>
          </li>
          {/* <li className={styles.menuItem}>
            <Link href='/projects'>
              <a onClick={handleOpenMenu}>Proyectos</a>
            </Link>
          </li> */}
        </ul>
      </nav>
    </>
  )
}
