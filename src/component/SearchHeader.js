import styles from './SearchHeader.module.css';
import React, { memo, useRef } from 'react';
import Link from 'next/link';

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
        <Link
          href="/Login"
          style={{
            fontSize: '1.2rem',
            fontWeight: 550,
            color: 'inherit',
            textDecoration: 'none',
            listStyle: 'none',
            cursor: 'pointer',
          }}
        >
          로그인 |
        </Link>
        <Link
          href="/Register"
          style={{
            fontSize: '1.2rem',
            fontWeight: 550,
            color: 'inherit',
            textDecoration: 'none',
            listStyle: 'none',
            cursor: 'pointer',
          }}
        >
          회원가입
        </Link>
      </div>
    </header>
  );
});
export default SearchHeader;
