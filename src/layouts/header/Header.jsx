import styles from './header.module.css'
import { Logo } from '../../components/Logo'
import { Button } from '../../components/button'
import plusIcon from '../../assets/icons/plus.svg'

export function Header() {
  return (
    <header className={styles.header}>
      <div className={`${styles.headerInner} container`}>
        <Logo />
        <Button type="button" imageSrc={plusIcon} variant='accent'>
          <span>Создать</span>
        </Button>
      </div>
    </header>
  )
}