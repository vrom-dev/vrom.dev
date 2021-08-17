import { useState } from 'react'
import MenuIcon from './MenuIcon'

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
          <li className={styles.menuItem}>Home</li>
          <li className={styles.menuItem}>Projects</li>
          <li className={styles.menuItem}>Blogs</li>
        </ul>
      </nav>
    </>
  )
}
