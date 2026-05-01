import styles from './app-layout.module.css'
import { Header } from '../header'
import { Content } from '../content'

export function AppLayout() {
  return (
    <div className={styles.app}>
      <Header />
      <Content />
    </div>
  )
}