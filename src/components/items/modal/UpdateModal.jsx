import { useState } from 'react';
import Button from '../button/Button';
import styles from '../../../styles/items/modal/modal.module.css';
import UpdateConfirmModal from './UpdateConfirmModal';
import Modal from './Modal';

export default function UpdataModal({
  id,
  type,
  originTitle,
  setIsUpdateModalOpen,
}) {
  const [title, setTitle] = useState(''); // API에 전달하실 title
  const [reason, setReason] = useState(''); // API에 전달하실 reason
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);

  const showConfirmModal = () => {
    setIsConfirmModalOpen(true);
  };

  const closeUpdateModal = () => {
    setIsUpdateModalOpen(false);
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
          <div className={styles.modal__title_main}>
            {`${type == 'note' ? '노트' : '토픽'} 이름 수정 요청`}
          </div>
          <div className={styles.modal__title_sub}>{originTitle}</div>
          <input
            className={`${styles.modal__change} ${styles.title}`}
            value={title}
            onChange={onTitlehandler}
            placeholder="수정하고 싶은 이름"
          />
          <textarea
            className={`${styles.modal__change} ${styles.contents}`}
            value={reason}
            onChange={onReasonHandler}
            placeholder="수정 요청 사유"
          />
          <div className={styles.btns}>
            <Button methods={showConfirmModal} text={'OK'} width={'135px'} />
            <Button
              methods={closeUpdateModal}
              text={'CANCEL'}
              width={'135px'}
            />
          </div>
        </>
      ) : (
        <UpdateConfirmModal
          setIsConfirmModalOpen={setIsConfirmModalOpen}
          setIsUpdateModalOpen={setIsUpdateModalOpen}
          modalData={{ reason, new_title: title }}
          type={type}
          id={id}
        />
      )}
    </Modal>
  );
}
