import css from './Header.module.scss'
import { Menu } from '../Menu/Menu'

export function Header () {
  return (
    <header className={css.header}>
      <Menu />
    </header>
  )
}
