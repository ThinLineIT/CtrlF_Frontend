import Link from 'next/link';
import Modal from '../modal/modal';
import React, { useRef, useState, useEffect, useCallback } from 'react';
import useNoteSearch from '../../../hooks/use_note_search';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { ModalUpdate, noteNumber, noteList } from '../../../store/atom';
import styles from '../../../styles/items/notes/note_list.module.css';

export default function NoteList() {
  const observer = useRef();
  const [cursorNumber, setCursorNumber] = useState(0);
  const { notes, hasMore, error, loading, length, approved, notApproved } =
    useNoteSearch(cursorNumber);
  const [isModalActive, setIsModalActive] = useRecoilState(ModalUpdate);
  const setNoteNum = useSetRecoilState(noteNumber);
  // const list = useRecoilValue(noteList);

  const handleClick = (e, status) => {
    // if (status !== 'true') {
    //   e.preventDefault();
    //   setIsModalActive(false);
    // }
  };
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
  const setNotes = () => {
    setNoteNum(length);
    // setList(notes);
    console.log(notes);
    console.log(approved);
    console.log(notApproved);
  };

  async function renderNotes() {
    if (notes.length > 0 && approved.length > 0 && notApproved.length > 0) {
      setNotes();
    }
  }
  renderNotes();

  return (
    <div className={styles.container}>
      {notes &&
        notes.map((note, index) => {
          if (notes.length === index + 1) {
            return (
              <div
                ref={lastNoteElementRef}
                key={note.id}
                className={`${styles.container_note} ${getStyles(
                  note.is_approved
                )}`}
              >
                <Link
                  href="/note/[id]"
                  as={`/notes/${note.id}`}
                  style={{ margin: 0 }}
                >
                  <a
                    className={styles.link}
                    onClick={(e) => handleClick(e, `${note.is_approved}`)}
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
                )}`}
              >
                <Link
                  href="/note/[id]"
                  as={`/note/${note.id}`}
                  style={{ margin: 0 }}
                >
                  <a
                    className={styles.link}
                    onClick={(e) => handleClick(e, `${note.is_approved}`)}
                  >
                    {note.title}
                  </a>
                </Link>
              </div>
            );
          }
        })}
      {/* <div className={`${styles.notes_modal} ${isModalActive ? `${styles.hidden}` : ''}`}>
        <Modal />
      </div> */}
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
