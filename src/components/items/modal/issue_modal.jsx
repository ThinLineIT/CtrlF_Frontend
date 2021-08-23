import { useEffect, useState } from 'react';
import Image from 'next-images';
import DropMenu from '../menu/DropMenu';
import styles from '../../../styles/items/modal/issue_modal.module.css';

export default function Modal({ setModal, data }) {
  const [modalMenu, setModalMenu] = useState(false);
  useEffect(() => {
    console.log('오케이 고');
  }, []);

  const closeModal = () => {
    setModal(false);
  };

  const acceptIssue = () => {
    alert('이슈를 승인할고야');
  };

  const rejectIssue = () => {
    alert('이슈를 거절할고야');
  };

  const showMenu = () => {
    setModalMenu(true);
  };

  return (
    <div className={styles.background}>
      <div className={styles.modal}>
        <div className={styles.ellipsis} onClick={showMenu}></div>
        {modalMenu && (
          <DropMenu setModalMenu={setModalMenu} modalMenu={modalMenu} />
        )}
        <div className={styles.modal__title}>
          {data.content_request.action} {data.content_request.type}
        </div>
        <div>{data.title} 타이틀</div>
        <div>{data.content} 콘텐츠</div>

        <div>
          <button className={styles.modal__btn} onClick={acceptIssue}>
            승인
          </button>
          <button className={styles.modal__btn} onClick={rejectIssue}>
            미승인
          </button>
          <button className={styles.modal__btn} onClick={closeModal}>
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}
