import Link from 'next/link';
import React, { memo, useRef, useState } from 'react';
import styles from '../../styles/layout/topbar.module.css';
// import useNoteSearch from '../../hooks/use_note_search';

const Topbar = memo(() => {
  const [query, setQuery] = useState('');
  const [cursorNumber, setCursorNumber] = useState(0);
  // useNoteSearch(cursorNumber, query);

  function handleSearch(e) {
    // setQuery(e.target.value);
    // setCursorNumber(0);
    e.currentTarget.value = '';
  }
  const onClick = (e) => {
    handleSearch(e);
  };

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
        <div className={styles.searchbar}>
          <input
            className={styles.searchbar__input}
            type="search"
            placeholder="검색어를 입력해주세요"
            onKeyPress={handleSearch}
          />
          <button
            className={styles.searchbar__button}
            type="submit"
            onClick={onClick}
          >
            <img
              className={styles.searchbar__btn__img}
              src="/images/search.png"
              alt="search"
            />
          </button>
        </div>
        <div className={styles.top__signup__list}>
          <Link href="/signup">로그인 |</Link>
          <Link href="/regist">회원가입</Link>
        </div>
      </div>
    </header>
  );
});
export default Topbar;
