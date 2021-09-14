import { useRecoilState, useSetRecoilState } from 'recoil';
import ModalInput from '../../../../items/modal/modal_input';
import NonLoginUsersModal from '../../../../items/modal/non_login_users_modal';
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
  isValidOnMainpage,
  ModifyPageContent,
  isInputShouldActive,
  modalInputPlaceholder,
  modalTextareaPlaceholder,
} from '../../../../../store/atom';
// import MarkdownEditor from '../markdownEditor';

export default function AddBtn({ isValidJwt }) {
  const [addNewContent, setAddNewContent] = useRecoilState(addNewPage);
  const setIsOnMainPage = useSetRecoilState(isValidOnMainpage);
  const setIsInputActive = useSetRecoilState(isInputShouldActive);
  const [showHiddenModal, setShowHiddenModal] = useRecoilState(isModalActive);

  const setModalTitle = useSetRecoilState(modalName);
  const setIsOkBtnActive = useSetRecoilState(okBtnActive);
  const setModifyPage = useSetRecoilState(ModifyPageContent);
  const setModalSyntax = useSetRecoilState(modalUtilsSyntax);
  const setModalUtilsName = useSetRecoilState(modalUtilsName);
  const setModalRestParams = useSetRecoilState(modalRestParams);
  const setContextMenuStates = useSetRecoilState(contextMenuState);
  const setModalInputPlaceholder = useSetRecoilState(modalInputPlaceholder);
  const setTextareaPlaceholder = useSetRecoilState(modalTextareaPlaceholder);

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
        <button onClick={activeAddTopicModal}>+ add topic</button>
        <button onClick={activeAddPageModal}>+ add page</button>
      </div>
      {showHiddenModal && (
        <div className={styles.notes_modal}>
          {isValidJwt ? <ModalInput /> : <NonLoginUsersModal />}
        </div>
      )}
    </>
  );
}
