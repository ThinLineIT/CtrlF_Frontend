import styles from '../../styles/layout/topbar.module.css';
import React, { memo, useRef } from 'react';
import Link from 'next/link';

const Topbar = memo(({ list, goMain }) => {
  const inputRef = useRef();

  const handleSearch = () => {
    const value = inputRef.current.value;
    console.log(value);
    inputRef.current.value = '';
  };
  const onClick = () => {
    handleSearch();
  };

  const onKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const handleMain = () => {
    goMain(list);
  };

  return (
    <header className={styles.container}>
      <div className={styles.logo} onClick={handleMain}>
        <img className={styles.img} src="/images/LOGO_SOLO 1.svg" alt="logo" />
        <h1 className={styles.title}>커넵</h1>
      </div>
      <div className={styles.search}>
        <input
          ref={inputRef}
          className={styles.input}
          type="search"
          placeholder="검색어를 입력해주세요"
          onKeyPress={onKeyPress}
        />
        <button className={styles.button} type="submit" onClick={onClick}>
          <img
            className={styles.buttonImg}
            src="/images/search.png"
            alt="search"
          />
        </button>
      </div>
      <div className={styles.linkContainer}>
        <a className={styles.link} href="/signup">
          로그인 |
        </a>
        <a className={styles.link} href="/regist">
          회원가입
        </a>
      </div>
    </header>
  );
});
export default Topbar;
