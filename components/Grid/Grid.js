import css from './Grid.module.scss'

export function Grid ({ children }) {
  return (
    <div className={css.grid}>
      {children}
    </div>
  )
}
