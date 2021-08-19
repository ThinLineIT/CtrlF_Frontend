import { useRouter } from 'next/router';
import styles from '../src/styles/Register.module.css';

export default function SignUpConfirm() {
  const router = useRouter();
  const loginPageLoad = () => {
    router.push('/login');
  };

  return (
    <div className="component">
      <div className={styles.signup__confirm}>
        <div className={styles.signup__confirm__text}>
          <span className={styles.signup__title}>
            환영합니다.
            <br></br>
            가입이 완료 되었습니다.
          </span>
          <br />
          <div>로그인 후 이용해주세요.</div>
        </div>
        <button className={styles.signup__confirm__btn} onClick={loginPageLoad}>
          로그인 하러 가기
        </button>
      </div>
    </div>
  );
}
