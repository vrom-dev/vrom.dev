import css from './Project.module.scss'

export function Project ({ icon, title, url, description }) {
  return (
    <div>
      <a href={url} target='_blank' rel='noreferrer' className={css.link}>
        <span className={css.icon}>{icon}</span>
        <h3 className={css.title}>{title}</h3>
      </a>
      <p>{description}</p>
    </div>
  )
}
