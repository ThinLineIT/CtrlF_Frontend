import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import {
  modalName,
  contextMenuState,
  isModalActive,
  modalUtilsName,
  modalRestParams,
  modalUtilsSyntax,
  isValidOnMainpage,
  isInputShouldActive,
  modalInputPlaceholder,
  modalTextareaPlaceholder,
} from '../../../store/atom';
import styles from '../../../styles/items/sidebar/add_note.module.css';
import NonLoginUsersModal from '../modal/non_login_users_modal';
import ModalInput from '../modal/modal_input';
import { useSetRecoilState, useRecoilState } from 'recoil';

function AddNote() {
  const [isValidJwt, setIsValidJwt] = useState(false);
  const setIsOnMainPage = useSetRecoilState(isValidOnMainpage);
  const [cookies, setCookie, removeCookie] = useCookies(['token']);
  const setIsInputActive = useSetRecoilState(isInputShouldActive);
  const [showHiddenModal, setShowHiidenModal] = useRecoilState(isModalActive);
  const isValidToken = cookies.token;

  const setModalTitle = useSetRecoilState(modalName);
  const setModalSyntax = useSetRecoilState(modalUtilsSyntax);
  const setModalUtilsName = useSetRecoilState(modalUtilsName);
  const setModalRestParams = useSetRecoilState(modalRestParams);
  const setModalInputPlaceholder = useSetRecoilState(modalInputPlaceholder);
  const setContextMenuStates = useSetRecoilState(contextMenuState);
  const setTextareaPlaceholder = useSetRecoilState(modalTextareaPlaceholder);

  useEffect(() => {
    isValidToken !== undefined ? setIsValidJwt(true) : setIsValidJwt(false);
  }, [cookies]);

  const activeAddNoteModal = () => {
    setModalRestParams('');
    setContextMenuStates('');
    setModalTitle('ADD NOTE');
    setModalSyntax('는');
    setModalUtilsName('노트');
    setIsInputActive(true);
    setModalInputPlaceholder('note title');
    setTextareaPlaceholder('요청 내용 설명');

    setIsOnMainPage(true);
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
          {isValidJwt ? <ModalInput isInputActive /> : <NonLoginUsersModal />}
        </>
      )}
    </>
  );
}

export default AddNote;
