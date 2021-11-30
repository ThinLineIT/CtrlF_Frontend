import Button from '../button/Button';
import styles from '../../../styles/items/modal/modal.module.css';

export default function ConfirmModal({ modalData, setIsConfirmModalOpen }) {
  const closeConfirmModal = () => {
    setIsConfirmModalOpen(false);
  };
  return (
    <>
      <div className={styles.space}></div>
      <div className={styles.modal__title_sub}>
        {modalData.type}이름을 수정하시겠습니까?
      </div>
      <div className={styles.text}>
        이름 수정이 {modalData.type} Owner에게 전달됩니다.
      </div>
      <div className={styles.btns}>
        <Button
          text={'OK'}
          //methods={}  API 요청 함수를 넘겨주어 클릭시 API를 요청합니다.
          width={'135px'}
        />
        <Button text={'CANCEL'} methods={closeConfirmModal} width={'135px'} />
      </div>
    </>
  );
}
