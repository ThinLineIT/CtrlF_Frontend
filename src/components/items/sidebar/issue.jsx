import styles from '../../../styles/items/sidebar/issue.module.css';

export default function Issue() {
  return (
    <div className={styles.container}>
      <span>
        <h1 className={styles.title}>요청 검토 중인 내용</h1>
        <div className={styles.issue_container}>
          <div className={`${styles.issues} ${styles.issue1}`}>Title</div>
          <div className={`${styles.issues} ${styles.issue2}`}>Title</div>
          <div className={`${styles.issues} ${styles.issue3}`}>Title</div>
          <div className={`${styles.issues} ${styles.issue4}`}>Title</div>
          <div className={`${styles.issues} ${styles.issue5}`}>Title</div>
        </div>
      </span>
    </div>
  );
}
