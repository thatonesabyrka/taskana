import styles from './nav-bar.module.css'
import { Button } from '../../components/button'
import inboxIcon from '../../assets/icons/inbox.svg'

export function NavBar() {
  return (
    <nav className={styles.navBar}>
      <ul>
        <li>
          <Button
            className={styles.navBarLink}
            imageSrc={inboxIcon} to="/"
          >
            Входящие
          </Button>
        </li>
      </ul>
    </nav>
  )
}