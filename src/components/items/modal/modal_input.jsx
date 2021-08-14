import { useState } from "react";
import ModalUtils from "./modal_utils";
import { useRecoilValue } from "recoil";
import styles from "../../../styles/items/modal/modal.module.css";
import {
  modalTitleSelector,
  buttonOk,
  buttonCancel,
  modalTextAreaPlaceholder,
  modalInputPlaceholder,
} from "../../../store/atom";

export default function ModalInput({ ...props }) {
  const okBtn = useRecoilValue(buttonOk);
  const cancelBtn = useRecoilValue(buttonCancel);
  const title = useRecoilValue(modalTitleSelector);
  const [isOkBtnActive, setIsOkBtnActive] = useState(false);
  const inputPlaceholder = useRecoilValue(modalInputPlaceholder);
  const textareaPlaceholder = useRecoilValue(modalTextAreaPlaceholder);
  const { noteName, closeModal } = {
    ...props,
  };

  const changeModalUtilsAndOkBtnActive = () => {
    setIsOkBtnActive(true);
  };

  const closingModal = () => {
    closeModal();
    setIsOkBtnActive(false);
  };

  const closingModalAndSendData = () => {
    closeModal();
    setIsOkBtnActive(false);
  };

  if (!isOkBtnActive) {
    return (
      <div className={styles.notes_modal}>
        <div className={styles.modal_overlay}>
          <div className={styles.modal_content}>
            <h1>{title}</h1>
            <h2>{noteName}</h2>
            {props.isInputActive ? (
              <input
                className={styles.input}
                type="text"
                placeholder={inputPlaceholder}
              />
            ) : (
              ""
            )}
            <textarea
              className={styles.textarea}
              name="text"
              placeholder={textareaPlaceholder}
            />
            <div className={styles.btn}>
              <button
                className={styles.ok_button}
                onClick={changeModalUtilsAndOkBtnActive}
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
  } else if (isOkBtnActive) {
    return (
      <ModalUtils
        closeModal={closingModal}
        closingModalAndSendData={closingModalAndSendData}
      />
    );
  }
}
