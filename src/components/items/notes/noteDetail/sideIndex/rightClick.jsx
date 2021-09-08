import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import ModalInput from '../../../modal/modal_input';
import { useRecoilValue, useRecoilState, useSetRecoilState } from 'recoil';
import {
  addNewPage,
  okBtnActive,
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
  const setShowMenu = useSetRecoilState(contextMenuActive);
  const setIsInputActive = useSetRecoilState(isInputShouldActive);
  const [addNewContent, setAddNewContent] = useRecoilState(addNewPage);
  const [showHiddenModal, setShowHiddenModal] = useRecoilState(isModalActive);

  const [isValidJwt, setIsValidJwt] = useState(false);
  const setModifyPage = useSetRecoilState(ModifyPageContent);
  const useContextMenuName = useRecoilValue(contextMenuName);
  const setModalRestParams = useSetRecoilState(modalRestParams);
  const setContextMenuStates = useSetRecoilState(contextMenuState);
  const setIsOkBtnActive = useSetRecoilState(okBtnActive);
  const setModalTextareaPlaceholder = useSetRecoilState(
    modalTextareaPlaceholder
  );

  const [cookies, setCookie, removeCookie] = useCookies(['token']);
  const isValidToken = cookies.token;

  useEffect(() => {
    isValidToken ? setIsValidJwt(true) : setIsValidJwt(false);
  }, [cookies]);

  useEffect(() => {
    setIsOkBtnActive(false);
  }, []);

  const onModify = (e) => {
    if (e.target.innerText == '내용 수정') {
      if (!isValidJwt) {
        setShowHiddenModal(true);
      } else {
        setAddNewContent(false);
        setModifyPage(true);
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
    setModifyPage(false);
    setIsInputActive(false);
    setModalRestParams('요청');
    setContextMenuStates('삭제');
    setModalTextareaPlaceholder('삭제 요청 사유');

    setShowMenu(false);
    setShowHiddenModal(true);
  };

  return (
    <ContextContainer x={props.x} y={props.y}>
      <span onClick={onModify}>{useContextMenuName}</span>
      <span onClick={onDelete}>삭제 요청</span>
      {showHiddenModal && (
        <>{isValidJwt ? <ModalInput /> : <NonLoginUsersModal />}</>
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
