import styles from './incoming-tasks.module.css'
import { MainContainer } from '../../components/main-container'
import { Footer } from '../../components/footer'

export function IncomingTasks() {
  return (
    <div className={styles.container}>
      <MainContainer />
      <Footer />
    </div>
  )
}