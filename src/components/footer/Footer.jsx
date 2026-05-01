import styles from './footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      Проект выполнен в рамках стажировки{' '}
      <a
        className={styles.footerLink}
        href="https://preax.ru/" target="_blank"
      >
        PREAX
      </a>
    </footer>
  )
}