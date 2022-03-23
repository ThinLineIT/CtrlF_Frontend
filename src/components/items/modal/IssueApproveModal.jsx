import styles from '../../../styles/items/modal/issue_modal.module.css';
import Modal from './Modal';

export default function IssueApproveModal({ title, setIsModalOpen }) {
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <Modal width={'1096px'}>
      <header className={styles.confirm_title}>{title}</header>
      <p className={styles.confirm__text}>이슈가 승인 되었습니다.</p>
      <button className={styles.confirm__btn} onClick={closeModal}>
        확인
      </button>
    </Modal>
  );
}
