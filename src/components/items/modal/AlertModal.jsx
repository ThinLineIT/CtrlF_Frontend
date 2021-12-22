import React, { useState, useEffect } from 'react';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import useModal from '../../../utils/useModal';
import styles from '../../../styles/items/modal/modal_utils.module.css';
import {
  isModalActive,
  ModifyPageContent,
  requestIssueTitle,
  requestIssueContent,
} from '../../../store/atom';

export default function AlertModal({ ...props }) {
  const { issue, closingModalAndSendData } = {
    ...props,
  };

  const setShowHiddenModal = useSetRecoilState(isModalActive);
  const setModifyPage = useSetRecoilState(ModifyPageContent);
  const requestTitle = useRecoilValue(requestIssueTitle);
  const requestContent = useRecoilValue(requestIssueContent);

  const closeModalAndSendData = () => {
    setModifyPage(false);
    setShowHiddenModal(false);
    closingModalAndSendData(requestTitle, requestContent, modalTitle);
  };

  const closeModal = () => {
    setShowHiddenModal(false);
  };

  const [issueState, setIssueStatus] = useState('');
  useEffect(() => {
    setIssueStatus(issue);
  });

  const [modalTextData, setModalTextData] = useState({});
  useEffect(() => {
    const modalData = useModal(issue);
    setModalTextData(modalData);
  });

  console.log(issueState);
  return (
    <div className={styles.notes_modal}>
      <div className={styles.modal_overlay}>
        <div className={styles.modal_content}>
          {modalTextData && (
            <>
              <h1>ADD {modalTextData.englishTitle}</h1>
              <span className={styles.plates}>
                {modalTextData.koreanTitle} 추가를 요청하시겠습니까?
              </span>
              <span className={styles.plates_span}>
                요청된 {modalTextData.issue는}
                <br />
                사이트 관리자에게 전달됩니다.
              </span>
              <div className={styles.btn}>
                <button
                  className={styles.ok_button}
                  onClick={closeModalAndSendData}
                >
                  OK
                </button>
                <button className={styles.cancel_button} onClick={closeModal}>
                  CANCEL
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
