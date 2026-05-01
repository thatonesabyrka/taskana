import styles from './main-container.module.css'
import { TaskList } from '../task-list'

export function MainContainer() {
  return (
    <main className={styles.main}>
      <header className={styles.mainHeader}>
        <h1 className={styles.mainTitle}>Входящие</h1>
      </header>
      <TaskList />
    </main>
  )
}