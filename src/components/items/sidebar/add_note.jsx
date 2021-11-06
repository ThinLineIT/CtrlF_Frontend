import { okBtnActive, isModalActive } from '../../../store/atom';
import styles from '../../../styles/items/sidebar/add_note.module.css';
import useTitle from '../../../utils/useModal';
import IssueCreateModal from '../modal/IssueCreateModal';
import { useSetRecoilState, useRecoilState } from 'recoil';

function AddNote() {
  const setIsUserSubmit = useSetRecoilState(okBtnActive);
  const [showHiddenModal, setShowHiidenModal] = useRecoilState(isModalActive);
  const titleObj = useTitle('note');

  const activeAddNoteModal = () => {
    setIsUserSubmit(false);
    setShowHiidenModal(true);
  };

  return (
    <>
      <div className={styles.container}>
        <button className={styles.button} onClick={activeAddNoteModal}>
          + 노트 추가
        </button>
      </div>
      {showHiddenModal && (
        <>
          <IssueCreateModal titleObj={titleObj} />
        </>
      )}
    </>
  );
}

export default AddNote;
