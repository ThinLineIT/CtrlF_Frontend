import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { noteModal } from "../../../../../store/atom";
import AddNoteModal from "../../../../items/modal/add_note_modal";
import styles from "../../../../../styles/items/notes/noteDetail/sideIndex/addBtn.module.css";

export default function AddBtn() {
  const [isModalActive, setIsModalActive] = useRecoilState(noteModal);

  const activeAddNoteModal = () => {
    setIsModalActive(true);
  };

  useEffect(() => {
    setIsModalActive(false);
  }, []);

  return (
    <>
      <div className={styles.addBtn}>
        <button onClick={activeAddNoteModal}>+ add topic</button>
        <button>+ add page</button>
      </div>
      <div
        className={`${styles.notes_modal} ${
          isModalActive ? null : `${styles.hidden}`
        }`}
      >
        <AddNoteModal />
      </div>
    </>
  );
}
