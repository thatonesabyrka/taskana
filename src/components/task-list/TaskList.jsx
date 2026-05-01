import styles from './task-list.module.css'
import emptyTaskIllustration from '../../assets/images/empty-task.svg'

export function TaskList() {
  return (
    <div className={styles.taskListBody}>
      <header className={styles.taskListHeader}>
        <h2>Все твои задачи организованы как надо</h2>
        <p>Отличная работа! Ты большой молодец!</p>
      </header>
      <img src={emptyTaskIllustration} alt="" width={463} height={319} loading="lazy" />
    </div>
  )
}