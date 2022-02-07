import axios from 'axios';
import SideBar from '../sidebar/sidebar';
import React, { useEffect, useState } from 'react';
import NoteList from '../notes/NoteList';
import styles from '../../styles/layout/main.module.css';
import { useSetRecoilState } from 'recoil';
import { isModalActive } from '../../store/atom';

function HomePage({ res }) {
  const [issueNum, setIssueNum] = useState(null);
  const setShowHiidenModal = useSetRecoilState(isModalActive);

  useEffect(() => {
    if (issueNum) return;
    let cancel;
    axios
      .get(`${process.env.NEXT_PUBLIC_API_BASE_URL}issues/issue-count/`, {
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
      })
      .then((res) => {
        const {
          data: { issues_count },
        } = res;
        setIssueNum(issues_count);
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
      });

    return () => cancel();
  }, []);

  useEffect(() => {
    setShowHiidenModal(false);
  }, []);

  return (
    <main className={styles.container}>
      <article className={styles.header}>
        <section className={styles.header__title}>
          <span>현재 모아진 아이디어</span> <span>{issueNum}</span>
        </section>
      </article>
      <article className={styles.body}>
        <section className={styles.item__list}>
          <NoteList />
        </section>
        <section className={styles.sidebar}>
          <SideBar />
        </section>
      </article>
    </main>
  );
}

export default React.memo(HomePage);
