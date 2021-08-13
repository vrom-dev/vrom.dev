import { useState } from 'react'
import MenuIcon from './MenuIcon'

import styles from './styles.module.scss'

export default function Menu () {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpenMenu = () => {
    setIsOpen(!isOpen)
  }

  const menuStyles = isOpen
    ? `${styles.menu} ${styles.menuOpen}`
    : styles.menu

  return (
    <>
      <nav>
        <div className={styles.mobileBar}>
          <MenuIcon toggle={handleOpenMenu} />
        </div>
        <ul className={menuStyles}>
          <li className={styles.menuItem}>Home</li>
          <li className={styles.menuItem}>Projects</li>
          <li className={styles.menuItem}>Blogs</li>
        </ul>
      </nav>
    </>
  )
}
