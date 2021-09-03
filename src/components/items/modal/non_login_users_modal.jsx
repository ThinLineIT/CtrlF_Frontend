import styles from '../../../styles/items/modal/non_login_users_modal.module.css';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { useRouter } from 'next/router';
import { isModalActive, modalName } from '../../../store/atom';

export default function NonLoginUsersModal() {
  const router = useRouter();
  const setShowHiddenModal = useSetRecoilState(isModalActive);

  const closeModalAndGoSignupPage = () => {
    router.push('/login');
    setShowHiddenModal(false);
  };

  const closeModalAndGoRegistrationPage = () => {
    router.push('/signUp');
    setShowHiddenModal(false);
  };

  return (
    <div
      className={styles.notes_modal}
      onClick={() => {
        setShowHiddenModal(false);
      }}
    >
      <div className={styles.modal_overlay}>
        <div className={styles.modal_content}>
          <span className={styles.plates}>
            커넵 회원만 사용 가능한 기능입니다. <br />
            로그인 후 이용해주세요.
          </span>
          <button
            className={styles.to_login_button}
            onClick={closeModalAndGoSignupPage}
          >
            Login 하러 가기
          </button>
          <ul className={styles.non_login_ul}>
            <li>
              <button>ID 찾기</button>
            </li>
            <li>
              <button>PASSWORD 찾기</button>
            </li>
            <li>
              <button onClick={closeModalAndGoRegistrationPage}>
                회원가입
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
