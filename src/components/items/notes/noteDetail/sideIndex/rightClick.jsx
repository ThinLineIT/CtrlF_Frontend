import { useState } from 'react';
import styled from 'styled-components';
import DetailModal from '../../../modal/DetailModal';
import { useRecoilValue, useRecoilState, useSetRecoilState } from 'recoil';
import {
  preparingModal,
  contextMenuName,
  addNewPage,
  ModifyPageContent,
  pageupdate,
} from '../../../../../store/atom';

export default function RightClickSpan({
  previosTitle,
  noteId,
  NOTE,
  x,
  y,
  topicId,
}) {
  const useContextMenuName = useRecoilValue(contextMenuName);
  const [showPreparingModal, setShowPreparingModal] =
    useRecoilState(preparingModal);

  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false); // 모달창을 열고 닫는 상태값입니다.

  let modalData = {
    mainTitle: `${NOTE ? '노트' : '토픽'} 이름 수정 요청`,
    previosTitle: previosTitle,
    status: NOTE ? 'Note' : 'Topic',
  };

  const setModifyPage = useSetRecoilState(ModifyPageContent);
  const setupdtepage = useSetRecoilState(pageupdate);
  const setAddNewPageContent = useSetRecoilState(addNewPage);
  const onModify = (e) => {
    if (e.target.innerHTML === '내용 수정') {
      setAddNewPageContent(false);
      setupdtepage(true);
      setModifyPage(true);
    }
    setIsDetailModalOpen(true);
  };

  const onDelete = () => {
    setShowPreparingModal(true);
  };

  return (
    <ContextContainer x={x} y={y}>
      <span onClick={onModify}>{useContextMenuName}</span>
      <span onClick={onDelete}>삭제 요청</span>
      {isDetailModalOpen && (
        <DetailModal
          noteId={noteId}
          topicId={topicId}
          modalData={modalData}
          setIsDetailModalOpen={setIsDetailModalOpen}
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
