import { useRecoilState } from 'recoil';
import { preparingModal } from '../../../store/atom';
import ModalPreparing from '../modal/modal_preparing';
import styles from '../../../styles/items/sidebar/add_note.module.css';

function AddNote() {
  const [showHiddenModal, setShowHiidenModal] = useRecoilState(preparingModal);

  const activeAddNoteModal = () => {
    setShowHiidenModal(true);
  };

  return (
    <>
      <div className={styles.container}>
        <button className={styles.button} onClick={activeAddNoteModal}>
          + 노트 추가
        </button>
      </div>
      {showHiddenModal && <ModalPreparing />}
    </>
  );
}

export default AddNote;
