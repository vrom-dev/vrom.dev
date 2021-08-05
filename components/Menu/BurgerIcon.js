import { useState } from 'react'
import css from './BurgerIcon.module.scss'

export function BurgerIcon ({ toggle }) {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
    toggle()
  }
  return (
    <button
      className={css.button}
      onClick={handleClick}
    >
      <div className={css.iconContainer}>
        <div className={isOpen ? `${css.iconOpen} ${css.icon}` : css.icon} />
      </div>
    </button>
  )
}
