import { useState, memo } from 'react';
import styled from 'styled-components';
import UpdateModal from '../../items/modal/UpdateModal';
import PreparingModal from '../../items/modal/PreparingModal';
import DeleteModal from '../../items/modal/DeleteModal';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import {
  contextMenuName,
  addNewPage,
  ModifyPageContent,
  pageupdate,
} from '../../../store/atom';

function ContextMenu({
  previosTitle,
  noteId,
  NOTE,
  x,
  y,
  topicId,
  setShowMenu,
  dataType,
  dataId,
  dataTitle,
}) {
  const useContextMenuName = useRecoilValue(contextMenuName);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);

  let modalData = {
    mainTitle: `${NOTE ? '노트' : '토픽'} 이름 수정 요청`,
    previosTitle: previosTitle,
    status: NOTE ? 'Note' : 'Topic',
  };

  const setModifyPage = useSetRecoilState(ModifyPageContent);
  const setupdtepage = useSetRecoilState(pageupdate);
  const setAddNewPageContent = useSetRecoilState(addNewPage);

  const onModify = () => {
    if (useContextMenuName === '이름 수정') {
      setIsUpdateModalOpen(true);
    } else if (useContextMenuName === '내용 수정') {
      setAddNewPageContent(false);
      setupdtepage(true);
      setModifyPage(true);
    }
  };

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const onDelete = () => {
    setShowDeleteModal(true);
  };

  return (
    <ContextContainer x={x} y={y}>
      <span onClick={onModify}>{useContextMenuName}</span>
      <span onClick={onDelete}>삭제 요청</span>
      {isUpdateModalOpen && (
        <UpdateModal
          id={dataId}
          type={dataType}
          originTitle={dataTitle}
          setIsUpdateModalOpen={setIsUpdateModalOpen}
        />
      )}
      {showDeleteModal && (
        <DeleteModal
          type={dataType}
          id={dataId}
          setShowDeleteModal={setShowDeleteModal}
          originTitle={dataTitle}
        />
      )}
    </ContextContainer>
  );
}

export default memo(ContextMenu);

const ContextContainer = styled.div`
  z-index: 1;
  position: absolute;
  top: ${(props) => props.y};
  left: ${(props) => props.x};
  width: 120px;
  height: 5em;
  font-size: 1.1rem;
  background: white;
  border: 0.2px solid rgba(185, 185, 185, 0.315);
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.19);
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  cursor: pointer;

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
