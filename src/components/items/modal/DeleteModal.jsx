import { useState } from 'react';
import styles from '../../../styles/items/modal/modal.module.css';
import Modal from './Modal';
import Button from '../button/Button';
import ConfirmModal from './ConfirmModal';
import wordConverter from '../../../utils/wordConverter';

export default function DeleteModal({
  originTitle,
  type,
  setShowDeleteModal,
  id,
}) {
  // type은 해당 타입을 의미합니다. ex 노트, 토픽, 페이지
  // originTitle은 해당 게시물의 이름을 의미합니다.
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
              //   바깥영역에서 상태를 false로 바꿔주시면 종료되는 로직을 생각했습니다.
              text={'CANCEL'}
              width={'135px'}
            />
          </div>
        </>
      ) : (
        <ConfirmModal
          action="delete"
          type={wordConverter(type)}
          modalData={{ id, type, reason: deleteReason }}
          setIsConfirmModalOpen={setIsConfirmModalOpen}
          setShowDeleteModal={setShowDeleteModal}
        />
      )}
    </Modal>
  );
}
