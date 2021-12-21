import { useState } from 'react';
import Button from '../button/Button';
import styles from '../../../styles/items/modal/modal.module.css';
import ConfirmModal from './ConfirmModal';
import Modal from './Modal';

export default function UpdataModal(props) {
  const { mainTitle, subTitle, type } = props.modalData;
  const [title, setTitle] = useState(''); // API에 전달하실 title
  const [reason, setReason] = useState(''); // API에 전달하실 reason
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);

  const showConfirmModal = () => {
    setIsConfirmModalOpen(true);
  };

  const closeUpdateModal = () => {
    props.setIsUpdateModalOpen(false);
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
            <Button methods={showConfirmModal} text={'OK'} width={'135px'} />
            <Button
              methods={closeUpdateModal}
              text={'CANCEL'}
              width={'135px'}
            />
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
