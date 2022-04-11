import ButtonMiddle from '../button/ButtonMiddle';
import styles from '../../../styles/items/modal/modal.module.css';
import { noteUpdateApi, topicUpdateApi } from '../../../utils/updateApi';

export default function UpdateConfirmModal({
  id,
  type,
  modalData,
  setIsConfirmModalOpen,
  setIsUpdateModalOpen,
}) {
  const sendDataAndCloseModal = async () => {
    let request;
    if (type === 'note') request = await noteUpdateApi(id, modalData);
    else request = await topicUpdateApi(id, modalData);

    if (request.status === 200) {
      setIsUpdateModalOpen(false);
    } else {
      alert('수정 요청에 실패했습니다.');
      setIsUpdateModalOpen(false);
    }
  };
  const closeConfirmModal = () => {
    setIsConfirmModalOpen(false);
    setIsUpdateModalOpen(false);
  };
  return (
    <>
      <div className={styles.space}></div>
      <div className={styles.modal__title_sub}>
        {type === 'note' ? '노트' : '토픽'} 이름을 수정 하시겠습니까?
      </div>
      <div className={styles.text}>이름 수정 요청이 Owner에게 전달됩니다.</div>

      <div className={styles.btns}>
        <ButtonMiddle text={'OK'} methods={sendDataAndCloseModal} />
        <ButtonMiddle text={'CANCEL'} methods={closeConfirmModal} />
      </div>
    </>
  );
}
