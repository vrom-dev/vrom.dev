import { useState } from 'react'
import { BurgerIcon } from './BurgerIcon'

import css from './Menu.module.scss'

export function Menu () {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpenMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <nav>
        <div className={css.mobileBar}>
          <BurgerIcon toggle={handleOpenMenu} />
        </div>
        <ul className={isOpen ? `${css.menu} ${css.menuOpen}` : css.menu}>
          <li className={css.menuItem}>Home</li>
          <li className={css.menuItem}>Projects</li>
          <li className={css.menuItem}>Blogs</li>
        </ul>
      </nav>
    </>
  )
}
