import styles from './styles.module.scss'

export default function Grid ({ children }) {
  return (
    <div className={styles.grid}>
      {children}
    </div>
  )
}
