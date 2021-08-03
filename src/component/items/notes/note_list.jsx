import Link from 'next/link';
import Modal from '../modal/modal';
import useNoteSearch from '../../../hooks/use_note_search';
import styles from '../../../styles/items/notes/note_list.module.css';
import React, { useRef, useState, useEffect, useCallback } from 'react';
import { ModalUpdate, noteNumber, MyToggle } from '../../../store/atom';
import { useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil';

export default function NoteList() {
  const observer = useRef();
  const [lists, setLists] = useState([]);
  const toggle = useRecoilValue(MyToggle);
  const [noteId, setNoteId] = useState('');
  const setNoteNum = useSetRecoilState(noteNumber);
  const [cursorNumber, setCursorNumber] = useState(0);
  const { notes, hasMore, loading, length } = useNoteSearch(cursorNumber);
  const [isModalActive, setIsModalActive] = useRecoilState(ModalUpdate);

  useEffect(() => {
    setNoteNum(length);
    if (toggle === '') {
      setLists(notes);
    } else if (toggle === 'true') {
      setLists(notes.filter((a) => a.is_approved == true));
    } else if (toggle === 'false') {
      setLists(notes.filter((a) => a.is_approved == false));
    }
  }, [notes, toggle]);

  const lastNoteElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setCursorNumber((prevCursorNumber) => prevCursorNumber + 30);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  const handleClick = (e, id, status) => {
    if (status !== 'true') {
      e.preventDefault();
      setIsModalActive(false);
      setNoteId(id);
    }
  };

  // const getTheme = (index) => {
  //   const func = Math.floor((index / 5) % 15);
  //   console.log(`styles.color_${func}`);
  //   // console.log(`styles.color_(${index} / 5 ) % 15)`);
  //   return `styles.color_${func}`;
  // };

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
                )}`}
              >
                <Link href="/note/[id]" as={`/notes/${note.id}`}>
                  <a
                    className={styles.link}
                    onClick={(e) =>
                      handleClick(e, `${note.id}`, `${note.is_approved}`)
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
                )}
                ${getTheme(index)}`}
              >
                <Link href="/note/[id]" as={`/note/${note.id}`}>
                  <a
                    className={styles.link}
                    onClick={(e) =>
                      handleClick(e, `${note.id}`, `${note.is_approved}`)
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
        <Modal id={noteId} />
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
