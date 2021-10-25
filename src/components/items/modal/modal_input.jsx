import { useRef } from 'react';
import axios from 'axios';
import ModalUtils from './modal_utils';
import styles from '../../../styles/items/modal/modal_input.module.css';
import { useRecoilValue, useSetRecoilState, useRecoilState } from 'recoil';
import {
  buttonOk,
  modalTitle,
  okBtnActive,
  buttonCancel,
  isModalActive,
  requestIssueTitle,
  requestIssueContent,
  userRequestDataList,
  isInputShouldActive,
  modalInputPlaceholder,
  modalTextareaPlaceholder,
} from '../../../store/atom';

export default function ModalInput({ noteName, noteId }) {
  const textareaRef = useRef();
  const noteTitleRef = useRef();
  const isInputActive = useRecoilValue(isInputShouldActive);
  const [isOkBtnActive, setIsOkBtnActive] = useRecoilState(okBtnActive);
  const setShowHiddenModal = useSetRecoilState(isModalActive);

  const okBtn = useRecoilValue(buttonOk);
  const title = useRecoilValue(modalTitle);
  const cancelBtn = useRecoilValue(buttonCancel);
  const inputPlaceholder = useRecoilValue(modalInputPlaceholder);
  const textareaPlaceholder = useRecoilValue(modalTextareaPlaceholder);

  const setRequestTitle = useSetRecoilState(requestIssueTitle);
  const setRequestContent = useSetRecoilState(requestIssueContent);
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

  const closeModal = () => {
    setIsOkBtnActive(false);
    setShowHiddenModal(false);
  };

  const closingModalAndSendData = (title, requestTitle, requestContent) => {
    setIsOkBtnActive(false);

    axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}topics/`, {
        note_id: noteId,
        title: requestTitle,
        content: requestContent,
      })
      .then((res) => {
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
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        console.log('post confirm');
      });
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
                required={true}
              />
            )}
            <textarea
              ref={textareaRef}
              className={styles.users_textarea}
              name="text"
              placeholder={textareaPlaceholder}
              onChange={onInputChange}
              required={true}
            />
            <div className={styles.btn}>
              <button
                className={styles.ok_button}
                onClick={changeModalUtilsAndOkBtnActive}
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
  } else if (isOkBtnActive) {
    return (
      <ModalUtils
        title={title}
        closingModalAndSendData={closingModalAndSendData}
      />
    );
  }
}
