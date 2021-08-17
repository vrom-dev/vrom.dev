import styles from './styles.module.scss'

export default function Project ({ icon, title, url, description }) {
  return (
    <div>
      <a href={url} target='_blank' rel='noreferrer' className={styles.link}>
        <span className={styles.icon}>{icon}</span>
        <h3 className={styles.title}>{title}</h3>
      </a>
      <p>{description}</p>
    </div>
  )
}
