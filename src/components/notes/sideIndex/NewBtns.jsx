import { useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil';
import styles from '../../../styles/items/notes/noteDetail/sideIndex/new_btns.module.css';
import {
  pageupdate,
  addNewPage,
  okBtnActive,
  isJwtActive,
  isOnEditPage,
  isModalActive,
  ModifyPageContent,
} from '../../../store/atom';
import IssueCreateModal from '../../items/modal/IssueCreateModal';

export default function NewBtns({ noteId }) {
  const setUpdatePage = useSetRecoilState(pageupdate);
  const setIsOnEditor = useSetRecoilState(isOnEditPage);
  const setAddNewContent = useSetRecoilState(addNewPage);
  const setIsUserSubmit = useSetRecoilState(okBtnActive);
  const setModifyPage = useSetRecoilState(ModifyPageContent);
  const [showHiddenModal, setShowHiddenModal] = useRecoilState(isModalActive);

  const isJwt = useRecoilValue(isJwtActive);

  const activeAddTopic = () => {
    if (!isJwt) return alert('로그인 후 이용이 가능합니다');
    setIsUserSubmit(false);
    setModifyPage(false);
    setShowHiddenModal(true);
  };

  const activeAddPage = () => {
    if (!isJwt) return alert('로그인 후 이용이 가능합니다');
    window.scrollTo({ top: 0, behavior: 'smooth' });

    setTimeout(() => {
      setIsOnEditor(true);
      setAddNewContent(true);
      setUpdatePage(false);
      setModifyPage(true);
    }, 800);
  };

  return (
    <>
      <div className={styles.addBtn}>
        <button onClick={activeAddTopic}>+ 토픽 추가</button>
        <button onClick={activeAddPage}>+ 페이지 추가</button>
      </div>
      {showHiddenModal && (
        <div className={styles.notes_modal}>
          <IssueCreateModal noteId={noteId} issue={'topic'} />
        </div>
      )}
    </>
  );
}
