import css from './Section.module.scss'

export function Section ({ title, children }) {
  return (
    <section className={css.section}>
      <h2 className={css.title}>{`${title}.`}</h2>
      {children}
    </section>
  )
}
