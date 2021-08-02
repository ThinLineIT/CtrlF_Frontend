import React from 'react';
import { useRecoilState } from 'recoil';
import { noteModal } from '../../../store/atom';
import AddNoteModal from '../modal/add_note_modal';
import styles from '../../../styles/items/sidebar/add_note.module.css';

function AddNote() {
  const [isModalActive, setIsModalActive] = useRecoilState(noteModal);

  const activeModal = (e) => {
    e.preventDefault();
    setIsModalActive(false);
  };

  return (
    <>
      <div className={styles.container}>
        <button className={styles.button} onClick={activeModal}>
          + 노트 추가
        </button>
      </div>
      <div
        className={`${styles.notes_modal} ${
          isModalActive ? `${styles.hidden}` : ''
        }`}
      >
        <AddNoteModal />
      </div>
    </>
  );
}

export default AddNote;
