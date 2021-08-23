import ModalUtils from './modal_utils';
import { useState, useRef } from 'react';
import styles from '../../../styles/items/modal/modal_input.module.css';
import { useRecoilValue, useSetRecoilState, useRecoilState } from 'recoil';
import {
  buttonOk,
  modalTitle,
  buttonCancel,
  isModalActive,
  requestNoteTitle,
  requestNoteContent,
  userRequestDataList,
  isInputShouldActive,
  modalInputPlaceholder,
  modalTextareaPlaceholder,
} from '../../../store/atom';

export default function ModalInput({ noteName }) {
  const textareaRef = useRef();
  const noteTitleRef = useRef();
  const isInputActive = useRecoilValue(isInputShouldActive);
  const [isOkBtnActive, setIsOkBtnActive] = useState(false);
  const setShowHiidenModal = useSetRecoilState(isModalActive);

  const okBtn = useRecoilValue(buttonOk);
  const title = useRecoilValue(modalTitle);
  const cancelBtn = useRecoilValue(buttonCancel);
  const inputPlaceholder = useRecoilValue(modalInputPlaceholder);
  const textareaPlaceholder = useRecoilValue(modalTextareaPlaceholder);

  const setRequestTitle = useSetRecoilState(requestNoteTitle);
  const setRequestContent = useSetRecoilState(requestNoteContent);
  const [requestData, setRequestData] = useRecoilState(userRequestDataList);

  const onInputChange = () => {
    if (isInputActive) {
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
    setIsOkBtnActive(false);
    setShowHiidenModal(false);
  };

  const closingModalAndSendData = (title, requestTitle, requestContent) => {
    setIsOkBtnActive(false);
    isInputActive
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
            {isInputActive && (
              <input
                ref={noteTitleRef}
                className={styles.users_input}
                type="text"
                placeholder={inputPlaceholder}
                onChange={onInputChange}
                required
              />
            )}
            <textarea
              ref={textareaRef}
              className={styles.users_textarea}
              name="text"
              placeholder={textareaPlaceholder}
              onChange={onInputChange}
              required
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
        closingModalAndSendData={closingModalAndSendData}
      />
    );
  }
}
