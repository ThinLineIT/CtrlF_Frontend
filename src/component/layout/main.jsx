import SideBar from './sidebar';
import NoteList from '../items/notes/note_list';
import { useRecoilValue, useRecoilValueLoadable } from 'recoil';
import { noteList, countState, HeaderBar, noteNumber } from '../../store/atom';
import { Loader } from 'semantic-ui-react';
import styles from '../../styles/layout/main.module.css';

export default function Main() {
  const number = useRecoilValue(noteNumber);
  const header = useRecoilValue(HeaderBar);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p className={styles.header__title}>
          <span>{header}</span> <span>{number}</span>
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
