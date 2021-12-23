import Link from 'next/link';
import UseLoader from '../../../utils/useLoader';
import usePagination from '../../../utils/use_pagination';
import NotApprovedModal from '../modal/not_approved_modal';
import styles from '../../../styles/items/notes/note_list.module.css';
import React, { useRef, useState, useEffect, useCallback } from 'react';
import { useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil';
import {
  isApprovedModal,
  MyToggle,
  modalUtilsName,
  modalUtilsSyntax,
} from '../../../store/atom';

export default function NoteList() {
  const noteObserver = useRef();
  const [lists, setLists] = useState([]);
  const toggle = useRecoilValue(MyToggle);
  const [noteId, setNoteId] = useState('');
  const [cursorNumber, setCursorNumber] = useState(0);
  const setNameState = useSetRecoilState(modalUtilsName);
  const setModalSyntax = useSetRecoilState(modalUtilsSyntax);
  const { notes, hasMore, loading } = usePagination(cursorNumber);
  const [notApprovedModalActive, setNotApprovedModalActive] =
    useRecoilState(isApprovedModal);

  useEffect(() => {
    if (toggle === '') {
      setLists(notes);
    } else if (toggle === 'true') {
      setLists(notes.filter((note) => note.is_approved == true));
    } else if (toggle === 'false') {
      setLists(notes.filter((note) => note.is_approved == false));
    }
  }, [notes, toggle]);

  const lastNoteElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (noteObserver.current) noteObserver.current.disconnect();
      noteObserver.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          const everyNextCursorNumber = 30;
          setCursorNumber(
            (prevCursorNumber) => prevCursorNumber + everyNextCursorNumber
          );
        }
      });
      if (node) noteObserver.current.observe(node);
    },
    [loading, hasMore]
  );

  const ifNotApprovedNoteClicked = (event, id, status) => {
    if (status !== 'true') {
      event.preventDefault();
      setNoteId(id);
      setNameState('노트');
      setModalSyntax('는');
      setNotApprovedModalActive(true);
    }
  };

  return (
    <div className={styles.container}>
      {lists &&
        lists.map((note, index) => {
          const { id, title, is_approved } = note;
          if (lists.length === index + 1) {
            return (
              <Link href="/notes/[id]" as={`/notes/${id}`} key={id}>
                <a
                  onClick={(e) =>
                    ifNotApprovedNoteClicked(e, `${id}`, `${is_approved}`)
                  }
                  className={styles.link}
                >
                  <div
                    ref={lastNoteElementRef}
                    className={`${styles.container_note} ${getStyles(
                      is_approved
                    )} ${styles[`color_${Math.floor((index / 5) % 15)}`]}`}
                  >
                    <span>{title}</span>
                  </div>
                </a>
              </Link>
            );
          } else {
            return (
              <Link href="/notes/[id]" as={`/notes/${id}`} key={id}>
                <a
                  onClick={(e) =>
                    ifNotApprovedNoteClicked(e, `${id}`, `${is_approved}`)
                  }
                  className={styles.link}
                >
                  <div
                    className={`${styles.container_note} ${getStyles(
                      is_approved
                    )} ${styles[`color_${Math.floor((index / 5) % 15)}`]}
                `}
                  >
                    <span>{title}</span>
                  </div>
                </a>
              </Link>
            );
          }
        })}
      {notApprovedModalActive && <NotApprovedModal id={noteId} />}
      <div style={{ padding: '30% 0' }}>{loading && <UseLoader />}</div>
    </div>
  );
}

function getStyles(status) {
  switch (status) {
    case true:
      return '';
    case false:
      return styles.dark;
    default:
      console.log('Error');
  }
}
