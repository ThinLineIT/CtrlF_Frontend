import styles from '../../../styles/items/modal/issue_modal.module.css';

export default function IssueDetailContent({
  issue,
  closeModal,
  moveToDetail,
  acceptIssue,
  rejectIssue,
}) {
  return (
    <>
      <button className={styles.close} onClick={closeModal}>
        X
      </button>

      <div className={styles.modal__title}>
        {issue.related_model_type} {issue.action}
      </div>
      <div className={`${styles.modal__change} ${styles.title}`}>
        {' '}
        {issue.title}
      </div>
      <div className={`${styles.modal__change} ${styles.contents}`}>
        {issue.reason}
      </div>
      <div className={styles.btns}>
        <div>
          {issue.related_model_type === 'PAGE' && (
            <button className={styles.modal__btn} onClick={moveToDetail}>
              자세히 보기
            </button>
          )}
        </div>
        <div className={styles.permit}>
          <button className={styles.modal__btn} onClick={acceptIssue}>
            승인
          </button>
          <button className={styles.modal__btn} onClick={rejectIssue}>
            미승인
          </button>
        </div>
      </div>
    </>
  );
}
