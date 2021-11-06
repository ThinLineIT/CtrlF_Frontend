import { useSetRecoilState, useRecoilValue } from 'recoil';
import styles from '../../../styles/items/modal/modal_utils.module.css';
import {
  isModalActive,
  ModifyPageContent,
  requestIssueTitle,
  requestIssueContent,
} from '../../../store/atom';

export default function AlertModal({ ...props }) {
  const { titleObj, closingModalAndSendData } = {
    ...props,
  };
  const { modalTitle, englishTitle, koreanTitle, issue는 } = titleObj;
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

  return (
    <div className={styles.notes_modal}>
      <div className={styles.modal_overlay}>
        <div className={styles.modal_content}>
          <h1>ADD {englishTitle}</h1>
          <span className={styles.plates}>
            {koreanTitle} 추가를 요청하시겠습니까?
          </span>
          <span className={styles.plates_span}>
            요청된 {issue는}
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
        </div>
      </div>
    </div>
  );
}
