import { useRouter } from 'next/router';
import { useSetRecoilState } from 'recoil';
import { noteModal } from '../../../store/atom';
import styles from '../../../styles/items/modal/add_note_modal.module.css';

export default function AddNoteModal() {
  const router = useRouter();
  const setIsModalActive = useSetRecoilState(noteModal);

  const closeModalAndGoSignupPage = () => {
    router.push('/signup');
    setIsModalActive(true);
  };

  const closeModalAndGoRegistPage = () => {
    router.push('/regist');
    setIsModalActive(true);
  };

  return (
    <div className={styles.modal_overlay}>
      <div className={styles.modal_content}>
        <h1>ADD NOTE</h1>
        <span className={styles.plates}>
          커넵 회원만 사용 가능한 기능입니다. <br />
          로그인 후 이용해주세요.
        </span>
        <button className={styles.button} onClick={closeModalAndGoSignupPage}>
          Login 하러 가기
        </button>
        <ul className={styles.ul}>
          <il>
            <button>ID 찾기</button>
          </il>
          <il>
            <button>PASSWORD 찾기</button>
          </il>
          <il>
            <button onClick={closeModalAndGoRegistPage}>회원가입</button>
          </il>
        </ul>
      </div>
    </div>
  );
}
