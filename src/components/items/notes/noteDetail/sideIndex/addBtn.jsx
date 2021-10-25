import { useRecoilState, useSetRecoilState } from 'recoil';
import styles from '../../../../../styles/items/notes/noteDetail/sideIndex/addBtn.module.css';
import {
  modalName,
  addNewPage,
  okBtnActive,
  isModalActive,
  modalUtilsName,
  modalRestParams,
  contextMenuState,
  modalUtilsSyntax,
  ModifyPageContent,
  isValidOnMainpage,
  isInputShouldActive,
  modalInputPlaceholder,
  modalTextareaPlaceholder,
} from '../../../../../store/atom';
import ModalInput from '../../../modal/modal_input';

export default function AddBtn({ noteId }) {
  const setModalTitle = useSetRecoilState(modalName);
  const setAddNewContent = useSetRecoilState(addNewPage);
  const setIsOkBtnActive = useSetRecoilState(okBtnActive);
  const setModifyPage = useSetRecoilState(ModifyPageContent);
  const setModalSyntax = useSetRecoilState(modalUtilsSyntax);
  const setModalUtilsName = useSetRecoilState(modalUtilsName);
  const setIsOnMainPage = useSetRecoilState(isValidOnMainpage);
  const setModalRestParams = useSetRecoilState(modalRestParams);
  const setContextMenuStates = useSetRecoilState(contextMenuState);
  const setIsInputActive = useSetRecoilState(isInputShouldActive);
  const setModalInputPlaceholder = useSetRecoilState(modalInputPlaceholder);
  const setTextareaPlaceholder = useSetRecoilState(modalTextareaPlaceholder);

  const [showHiddenModal, setShowHiddenModal] = useRecoilState(isModalActive);

  const activeAddTopicModal = () => {
    setIsOnMainPage(true);
    setIsInputActive(true);
    setIsOkBtnActive(false);
    setModifyPage(false);

    setModalSyntax('은');
    setModalRestParams('');
    setContextMenuStates('');
    setModalUtilsName('토픽');
    setModalTitle('ADD TOPIC');
    setModalInputPlaceholder('topic title');
    setTextareaPlaceholder('요청 내용 설명');

    setShowHiddenModal(true);
  };

  const activeAddPageModal = () => {
    setAddNewContent(true);
    setModifyPage(true);
  };
  return (
    <>
      <div className={styles.addBtn}>
        <button onClick={activeAddTopicModal}>+ 토픽 추가</button>
        <button onClick={activeAddPageModal}>+ 페이지 추가</button>
      </div>
      {showHiddenModal && (
        <div className={styles.notes_modal}>
          <ModalInput noteId={noteId} />
        </div>
      )}
    </>
  );
}
