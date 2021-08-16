import ModalUtils from "./modal_utils";
import { useState, useRef } from "react";
import styles from "../../../styles/items/modal/modal.module.css";
import { useRecoilValue, useSetRecoilState, useRecoilState } from "recoil";
import {
  modalTitleSelector,
  buttonOk,
  buttonCancel,
  modalTextAreaPlaceholder,
  modalInputPlaceholder,
  requestNoteTitle,
  requestNoteContent,
  userRequestDataList,
} from "../../../store/atom";

export default function ModalInput({ ...props }) {
  const textareaRef = useRef();
  const noteTitleRef = useRef();
  const okBtn = useRecoilValue(buttonOk);
  const cancelBtn = useRecoilValue(buttonCancel);
  const title = useRecoilValue(modalTitleSelector);
  const [isOkBtnActive, setIsOkBtnActive] = useState(false);
  const setRequestTitle = useSetRecoilState(requestNoteTitle);
  const inputPlaceholder = useRecoilValue(modalInputPlaceholder);
  const setRequestContent = useSetRecoilState(requestNoteContent);
  const textareaPlaceholder = useRecoilValue(modalTextAreaPlaceholder);
  const [requestData, setRequestData] = useRecoilState(userRequestDataList);
  const { noteName, closeModal } = {
    ...props,
  };

  const onInputChange = () => {
    if (props.isInputActive) {
      setRequestTitle(noteTitleRef.current.value);
      setRequestContent(textareaRef.current.value);
    } else {
      setRequestContent(textareaRef.current.value);
    }
  };

  const changeModalUtilsAndOkBtnActive = () => {
    setIsOkBtnActive(true);
  };

  const closingModal = () => {
    closeModal();
    setIsOkBtnActive(false);
  };

  const closingModalAndSendData = (title, requestTitle, requestContent) => {
    closeModal();
    setIsOkBtnActive(false);
    props.isInputActive
      ? setRequestData([
          ...requestData,
          {
            noteName,
            title,
            requestTitle,
            requestContent,
          },
        ])
      : setRequestData([
          ...requestData,
          {
            noteName,
            title,
            requestContent,
          },
        ]);
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
                ref={noteTitleRef}
                className={styles.input}
                type="text"
                placeholder={inputPlaceholder}
                onChange={onInputChange}
              />
            ) : (
              ""
            )}
            <textarea
              ref={textareaRef}
              className={styles.textarea}
              name="text"
              placeholder={textareaPlaceholder}
              onChange={onInputChange}
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
        title={title}
        closeModal={closingModal}
        closingModalAndSendData={closingModalAndSendData}
      />
    );
  }
}
