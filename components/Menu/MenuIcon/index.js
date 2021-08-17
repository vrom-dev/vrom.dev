import { useState } from 'react'
import styles from './styles.module.scss'

export default function MenuIcon ({ toggle }) {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
    toggle()
  }

  const iconStyles = isOpen
    ? `${styles.iconOpen} ${styles.icon}`
    : styles.icon

  return (
    <button
      className={styles.button}
      onClick={handleClick}
    >
      <div className={iconStyles} />
    </button>
  )
}
