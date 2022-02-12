import ButtonMiddle from '../button/ButtonMiddle';
import styles from '../../../styles/items/modal/modal.module.css';
import { deleteApi } from '../../../utils/deleteApi';

export default function ConfirmModal({
  modalData,
  type,
  setIsConfirmModalOpen,
  setCloseDeleteModal,
  action,
}) {
  const sendDataAndCloseModal = async () => {
    // await deleteApi(modalData);
    console.log(modalData);
    setCloseDeleteModal(false);
  };
  const closeConfirmModal = () => {
    setIsConfirmModalOpen(false);
  };
  return (
    <>
      <div className={styles.space}></div>

      {action === '삭제' ? (
        <>
          <div className={styles.modal__title_sub}>
            {type == '토픽' ? `토픽을` : `${type}를`} 삭제하시겠습니까?
          </div>
          <div className={styles.text}>삭제요청이 Owner에게 전달됩니다.</div>
          <div className={styles.text}>
            삭제된 {type == '토픽' ? `토픽은` : `${type}는`} 복구할 수 없습니다.
          </div>
        </>
      ) : (
        <>
          <div className={styles.modal__title_sub}>
            {type} 이름을 {action}하시겠습니까?
          </div>
          <div className={styles.text}>
            이름 {action}요청이 Owner에게 전달됩니다.
          </div>
        </>
      )}

      <div className={styles.btns}>
        <ButtonMiddle text={'OK'} methods={sendDataAndCloseModal} />
        <ButtonMiddle text={'CANCEL'} methods={closeConfirmModal} />
      </div>
    </>
  );
}
