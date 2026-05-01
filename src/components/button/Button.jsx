import styles from './button.module.css'

export function Button({ children, type = 'button' }) {
  return <button className={styles.button} type={type}>{children}</button>
}