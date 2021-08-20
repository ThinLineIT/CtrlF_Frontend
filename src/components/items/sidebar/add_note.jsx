import React from "react";
import { useRecoilState } from "recoil";
import { noteModal } from "../../../store/atom";
import AddNoteModal from "../modal/add_note_modal";
import styles from "../../../styles/items/sidebar/add_note.module.css";

function AddNote() {
  const [isModalActive, setIsModalActive] = useRecoilState(noteModal);

  const activeAddNoteModal = () => {
    setIsModalActive(true);
  };

  return (
    <>
      <div className={styles.container}>
        <button className={styles.button} onClick={activeAddNoteModal}>
          + 노트 추가
        </button>
      </div>
      {isModalActive ? (
        <div>
          <AddNoteModal />
        </div>
      ) : null}
    </>
  );
}

export default AddNote;
