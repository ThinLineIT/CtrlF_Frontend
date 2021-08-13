import Link from 'next/link';
import NotApprovedModal from '../modal/not_approved_modal';
import styles from '../../../styles/items/notes/note_list.module.css';
import React, { useRef, useState, useEffect, useCallback } from 'react';
import { ModalUpdate, noteNumber, MyToggle } from '../../../store/atom';
import { useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil';
import usePagination from '../../../utils/use_pagination';

export default function NoteList() {
  const noteObserver = useRef();
  const [lists, setLists] = useState([]);
  const toggle = useRecoilValue(MyToggle);
  const [noteId, setNoteId] = useState('');
  const setNoteNum = useSetRecoilState(noteNumber);
  const [cursorNumber, setCursorNumber] = useState(0);
  const { notes, hasMore, loading, length } = usePagination(cursorNumber);
  const [isModalActive, setIsModalActive] = useRecoilState(ModalUpdate);

  useEffect(() => {
    setNoteNum(length);
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
      setIsModalActive(false);
      setNoteId(id);
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
                <Link href="/note/[id]" as={`/notes/${note.id}`}>
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
                <Link href="/note/[id]" as={`/note/${note.id}`}>
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
      <div
        className={`${styles.notes_modal} ${
          isModalActive ? `${styles.hidden}` : ''
        }`}
      >
        <NotApprovedModal id={noteId} />
      </div>
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
