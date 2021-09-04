import { getUserId } from '../../../utils/userCheck';
import styles from '../../../styles/items/modal/issue_modal.module.css';

export default function IssueDetailModal({
  data,
  setModal,
  setIsModalFeature,
}) {
  const closeModal = () => {
    setModal(false);
  };

  const acceptIssue = () => {
    const user_id = getUserId();
    if (data.owner_id === user_id) {
      console.log('이슈를 승인하겠습니다');
    }
    setIsModalFeature(true);
  };

  const rejectIssue = () => {
    const user_id = getUserId();
    if (data.owner_id === user_id) {
      console.log('이슈를 미승인하겠습니다');
    }
    setIsModalFeature(true);
  };

  const issueCancel = () => {
    const user_id = getUserId();
    if (user_id === data.content_request.user_id) {
      console.log('이슈를 취소합니다.');
    } else {
      setIsModalFeature(true);
    }
  };

  const issueEdit = () => {
    const user_id = getUserId();
    if (user_id === data.content_request.user_id) {
      console.log('이슈를 수정합니다. ');
    } else {
      setIsModalFeature(true);
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
          <button className={styles.modal__btn} onClick={issueEdit}>
            수정
          </button>
          <button className={styles.modal__btn} onClick={issueCancel}>
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
