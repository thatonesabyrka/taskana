import styles from './content.module.css'
import { NavBar } from '../nav-bar'
import { IncomingTasks } from '../../pages/incoming-tasks'
import { SideBar } from '../SIdeBar'

export function Content() {
  return (
    <div className={styles.content}>
      <NavBar />
      <IncomingTasks />
      <SideBar />
    </div>
  )
}