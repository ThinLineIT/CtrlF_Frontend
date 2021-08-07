import { useRef } from 'react';
import { useRouter } from 'next/router';
import { useRecoilState, useSetRecoilState } from 'recoil';
import {
  noteModal,
  isJwtActive,
  userRequestNoteTextarea,
} from '../../../store/atom';
import styles from '../../../styles/items/modal/add_note_modal.module.css';

export default function AddNoteModal() {
  const router = useRouter();
  const textareaRef = useRef();
  const noteTitleRef = useRef();
  const addNoteContentChange = useRef();
  const [jwt, setJwt] = useRecoilState(isJwtActive);
  const setIsModalActive = useSetRecoilState(noteModal);
  const [requestNoteContent, setRequestNoteContent] = useRecoilState(
    userRequestNoteTextarea
  );

  const closeModal = () => {
    setIsModalActive(true);
  };
  const closeModalAndGoSignupPage = () => {
    router.push('/login');
    setIsModalActive(true);
  };

  const closeModalAndGoRegistPage = () => {
    router.push('/regist');
    setIsModalActive(true);
  };

  const requestAddNote = () => {
    if (noteTitleRef.current.value == '') {
      noteTitleRef.current.focus();
      alert('노트 제목을 입력해 주세요.');
    } else if (textareaRef.current.value == '') {
      textareaRef.current.focus();
      alert('노트 내용을 입력해 주세요.');
    } else {
      setRequestNoteContent({
        note_title: noteTitleRef.current.value,
        content: textareaRef.current.value,
      });
      setJwt('request');
    }
  };

  const setJwtTrueAgain = () => {
    setJwt(true);
    setIsModalActive(true);
    localStorage.setItem('userRequest', JSON.stringify(requestNoteContent));
  };

  switch (jwt) {
    case false:
      return (
        <div className={styles.modal_overlay}>
          <div className={styles.modal_content}>
            <h1>ADD NOTE</h1>
            <span className={styles.plates}>
              커넵 회원만 사용 가능한 기능입니다. <br />
              로그인 후 이용해주세요.
            </span>
            <button
              className={styles.button}
              onClick={closeModalAndGoSignupPage}
            >
              Login 하러 가기
            </button>
            <ul className={styles.ul}>
              <li>
                <button>ID 찾기</button>
              </li>
              <li>
                <button>PASSWORD 찾기</button>
              </li>
              <li>
                <button onClick={closeModalAndGoRegistPage}>회원가입</button>
              </li>
            </ul>
          </div>
        </div>
      );
    case true:
      return (
        <div className={styles.modal_overlay}>
          <div className={styles.modal_content} ref={addNoteContentChange}>
            <h1>ADD NOTE</h1>
            <input
              ref={noteTitleRef}
              type="text"
              className={styles.login_plates}
              placeholder="note title"
              required
            />
            <textarea
              ref={textareaRef}
              className={styles.login_textarea}
              name="message"
              placeholder="요청 내용 설명"
              required
            />
            <div className={styles.btn_wrp}>
              <button
                className={styles.login_button_ok}
                onClick={requestAddNote}
              >
                OK
              </button>
              <button
                className={styles.login_button_cancel}
                onClick={closeModal}
              >
                CANCEL
              </button>
            </div>
          </div>
        </div>
      );
    case 'request':
      return (
        <div className={styles.modal_overlay}>
          <div className={styles.modal_content}>
            <h1>ADD NOTE</h1>
            <span className={styles.plates}>노트 추가를 요청하시겠습니까?</span>
            <span className={styles.plates_span}>
              요청된 노트는 <br />
              사이트 관리자에게 전달됩니다.
            </span>
            <div className={styles.btn_wrp}>
              <button
                className={styles.login_button_ok}
                onClick={setJwtTrueAgain}
              >
                OK
              </button>
              <button
                className={styles.login_button_cancel}
                onClick={closeModal}
              >
                CANCEL
              </button>
            </div>
          </div>
        </div>
      );
  }
}
