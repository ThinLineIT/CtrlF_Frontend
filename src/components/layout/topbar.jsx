import Link from 'next/link';
import router from 'next/router';
import React, { useRef } from 'react';
import { useRecoilState } from 'recoil';
import { useCookies } from 'react-cookie';
import { isJwtActive } from '../../store/atom';
import styles from '../../styles/layout/topbar.module.css';

function Topbar() {
  const logOutRef = useRef();
  const [jwt, setJwt] = useRecoilState(isJwtActive);
  const [cookies, setCookie, removeCookie] = useCookies(['token']);

  const localClear = () => {
    logOutRef.current.classList.toggle('topbar_hidden__2lErd');
  };

  const onLogOut = () => {
    setJwt(false);
    removeCookie('token');
    localStorage.removeItem('user_id');
    router.push('/');
  };

  return (
    <header className={styles.container}>
      <div className={styles.container__wrap}>
        <Link href="/">
          <a className={styles.top__logo}>{/* <LOGO /> */}</a>
        </Link>
        {jwt ? (
          <div className={styles.signup_btn}>
            <button className={styles.login__button} onClick={localClear} />
            <div
              ref={logOutRef}
              className={`${styles.hidden_login_button} ${styles.hidden}`}
              onClick={onLogOut}
            >
              Logout
            </div>
          </div>
        ) : (
          <nav className={styles.top__signup__list}>
            <Link href="/login" className={styles.signupLink}>
              <a>로그인 |</a>
            </Link>
            <Link href="/register" className={styles.signupLink}>
              <a>회원가입</a>
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}

export default React.memo(Topbar);
