import loginHook from '../../utils/LoginHooks';
import ModalPreparing from '../items/modal/modal_preparing';
import Link from 'next/link';
import styles from '../../styles/Login.module.css';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { emailReg } from '../../utils/Reg';
import { useRecoilState } from 'recoil';
import { preparingModal } from '../../store/atom';

const LoginForm = () => {
  const [showHiddenModal, setShowHiddenModal] = useRecoilState(preparingModal);
  const router = useRouter();
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setloginPassword] = useState('');
  const [loginValidate, setloginValidate] = useState('');

  const onLoginEmailHandler = (event) => {
    setLoginEmail(event.currentTarget.value);
  };
  const onLoginPasswordHandler = (event) => {
    setloginPassword(event.currentTarget.value);
  };

  useEffect(() => {
    return () => {
      setloginValidate('');
      setLoginEmail('');
      setloginValidate('');
      setloginPassword('');
    };
  }, []);

  const loginDataSubmit = async (event) => {
    event.preventDefault();

    if (!emailReg(loginEmail)) {
      setloginValidate(false);
      return;
    }

    const loginData = {
      password: loginPassword,
      email: loginEmail,
    };

    const success = await loginHook(loginData);
    if (success.token) {
      Cookies.set('token', success.token.split('.')[1]);
      localStorage.setItem('user_id', success.user_id);
      router.push('/');
      setloginValidate('');
    } else {
      setloginValidate(false);
    }
  };

  return (
    <div className={styles.login}>
      <div className={styles.login__title}>Log in</div>
      <form className={styles.login__form} onSubmit={loginDataSubmit}>
        <input
          placeholder="Email"
          value={loginEmail}
          type="text"
          className={styles.login__form__email}
          onChange={onLoginEmailHandler}
        />

        <input
          placeholder="Password"
          type="password"
          value={loginPassword}
          className={styles.login__form__password}
          onChange={onLoginPasswordHandler}
        />

        <br />
        <div className={styles.login__error}>
          {loginValidate === false && (
            <span className={styles.login__error__message}>
              {' '}
              * 이메일 / 비밀번호를 확인해주세요{' '}
            </span>
          )}
        </div>

        <br />

        <button className={styles.login__button__submit} type="submit">
          Log in
        </button>
      </form>
      <div className={styles.login__button__extra}>
        {showHiddenModal && <ModalPreparing />}
        <a
          onClick={() => {
            setShowHiddenModal(true);
          }}
          className={styles.login__link}
        >
          ID 찾기
        </a>

        <span>|</span>

        {showHiddenModal && <ModalPreparing />}
        <Link href="/passwordChange">
          <a className={styles.login__link}>PASSWORD 찾기</a>
        </Link>

        <span>|</span>
        <Link href="/register">
          <a className={styles.login__link}>회원가입</a>
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;
