import { useEffect, useState } from 'react';
import styles from '../../../styles/items/modal/issue_modal.module.css';

export default function Modal({ setModal, data }) {
  const [issueTitle, setIssueTitle] = useState();

  const closeModal = () => {
    setModal(false);
  };
  useEffect(() => {
    console.log('오케이 고');
  }, []);
  return (
    <div className={styles.background}>
      <div className={styles.modal}>
        <div className={styles.modal__title}>
          {data.content_request.action} {data.content_request.type}
        </div>
        <input type="text" value={data.title} />
        <input type="text" value={data.content} />
        <div>{data.title}타이틀</div>
        <div>{data.content} 콘텐트</div>
        <div>여기는 input1</div>
        <div>여기는 input2</div>
        <div>
          <button>버튼 1</button>
          <button onClick={closeModal}>닫기</button>
        </div>
      </div>
    </div>
  );
}
