import styles from './header.module.css'
import { Logo } from '../../components/Logo'
import { Button } from '../../components/button'
import plusIcon from '../../assets/icons/plus.svg'

export function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <Button type="button">
        <img src={plusIcon} alt="Создать" width={24} height={24} />
        <span>Создать</span>
      </Button>
    </header>
  )
}