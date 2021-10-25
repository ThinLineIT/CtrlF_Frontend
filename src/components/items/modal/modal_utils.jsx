import { useSetRecoilState, useRecoilValue } from 'recoil';
import styles from '../../../styles/items/modal/modal_utils.module.css';
import {
  buttonOk,
  modalTitle,
  buttonCancel,
  modalMessage,
  isModalActive,
  modalUtilsName,
  ModifyPageContent,
  modalUtilsSyntax,
  requestIssueTitle,
  isValidOnMainpage,
  requestIssueContent,
} from '../../../store/atom';

export default function ModalUtils({ ...props }) {
  const isOnMainPage = useRecoilValue(isValidOnMainpage);
  const setShowHiddenModal = useSetRecoilState(isModalActive);

  const okBtn = useRecoilValue(buttonOk);
  const message = useRecoilValue(modalMessage);
  const utilsTitle = useRecoilValue(modalTitle);
  const cancelBtn = useRecoilValue(buttonCancel);
  const syntax = useRecoilValue(modalUtilsSyntax);
  const nameState = useRecoilValue(modalUtilsName);
  const setModifyPage = useSetRecoilState(ModifyPageContent);

  const requestTitle = useRecoilValue(requestIssueTitle);
  const requestContent = useRecoilValue(requestIssueContent);

  const { title, closingModalAndSendData } = {
    ...props,
  };

  const closeModalAndSendData = () => {
    setModifyPage(false);
    setShowHiddenModal(false);
    closingModalAndSendData(title, requestTitle, requestContent);
  };

  const closeModal = () => {
    setShowHiddenModal(false);
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
                <button className={styles.cancel_button} onClick={closeModal}>
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
                <button className={styles.cancel_button} onClick={closeModal}>
                  {cancelBtn}
                </button>
              </div>
            </div>
          </div>
        </div>
      );
  }
}
