import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useCookies } from 'react-cookie';
import ModalInput from '../../../modal/modal_input';
import { useRecoilValue, useRecoilState, useSetRecoilState } from 'recoil';
import styles from '../../../../../styles/items/notes/noteDetail/sideIndex/rightClick.module.css';
import {
  okBtnActive,
  detailTitle,
  isModalActive,
  modalRestParams,
  contextMenuName,
  contextMenuState,
  ModifyPageContent,
  contextMenuActive,
  isInputShouldActive,
  modalTextareaPlaceholder,
} from '../../../../../store/atom';
import NonLoginUsersModal from '../../../modal/non_login_users_modal';

export default function RightClickSpan(props) {
  const [isValidJwt, setIsValidJwt] = useState(false);
  const setShowMenu = useSetRecoilState(contextMenuActive);
  const setIsInputActive = useSetRecoilState(isInputShouldActive);
  const [showHiddenModal, setShowHiddenModal] = useRecoilState(isModalActive);

  const [cookies, setCookie, removeCookie] = useCookies(['token']);
  const isValidToken = cookies.token;

  const noteTitle = useRecoilValue(detailTitle);
  const setModifyPage = useSetRecoilState(ModifyPageContent);
  const useContextMenuName = useRecoilValue(contextMenuName);
  const setModalRestParams = useSetRecoilState(modalRestParams);
  const setContextMenuStates = useSetRecoilState(contextMenuState);
  const setIsOkBtnActive = useSetRecoilState(okBtnActive);
  const setModalTextareaPlaceholder = useSetRecoilState(
    modalTextareaPlaceholder
  );

  useEffect(() => {
    setIsOkBtnActive(false);
    isValidToken !== undefined ? setIsValidJwt(true) : setIsValidJwt(false);
  }, [isValidToken]);

  const onModify = (e) => {
    if (e.target.innerText == '내용 수정') {
      if (!isValidJwt) {
        setShowHiddenModal(true);
        setModifyPage(false);
      } else {
        setModifyPage(true);
        setContextMenuStates('내용 수정');
      }
    } else {
      setModifyPage(false);
      setShowHiddenModal(true);
      setContextMenuStates('이름 수정');
    }

    setShowMenu(false);
    setModalRestParams('');
    setIsInputActive(true);
    setModalTextareaPlaceholder('수정 요청 사유');
  };

  const onDelete = () => {
    setContextMenuStates('삭제');
    setModalRestParams('요청');
    setIsInputActive(false);
    setModifyPage(false);
    modalRestParams;
    setModalTextareaPlaceholder('삭제 요청 사유');

    setShowMenu(false);
    setShowHiddenModal(true);
  };

  return (
    <ContextContainer x={props.x} y={props.y}>
      <span onClick={onModify}>{useContextMenuName}</span>
      {showHiddenModal && (
        <div className={styles.hiddenModal}>
          {isValidJwt ? (
            <ModalInput noteName={noteTitle} />
          ) : (
            <NonLoginUsersModal />
          )}
        </div>
      )}
      <span onClick={onDelete}>삭제 요청</span>
      {showHiddenModal && (
        <div className={styles.hiddenModal}>
          {isValidJwt ? (
            <ModalInput noteName={noteTitle} />
          ) : (
            <NonLoginUsersModal />
          )}
        </div>
      )}
    </ContextContainer>
  );
}

const ContextContainer = styled.div`
  z-index: 1;
  position: absolute;
  top: ${(props) => props.y};
  left: ${(props) => props.x};
  width: 120px;
  height: 5em;
  cursor: pointer;
  font-size: 1.1rem;
  background: white;
  border: 0.2px solid rgba(185, 185, 185, 0.315);
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.19);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;

  & > span {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 10px;
    border-radius: 5px;

    &:hover {
      background-color: #b5bdff;
    }
  }
`;
