import styles from "../../../styles/items/modal/modal.module.css";
import { useRecoilValue } from "recoil";
import {
  modalSecondTitle,
  buttonOk,
  buttonCancel,
  modalContent,
  requestNoteTitle,
  requestNoteContent,
} from "../../../store/atom";

export default function ModalUtils({ ...props }) {
  const secondTitle = useRecoilValue(modalSecondTitle);
  const okBtn = useRecoilValue(buttonOk);
  const cancelBtn = useRecoilValue(buttonCancel);
  const content = useRecoilValue(modalContent);
  const requestTitle = useRecoilValue(requestNoteTitle);
  const requestContent = useRecoilValue(requestNoteContent);
  const { title, closeModal, closingModalAndSendData } = {
    ...props,
  };

  const closeModalAndSendData = () => {
    closingModalAndSendData(title, requestTitle, requestContent);
  };

  const closingModal = () => {
    closeModal();
  };

  return (
    <div className={styles.notes_modal}>
      <div className={styles.modal_overlay}>
        <div className={styles.modal_content}>
          <h1>{secondTitle}</h1>
          <div className={styles.plates}>{content}</div>
          <div className={styles.btn}>
            <button
              className={styles.ok_button}
              onClick={closeModalAndSendData}
            >
              {okBtn}
            </button>
            <button className={styles.cancel_button} onClick={closingModal}>
              {cancelBtn}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
