import styles from './statistic.module.css'
import notebookIllustration from '../../assets/images/notebook.svg'

export function Statistic() {
  return (
    <div className={styles.statistic}>
      <img
        src={notebookIllustration} alt="notebook"
        width={231} height={168} loading="lazy"
      />
      <p>
        Здесь мы поможем тебе управлять твоими задачами, отслеживать статистику и самочувствие.
      </p>
    </div>
  )
}