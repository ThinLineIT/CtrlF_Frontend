import styles from '../../../styles/items/modal/issue_modal.module.css';
import Modal from './Modal';

export default function IssueApproveModal({
  title,
  setConfirm,
  actionMethod,
  isDelete,
}) {
  return (
    <Modal width={'1096px'}>
      <header className={styles.confirm_title}>{title}</header>
      {
        <p className={styles.confirm__text}>
          {isDelete
            ? '이슈를 삭제하면 복구할 수 없습니다.'
            : '이슈를 닫으면 수정할 수 없습니다.'}
        </p>
      }
      <div>
        <button className={styles.confirm__btn} onClick={actionMethod}>
          확인
        </button>
        <button
          className={styles.confirm__btn}
          onClick={() => setConfirm(false)}
        >
          돌아가기
        </button>
      </div>
    </Modal>
  );
}
