import React, { useEffect } from 'react';
import SideBar from './sidebar';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import NoteList from '../items/notes/note_list';
import styles from '../../styles/layout/main.module.css';
import { HeaderBar, noteNumber, isModalActive } from '../../store/atom';

export default function Main() {
  const header = useRecoilValue(HeaderBar);
  const number = useRecoilValue(noteNumber);
  const setShowHiidenModal = useSetRecoilState(isModalActive);

  useEffect(() => {
    setShowHiidenModal(false);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p className={styles.header__title}>
          <span>{header}</span> <span>0</span>
        </p>
      </div>
      <div className={styles.body}>
        <div className={styles.item__list}>
          <NoteList />
        </div>
        <div className={styles.sidebar}>
          <SideBar />
        </div>
      </div>
    </div>
  );
}
