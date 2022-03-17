import { useState } from 'react';
import { issueUpdateApi } from '../../../utils/issueApi';
import styles from '../../../styles/items/modal/issue_modal.module.css';

export default function IssueEditor({ issue, setIssueEditMode }) {
  const [title, setTitle] = useState(issue.title);
  const [reason, setReason] = useState(issue.reason);

  const onTitleHandler = (e) => {
    setTitle(e.target.value);
  };

  const onReasonHandler = (e) => {
    setReason(e.target.value);
  };

  const updateIssue = () => {
    // issueUpdateApi(issue.id, title, reason);

    console.log();
  };

  const backToContent = () => {
    if (issue.title !== title || reason !== issue.reason) {
      console.log('ssss');
    } else {
      setIssueEditMode(false);
    }
  };

  return (
    <>
      <button className={styles.close} onClick={backToContent}>
        {'<'}
      </button>
      <div className={styles.modal__title}>
        {issue.related_model_type} {issue.action}
      </div>
      {issue.action === 'DELETE' ? (
        <div className={`${styles.modal__change} ${styles.title}`}>
          {' '}
          {issue.title}
        </div>
      ) : (
        <input
          className={`${styles.modal__change} ${styles.title}`}
          value={title}
          onChange={onTitleHandler}
        />
      )}
      <textarea
        className={`${styles.modal__change} ${styles.contents} ${styles.edit}`}
        value={reason}
        onChange={onReasonHandler}
      ></textarea>
      <div className={styles.btns}>
        <div></div>
        <div className={styles.permit}>
          <button className={styles.modal__btn} onClick={updateIssue}>
            수정하기
          </button>
        </div>
      </div>
    </>
  );
}
