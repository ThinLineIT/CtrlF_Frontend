import { useEffect, useState } from 'react';
import NoAuthentification from '../../issue/NoAuthentification';
import DropMenu from '../menu/DropMenu';
import { getUserId } from '../../../utils/userCheck';
import styles from '../../../styles/items/modal/issue_modal.module.css';

export default function Modal({ setModal, data }) {
  const [noAuth, setNoAuth] = useState(false);
  const [modalMenu, setModalMenu] = useState(false);
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    console.log('오케이 고');
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const closeModal = () => {
    setModal(false);
  };

  const acceptIssue = () => {
    setNoAuth(true);
  };

  const rejectIssue = () => {
    setNoAuth(true);
  };

  const showMenu = () => {
    setModalMenu(true);
  };

  const issueCancel = () => {
    const user_id = getUserId();
    if (user_id !== data.content_request.user_id) {
      setNoAuth(true);
    }
  };

  const issueEdit = () => {
    const user_id = getUserId();
    if (user_id !== data.content_request.user_id) {
      setNoAuth(true);
    }
  };

  return (
    <>
      {!noAuth ? (
        <div className={styles.background}>
          <div className={styles.modal}>
            {/* <div className={styles.ellipsis} onClick={showMenu}></div>
          {modalMenu && (
            <DropMenu setModalMenu={setModalMenu} modalMenu={modalMenu} />
          )} */}
            <div className={styles.modal__title}>
              {data.content_request.action} {data.content_request.type}
            </div>
            <div className={styles.modal__origin}>{data.title} 타이틀</div>
            <div className={`${styles.modal__change} ${styles.title}`}>
              {data.content} 콘텐츠
            </div>
            <div className={`${styles.modal__change} ${styles.contents}`}>
              {data.content} 콘텐츠
            </div>

            <div className={styles.btns}>
              <button className={styles.modal__btn} onClick={issueEdit}>
                수정
              </button>
              <button className={styles.modal__btn} onClick={issueCancel}>
                요청취소
              </button>
              <button className={styles.modal__btn} onClick={acceptIssue}>
                승인
              </button>
              <button className={styles.modal__btn} onClick={rejectIssue}>
                미승인
              </button>

              {data.content_request.type === 'PAGE' ? (
                <button className={styles.modal__btn} onClick={closeModal}>
                  자세히 보기
                </button>
              ) : (
                <button className={styles.modal__btn} onClick={closeModal}>
                  닫기
                </button>
              )}
            </div>
          </div>
        </div>
      ) : (
        <NoAuthentification setNoAuth={setNoAuth} />
      )}
    </>
  );
}
