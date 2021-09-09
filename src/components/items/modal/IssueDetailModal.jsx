import { getUserId } from '../../../utils/userCheck';
import {
  issueAccept,
  issueReject,
  issueCancel,
  issueEdit,
} from '../../../utils/issueHook';
import styles from '../../../styles/items/modal/issue_modal.module.css';

export default function IssueDetailModal({
  data,
  setIsModalOpen,
  setIsFeatureClicked,
}) {
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const acceptIssue = () => {
    const user_id = getUserId();
    if (data.owner_id === user_id) {
      // API 개발 완료시 교체 예정
      issueAccept();
    }
    setIsFeatureClicked(true);
  };

  const rejectIssue = () => {
    const user_id = getUserId();
    if (data.owner_id === user_id) {
      // API 개발 완료시 교체 예정
      issueReject();
    }
    setIsFeatureClicked(true);
  };

  const CancelIssue = () => {
    const user_id = getUserId();
    if (user_id === data.content_request.user_id) {
      // API 개발 완료시 교체 예정
      issueCancel();
    } else {
      setIsFeatureClicked(true);
    }
  };

  const editIssue = () => {
    const user_id = getUserId();
    if (user_id === data.content_request.user_id) {
      // API 개발 완료시 교체 예정
      issueEdit();
    } else {
      setIsFeatureClicked(true);
    }
  };

  return (
    <div className={styles.background}>
      <div className={styles.modal}>
        <div className={styles.modal__title}>
          {data.content_request.action} {data.content_request.type}
        </div>
        <div className={styles.modal__origin}>{data.title} 타이틀</div>
        <div className={`${styles.modal__change} ${styles.title}`}>
          {data.content} 콘텐츠
        </div>
        <div className={`${styles.modal__change} ${styles.contents}`}>
          {data.content} 콘텐츠
        </div>

        <div className={styles.btns}>
          <button className={styles.modal__btn} onClick={editIssue}>
            수정
          </button>
          <button className={styles.modal__btn} onClick={CancelIssue}>
            요청취소
          </button>
          <button className={styles.modal__btn} onClick={acceptIssue}>
            승인
          </button>
          <button className={styles.modal__btn} onClick={rejectIssue}>
            미승인
          </button>

          {data.content_request.type === 'PAGE' ? (
            <button className={styles.modal__btn} onClick={closeModal}>
              자세히 보기
            </button>
          ) : (
            <button className={styles.modal__btn} onClick={closeModal}>
              닫기
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
