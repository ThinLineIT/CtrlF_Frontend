import { okBtnActive, isModalActive, isJwtActive } from '../../store/atom';
import styles from '../../styles/items/sidebar/add_note.module.css';
import IssueCreateModal from '../items/modal/IssueCreateModal';
import { useSetRecoilState, useRecoilState, useRecoilValue } from 'recoil';

function NewNoteBtn() {
  const setIsUserSubmit = useSetRecoilState(okBtnActive);
  const [showHiddenModal, setShowHiidenModal] = useRecoilState(isModalActive);
  const isJwt = useRecoilValue(isJwtActive);

  const activeAddNoteModal = () => {
    if (!isJwt) return alert('로그인 후 이용이 가능합니다');
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
          <IssueCreateModal issue={'note'} />
        </>
      )}
    </>
  );
}

export default NewNoteBtn;
