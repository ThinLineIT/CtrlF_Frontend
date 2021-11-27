import { useState } from 'react';
import MiddleButton from '../button/ButtonMiddle';
import styles from '../../../styles/items/modal/modal.module.css';
import ConfirmModal from './ConfirmModal';
import Modal from './Modal';

export default function DetailModal(props) {
  const { mainTitle, subTitle, type } = props.modalData;
  const [title, setTitle] = useState(''); // API에 전달하실 title
  const [reason, setReason] = useState(''); // API에 전달하실 reason
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);

  const showConfirmModal = () => {
    setIsConfirmModalOpen(true);
  };

  const closeDetailModal = () => {
    props.setIsDetailModalOpen(false);
  };

  const onTitlehandler = (e) => {
    setTitle(e.currentTarget.value);
  };

  const onReasonHandler = (e) => {
    setReason(e.currentTarget.value);
  };
  return (
    <Modal width={'982px'}>
      {!isConfirmModalOpen ? (
        <>
          <div className={styles.modal__title_main}>{mainTitle}</div>
          <div className={styles.modal__title_sub}>{subTitle}</div>
          <input
            className={`${styles.modal__change} ${styles.title}`}
            value={title}
            onChange={onTitlehandler}
          />
          <textarea
            className={`${styles.modal__change} ${styles.contents}`}
            value={reason}
            onChange={onReasonHandler}
          />
          <div className={styles.btns}>
            <MiddleButton methods={showConfirmModal} text={'OK'} />
            <MiddleButton methods={closeDetailModal} text={'CANCEL'} />
          </div>
        </>
      ) : (
        <ConfirmModal
          modalData={{ type: type }}
          setIsConfirmModalOpen={setIsConfirmModalOpen}
        />
      )}
    </Modal>
  );
}
