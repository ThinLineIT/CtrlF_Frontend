import { useRouter } from 'next/router';
import styles from '../src/styles/Register.module.css';

export default function SignUpConfirm() {
  const router = useRouter();
  const loginPageLoad = () => {
    router.push('/login');
  };

  return (
    <div className={styles.signup__confirm}>
      <div className={styles.signup__confirm__text}>
        <span>환영합니다.</span>
        <span>가입이 완료 되었습니다.</span>
        <br />
        <span>로그인 후 이용해주세요.</span>
      </div>
      <button className={styles.signup__confirm__btn} onClick={loginPageLoad}>
        로그인 하러 가기
      </button>
    </div>
  );
}
