import axios from 'axios';
import { useRef, useState, useEffect } from 'react';
import AlertModal from './AlertModal';
import Cookies from 'js-cookie';
import useModal from '../../../utils/useModal';
import styles from '../../../styles/items/modal/modal_input.module.css';
import { useSetRecoilState, useRecoilState } from 'recoil';
import {
  okBtnActive,
  isModalActive,
  requestIssueTitle,
  requestIssueContent,
} from '../../../store/atom';
import { noteCreateApi, topicCreateApi } from '../../../utils/pageDetailFetch';

export default function IssueCreateModal({ ...props }) {
  const { noteId, issue } = {
    ...props,
  };

  const titleRef = useRef();
  const textareaRef = useRef();
  const setShowHiddenModal = useSetRecoilState(isModalActive);
  const [isUserSubmit, setIsUserSubmit] = useRecoilState(okBtnActive);

  const setRequestTitle = useSetRecoilState(requestIssueTitle);
  const setRequestContent = useSetRecoilState(requestIssueContent);

  const onInputChange = () => {
    setRequestTitle(titleRef.current.value);
    setRequestContent(textareaRef.current.value);
  };

  const changeModalUtilsAndOkBtnActive = () => {
    let alertNoContent = titleRef.current.value && textareaRef.current.value;
    if (!alertNoContent) {
      alert('아래의 내용을 모두 입력해주세요');
    } else {
      setIsUserSubmit(true);
    }
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

  const sendNoteData = async (requestTitle, requestContent) => {
    const data = {
      title: requestTitle,
      reason: requestContent,
    };
    await noteCreateApi(data).then((res) => console.log(res));
  };

  const sendTopicData = async (requestTitle, requestContent) => {
    const data = {
      note_id: noteId,
      title: requestTitle,
      reason: requestContent,
    };
    await topicCreateApi(data).then((res) => console.log(res));
  };

  const [modalTitle, setModalTitle] = useState('');
  const [placeholder, setPlaceHolder] = useState('');
  useEffect(() => {
    const modalData = useModal(issue);
    setModalTitle(modalData.mainTitle);
    setPlaceHolder(modalData.placeholder);
  }, []);

  if (!isUserSubmit) {
    return (
      <div className={styles.notes_modal}>
        <div className={styles.modal_overlay}>
          <div className={styles.modal_content}>
            <h1>ADD {modalTitle}</h1>
            <input
              type="text"
              ref={titleRef}
              required={true}
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
  } else if (isUserSubmit) {
    return (
      <AlertModal
        issue={issue}
        closingModalAndSendData={closingModalAndSendData}
      />
    );
  }
}
