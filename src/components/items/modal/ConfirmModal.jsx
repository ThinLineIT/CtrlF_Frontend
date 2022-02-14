import ButtonMiddle from '../button/ButtonMiddle';
import styles from '../../../styles/items/modal/modal.module.css';
import { deleteApi } from '../../../utils/deleteApi';

export default function ConfirmModal({
  modalData,
  type,
  setIsConfirmModalOpen,
  setShowDeleteModal,
  action,
}) {
  const sendDataAndCloseModal = async () => {
    const request = await deleteApi(modalData);
    console.log(request.status);
    if (request.status === 200) {
      setShowDeleteModal(false);
    } else {
      alert('삭제 요청에 실패했습니다.');
      setShowDeleteModal(false);
    }
  };
  const closeConfirmModal = () => {
    setIsConfirmModalOpen(false);
    setShowDeleteModal(false);
  };
  return (
    <>
      <div className={styles.space}></div>

      {action === 'delete' ? (
        <>
          <div className={styles.modal__title_sub}>
            {type == '토픽' ? `토픽을` : `${type}를`} 삭제하시겠습니까?
          </div>
          <div className={styles.text}>삭제 요청이 Owner에게 전달됩니다.</div>
          <div className={styles.text}>
            삭제된 {type == '토픽' ? `토픽은` : `${type}는`} 복구할 수 없습니다.
          </div>
        </>
      ) : (
        <>
          <div className={styles.modal__title_sub}>
            {type} 이름을 수정 하시겠습니까?
          </div>
          <div className={styles.text}>
            이름 수정 요청이 Owner에게 전달됩니다.
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
