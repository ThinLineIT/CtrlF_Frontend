import axios from 'axios';
import { useRef } from 'react';
import AlertModal from './AlertModal';
import styles from '../../../styles/items/modal/modal_input.module.css';
import { useSetRecoilState, useRecoilState } from 'recoil';
import {
  okBtnActive,
  isModalActive,
  requestIssueTitle,
  requestIssueContent,
} from '../../../store/atom';

export default function IssueCreateModal({ ...props }) {
  const { titleObj, noteId } = {
    ...props,
  };
  const { englishTitle, placeholder } = titleObj;

  const textareaRef = useRef();
  const titleRef = useRef();
  const setShowHiddenModal = useSetRecoilState(isModalActive);
  const [isUserSubmit, setIsUserSubmit] = useRecoilState(okBtnActive);

  const setRequestTitle = useSetRecoilState(requestIssueTitle);
  const setRequestContent = useSetRecoilState(requestIssueContent);

  const onInputChange = () => {
    setRequestTitle(titleRef.current.value);
    setRequestContent(textareaRef.current.value);
  };

  const changeModalUtilsAndOkBtnActive = () => {
    if (!titleRef.current.value) alert('제목을 입력해주세요');
    if (!textareaRef.current.value) alert('내용을 입력해주세요');
    if (titleRef.current.value && textareaRef.current.value)
      setIsUserSubmit(true);
  };

  const closeModal = () => {
    setIsUserSubmit(false);
    setShowHiddenModal(false);
  };

  const closingModalAndSendData = (requestTitle, requestContent, issue) => {
    if (issue == 'note') sendNoteData(requestTitle, requestContent);
    if (issue == 'topic') sendTopicData(requestTitle, requestContent);
    setIsUserSubmit(false);
  };

  const sendNoteData = (requestTitle, requestContent) => {
    axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}notes/`, {
        title: requestTitle,
        content: requestContent,
      })
      .catch(function (error) {
        console.log(error, 'notes');
      });
  };

  const sendTopicData = (requestTitle, requestContent) => {
    axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}topic/`, {
        note_id: noteId,
        title: requestTitle,
        content: requestContent,
      })
      .catch(function (error) {
        console.log(error, 'topic');
      });
  };

  if (!isUserSubmit) {
    return (
      <div className={styles.notes_modal}>
        <div className={styles.modal_overlay}>
          <div className={styles.modal_content}>
            <h1>ADD {englishTitle}</h1>
            <input
              type="text"
              required={true}
              ref={titleRef}
              onChange={onInputChange}
              placeholder={placeholder}
              className={styles.users_input}
            />
            <textarea
              name="textarea"
              required={true}
              ref={textareaRef}
              onChange={onInputChange}
              placeholder="요청 내용 설명"
              className={styles.users_textarea}
            />
            <div className={styles.btn}>
              <button
                className={styles.ok_button}
                onClick={changeModalUtilsAndOkBtnActive}
              >
                OK
              </button>
              <button className={styles.cancel_button} onClick={closeModal}>
                CANCEL
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <AlertModal
        titleObj={titleObj}
        closingModalAndSendData={closingModalAndSendData}
      />
    );
  }
}
