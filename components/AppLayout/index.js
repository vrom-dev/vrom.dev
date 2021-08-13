import styles from './styles.module.scss'
import Menu from '../Menu'

export default function AppLayout ({ children }) {
  return (
    <>
      <div className={styles.layout}>
        <header className={styles.header}>
          <Menu />
        </header>
        <main className={styles.main}>
          {children}
        </main>
      </div>
    </>
  )
}
