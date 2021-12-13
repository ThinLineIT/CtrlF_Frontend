import { useState } from 'react';
import UpdateModal from '../../../modal/UpdateModal';

import styled from 'styled-components';
import ModalPreparing from '../../../modal/modal_preparing';
import { useRecoilValue, useRecoilState, useSetRecoilState } from 'recoil';
import {
  preparingModal,
  contextMenuName,
  contextMenuState,
  contextMenuActive,
  pageupdate,
  isOnEditPage,
  ModifyPageContent,
} from '../../../../../store/atom';

export default function RightClickSpan(props) {
  const [showHiddenModal, setShowHiddenModal] = useRecoilState(preparingModal);

  const setShowMenu = useSetRecoilState(contextMenuActive);
  const useContextMenuName = useRecoilValue(contextMenuName);
  const setContextMenuStates = useSetRecoilState(contextMenuState);

  const setIsOnEditor = useSetRecoilState(isOnEditPage);
  const setAddNewContent = useSetRecoilState(pageupdate);
  const setModifyPage = useSetRecoilState(ModifyPageContent);

  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false); // 모달창을 열고 닫는 상태값입니다.

  const onModify = (e) => {
    if (e.target.innerText == '내용 수정') {
      setIsOnEditor(true);
      setAddNewContent(true);
      setModifyPage(true);
      setShowMenu(false)
    } else {      
      setIsUpdateModalOpen(true);
    }
    // setShowMenu(false);
  };

  const onDelete = () => {
    setShowMenu(false);
    setShowHiddenModal(true);
  };

  // 이 객체를 만드는 과정은 추후 따로 분리하는 작업을 거칠 예정입니다.
  const modalData = {
    mainTitle: '노트 수정 요청',
    subTitle: props.noteTitle, // props.noteTitle를 previosTitle로 바꿀 수 있도록 topic의 title을 넘겨주세요
    type: 'Note', // 우클릭으로 누르는 영역에 따라서 타입값을 전달할 수 있도록 값을 바꿔주세요 ex) note에서 우클릭시 type: "Note"이 전달될 수 있도록
  };

  return (
    <ContextContainer x={props.x} y={props.y}>
      <span onClick={onModify}>{useContextMenuName}</span>
      <span onClick={onDelete}>삭제 요청</span>
      {showHiddenModal && <ModalPreparing />}
      {isUpdateModalOpen && (
        <UpdateModal
          modalData={modalData}
          setIsUpdateModalOpen={setIsUpdateModalOpen}
        />
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
