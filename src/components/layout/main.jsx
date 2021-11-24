import SideBar from './sidebar';
import React, { useEffect } from 'react';
import NoteList from '../items/notes/note_list';
import styles from '../../styles/layout/main.module.css';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { noteNumber, isModalActive } from '../../store/atom';

export default function Main() {
  const [number, setNumber] = useRecoilState(noteNumber);
  const setShowHiidenModal = useSetRecoilState(isModalActive);

  useEffect(() => {
    setShowHiidenModal(false);
  }, []);

  return (
    <main className={styles.container}>
      <article className={styles.header}>
        <section className={styles.header__title}>
          <span>현재 모아진 아이디어</span> <span>0</span>
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
