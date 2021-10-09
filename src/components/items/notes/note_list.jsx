import Link from 'next/link';
import NotApprovedModal from '../modal/not_approved_modal';
import styles from '../../../styles/items/notes/note_list.module.css';
import React, { useRef, useState, useEffect, useCallback } from 'react';
import {
  isApprovedModal,
  noteNumber,
  MyToggle,
  modalUtilsName,
  modalUtilsSyntax,
} from '../../../store/atom';
import { useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil';
import usePagination from '../../../utils/use_pagination';
import UseLoader from '../../../utils/useLoader';

export default function NoteList() {
  const noteObserver = useRef();
  const [lists, setLists] = useState([]);
  const toggle = useRecoilValue(MyToggle);
  const [noteId, setNoteId] = useState('');
  const setNameState = useSetRecoilState(modalUtilsName);
  const setModalSyntax = useSetRecoilState(modalUtilsSyntax);
  const [cursorNumber, setCursorNumber] = useState(0);
  const [notApprovedModalActive, setNotApprovedModalActive] =
    useRecoilState(isApprovedModal);
  const { notes, hasMore, loading } = usePagination(cursorNumber);

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
          if (lists.length === index + 1) {
            return (
              <div
                ref={lastNoteElementRef}
                key={note.id}
                className={`${styles.container_note} ${getStyles(
                  note.is_approved
                )} ${styles[`color_${Math.floor((index / 5) % 15)}`]}`}
              >
                <Link href="/notes/[id]" as={`/notes/${note.id}`}>
                  <a
                    className={styles.link}
                    onClick={(e) =>
                      ifNotApprovedNoteClicked(
                        e,
                        `${note.id}`,
                        `${note.is_approved}`
                      )
                    }
                  >
                    {note.title}
                  </a>
                </Link>
              </div>
            );
          } else {
            return (
              <div
                key={note.id}
                className={`${styles.container_note} ${getStyles(
                  note.is_approved
                )} ${styles[`color_${Math.floor((index / 5) % 15)}`]}
                `}
              >
                <Link href="/notes/[id]" as={`/notes/${note.id}`}>
                  <a
                    className={styles.link}
                    onClick={(e) =>
                      ifNotApprovedNoteClicked(
                        e,
                        `${note.id}`,
                        `${note.is_approved}`
                      )
                    }
                  >
                    {note.title}
                  </a>
                </Link>
              </div>
            );
          }
        })}
      <div style={{ padding: '30% 0' }}>{loading && <UseLoader />}</div>
      {notApprovedModalActive && <NotApprovedModal id={noteId} />}
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
