import ButtonMiddle from '../button/ButtonMiddle';
import styles from '../../../styles/items/modal/modal.module.css';

export default function ConfirmModal({
  type,
  setIsConfirmModalOpen,
  closingModalAndSendData,
}) {
  const setFetchData = () => {
    closingModalAndSendData(type);
  };
  const closeConfirmModal = () => {
    setIsConfirmModalOpen(false);
  };
  return (
    <>
      <div className={styles.space}></div>
      <div className={styles.modal__title_sub}>
        {type} 이름을 수정하시겠습니까?
      </div>
      <div className={styles.text}>이름 수정이 Owner에게 전달됩니다.</div>
      <div className={styles.btns}>
        <ButtonMiddle text={'OK'} methods={setFetchData} />
        <ButtonMiddle text={'CANCEL'} methods={closeConfirmModal} />
      </div>
    </>
  );
}
