import Link from 'next/link';
import router from 'next/router';
import { useRecoilState } from 'recoil';
import { useCookies } from 'react-cookie';
import { isJwtActive } from '../../store/atom';
import usePagination from '../../utils/use_pagination';
import React, { useState, useRef, useEffect } from 'react';
import styles from '../../styles/layout/topbar.module.css';

export default function Topbar() {
  const logOutRef = useRef();
  const formRef = useRef();
  const inputRef = useRef();
  const [jwt, setJwt] = useRecoilState(isJwtActive);
  const [query, setQuery] = useState('');
  const [cursorNumber, setCursorNumber] = useState(0);
  const [cookies, setCookie, removeCookie] = useCookies(['token']);
  usePagination(cursorNumber, query);

  const localClear = () => {
    logOutRef.current.classList.toggle('topbar_hidden__2lErd');
  };

  const onLogOut = () => {
    setJwt(false);
    removeCookie('token');
    router.push('/');
  };

  // 검색 기능 구현 함수라, 주석처리하겠습니다.
  /* const onSearch = (event) => {
    event.preventDefault();
    setQuery(event.target.value);
    setCursorNumber(0);
    formRef.current.reset();
  }; */

  return (
    <header className={styles.container}>
      <div className={styles.container__wrap}>
        <a href="/" className={styles.top__logo}>
          <img
            className={styles.top__logo__img}
            src="/images/LOGO_SOLO 1.svg"
            alt="logo"
          />
          <h1 className={styles.top__logo__title}>커넵</h1>
        </a>
        <form ref={formRef} className={styles.searchbar}>
          <input
            ref={inputRef}
            type="text"
            placeholder="검색어를 입력해주세요"
            className={styles.searchbar__input}
          />
          <button className={styles.searchbar__submit}>
            <img
              className={styles.searchbar__btn__img}
              src="/images/search.png"
              alt="search"
            />
          </button>
        </form>
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
          <div className={styles.top__signup__list}>
            <Link href="/login">
              <a>로그인 |</a>
            </Link>
            <Link href="/register">
              <a>회원가입</a>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
