import styles from './SearchHeader.module.css';
import React, { memo, useRef } from 'react';

const SearchHeader = memo(({ onSearch }) => {
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
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <a href="/">
          <img
            className={styles.img}
            src="/images/LOGO_SOLO 1.svg"
            alt="logo"
          />
        </a>
        <h1 className={styles.title}>
          <a href="/">커넵</a>
        </h1>
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
      <div>
        <a href="/Login" className={styles.login}>
          로그인 |
        </a>
        <a href="/Register" className={styles.register}>
          회원가입
        </a>
      </div>
    </header>
  );
});
export default SearchHeader;
