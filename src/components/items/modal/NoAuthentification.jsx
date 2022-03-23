import Modal from './Modal';
import styles from '../../../styles/items/modal/issue_modal.module.css';

export default function NoAuthentification({ title, setIsUnathorized }) {
  const backToModal = () => {
    setIsUnathorized(false);
  };
  return (
    <Modal width={'1096px'}>
      <header className={styles.confirm_title}>{title}</header>
      <p className={styles.confirm__text}>권한이 없습니다</p>
      <button className={styles.confirm__btn} onClick={backToModal}>
        확인
      </button>
    </Modal>
  );
}
