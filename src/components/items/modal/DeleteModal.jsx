import { useState } from 'react';
import styles from '../../../styles/items/modal/modal.module.css';
import Modal from './Modal';
import Button from '../button/Button';
import DeleteConfirmModal from './DeleteConfirmModal';
import wordConverter from '../../../utils/wordConverter';

export default function DeleteModal({
  originTitle,
  type,
  setShowDeleteModal,
  id,
}) {
  const [deleteReason, setDeleteReason] = useState(''); // 식제할 이유입니다.
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);

  const onDeleteReasonHandler = (e) => {
    setDeleteReason(e.currentTarget.value);
  };

  const confirmModalOpen = () => {
    setIsConfirmModalOpen(true);
  };
  return (
    <Modal width={'982px'}>
      {!isConfirmModalOpen ? (
        <>
          <div className={styles.modal__title_main}>{type} 삭제 요청</div>
          <div className={styles.modal__title_sub}>{originTitle}</div>
          <textarea
            className={`${styles.modal__change} ${styles.contents}`}
            value={deleteReason}
            onChange={onDeleteReasonHandler}
          />
          <div className={styles.btns}>
            <Button methods={confirmModalOpen} text={'OK'} width={'135px'} />
            <Button
              methods={() => {
                setShowDeleteModal(false);
              }}
              text={'CANCEL'}
              width={'135px'}
            />
          </div>
        </>
      ) : (
        <DeleteConfirmModal
          type={wordConverter(type)}
          modalData={{ id, type, reason: deleteReason }}
          setIsConfirmModalOpen={setIsConfirmModalOpen}
          setShowDeleteModal={setShowDeleteModal}
        />
      )}
    </Modal>
  );
}
