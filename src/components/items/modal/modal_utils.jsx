import { useSetRecoilState, useRecoilValue } from 'recoil';
import styles from '../../../styles/items/modal/modal_utils.module.css';
import {
  modalUtilsName,
  buttonOk,
  buttonCancel,
  isModalActive,
  modalTitle,
  requestNoteTitle,
  isValidOnMainpage,
  requestNoteContent,
  modalMessage,
  modalUtilsSyntax,
} from '../../../store/atom';

export default function ModalUtils({ ...props }) {
  const isOnMainPage = useRecoilValue(isValidOnMainpage);
  const setShowHiidenModal = useSetRecoilState(isModalActive);

  const nameState = useRecoilValue(modalUtilsName);
  const okBtn = useRecoilValue(buttonOk);
  const cancelBtn = useRecoilValue(buttonCancel);
  const utilsTitle = useRecoilValue(modalTitle);
  const message = useRecoilValue(modalMessage);
  const syntax = useRecoilValue(modalUtilsSyntax);

  const requestTitle = useRecoilValue(requestNoteTitle);
  const requestContent = useRecoilValue(requestNoteContent);

  const { title, closingModalAndSendData } = {
    ...props,
  };

  const closeModalAndSendData = () => {
    setShowHiidenModal(false);
    closingModalAndSendData(title, requestTitle, requestContent);
  };

  const closingModal = () => {
    setShowHiidenModal(false);
  };

  switch (isOnMainPage) {
    case true:
      return (
        <div className={styles.notes_modal}>
          <div className={styles.modal_overlay}>
            <div className={styles.modal_content}>
              <h1>{utilsTitle}</h1>
              <span className={styles.plates}>
                {nameState} 추가를 요청하시겠습니까?
              </span>
              <span className={styles.plates_span}>
                요청된 {nameState}
                {syntax} <br />
                사이트 관리자에게 전달됩니다.
              </span>
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
    case false:
      return (
        <div className={styles.notes_modal}>
          <div className={styles.modal_overlay}>
            <div className={styles.modal_content}>
              <h1 className={styles.modal_h1}>{utilsTitle}</h1>
              <div className={styles.plates}>{message}</div>
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
}
