import styles from '../styles/Container.module.css'

export function Container ({ children }) {
  return <div className={styles.div}>{children}</div>
}
