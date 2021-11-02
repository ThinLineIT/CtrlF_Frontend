import { useRecoilState, useSetRecoilState } from 'recoil';
import styles from '../../../../../styles/items/notes/noteDetail/sideIndex/addBtn.module.css';
import {
  addNewPage,
  okBtnActive,
  isModalActive,
  ModifyPageContent,
} from '../../../../../store/atom';
import useTitle from '../../../../../utils/useModal';
import IssueCreateModal from '../../../modal/IssueCreateModal';

export default function AddBtn({ noteId }) {
  const setAddNewContent = useSetRecoilState(addNewPage);
  const setIsUserSubmit = useSetRecoilState(okBtnActive);
  const setModifyPage = useSetRecoilState(ModifyPageContent);
  const [showHiddenModal, setShowHiddenModal] = useRecoilState(isModalActive);

  const titleObj = useTitle('topic');

  const activeAddTopic = () => {
    setIsUserSubmit(false);
    setModifyPage(false);
    setShowHiddenModal(true);
  };

  const activeAddPage = () => {
    setAddNewContent(true);
    setModifyPage(true);
  };
  return (
    <>
      <div className={styles.addBtn}>
        <button onClick={activeAddTopic}>+ 토픽 추가</button>
        <button onClick={activeAddPage}>+ 페이지 추가</button>
      </div>
      {showHiddenModal && (
        <div className={styles.notes_modal}>
          <IssueCreateModal titleObj={titleObj} noteId={noteId} />
        </div>
      )}
    </>
  );
}
